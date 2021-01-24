import { getSelectedItems, getTotalPrice } from "common/data/cart";
import { TelegramClient } from "server/telegram";
import { getDeliveryCost } from "common/data/price";
import { TOrder } from "common/data/order";
import { config } from "common/config";

const DIVIDER = " ";

export class TelegramReporter {
  private readonly client: TelegramClient;
  private readonly channelId: string;

  constructor(client: TelegramClient, channelId: string) {
    this.client = client;
    this.channelId = channelId;
  }
  private generateOrderReport(orderId: number, { cart, user }: TOrder) {
    const itemsLines = getSelectedItems(cart).map(
      ({ id, title }) => `${cart.countById[id]} x ${title}`
    );
    const totalPrice = getTotalPrice(cart);
    const deliveryCost = getDeliveryCost(totalPrice);

    return [
      `*Заказ c сайта* [№${orderId}](${config.publicUrl}/admin/invoice/${orderId})`,
    ]
      .concat(...itemsLines)
      .concat(DIVIDER)
      .concat(`*Доставка:* ${deliveryCost}₽`)
      .concat(`*Итого:* ${totalPrice + deliveryCost}₽`)
      .concat(DIVIDER)
      .concat(`*Имя:* ${user.name}`)
      .concat(`*Телефон:* ${user.phone}`)
      .concat(`*Адрес:* ${user.address}`)
      .concat(`*Подъезд:* ${user.entrance}`)
      .concat(`*Домофон:* ${user.intercomCode}`)
      .concat(`*Этаж:* ${user.floor}`)
      .concat(`*Квартира/офис:* ${user.apartment}`)
      .join("\n");
  }

  public async sendReport(orderId: number, order: TOrder) {
    const reportMarkdown = this.generateOrderReport(orderId, order);
    await this.client.sendMessage(this.channelId, reportMarkdown);
  }
}
