import { getSelectedItems, getTotalPrice, ICart } from "store/selectors/cart";
import { TelegramClient } from "server/telegram";

export class TelegramReporter {
  private readonly client: TelegramClient;
  private readonly channelId: string;

  constructor(client: TelegramClient, channelId: string) {
    this.client = client;
    this.channelId = channelId;
  }
  private generateOrderReport(orderId: number, cart: ICart) {
    let itemsLines = getSelectedItems(cart).map(
      ({ id, title }) => `${cart.countById[id]} x ${title}`
    );

    return [`*Заказ c сайта №${orderId}*`]
      .concat("–".repeat(20))
      .concat(...itemsLines)
      .concat("–".repeat(20))
      .concat(`*Итого:* ${getTotalPrice(cart)}₽`)
      .join("\n");
  }

  public async sendReport(orderId: number, cart: ICart) {
    const reportMarkdown = this.generateOrderReport(orderId, cart);
    await this.client.sendMessage(this.channelId, reportMarkdown);
  }
}
