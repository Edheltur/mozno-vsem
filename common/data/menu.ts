export type TMenuItemId = keyof typeof rawItemsById;

export type TMenuItem = {
  id: TMenuItemId;
  title: string;
  price: number;
  weight: number;
  amount?: number;
  previewImage: string;
};

const rawItemsById = {
  "1": {
    title: "Гречаники",
    price: 280,
    weight: 400,
    amount: 2,
    previewImage: "grechaniki.jpg",
  },
  "2": {
    title: "Котлеты из телятины и булгура",
    price: 440,
    weight: 400,
    amount: 4,
    previewImage: "tefteli-so-shpinatom.jpg",
  },
  "3": {
    title: "Котлеты из телятины с кабачком и зеленью",
    price: 340,
    weight: 300,
    amount: 2,
    previewImage: "kotlety-iz-telyatiny-s-kabachkom-i-zelenyu.jpg",
  },
  "4": {
    title: "Фрикадельки из индейки с луком",
    price: 410,
    weight: 480,
    amount: 6,
    previewImage: "grechaniki.jpg",
  },
  "5": {
    id: "5",
    title: "Фрикадельки из индейки со шпинатом",
    price: 420,
    weight: 480,
    amount: 6,
    previewImage: "tefteli-so-shpinatom.jpg",
  },
  "6": {
    title: "Биточки из трески",
    price: 350,
    weight: 300,
    amount: 2,
    previewImage: "kotlety-iz-telyatiny-s-kabachkom-i-zelenyu.jpg",
  },
  "7": {
    title: "Котлеты из курицы с имбирём",
    price: 440,
    weight: 520,
    amount: 4,
    previewImage: "grechaniki.jpg",
  },
  "8": {
    title: "Ленивые голубцы",
    price: 220,
    weight: 300,
    amount: 2,
    previewImage: "tefteli-so-shpinatom.jpg",
  },
  "9": {
    title: "Перец фаршированный",
    price: 350,
    weight: 400,
    amount: 2,
    previewImage: "grechaniki.jpg",
  },
  "10": {
    title: "Тефтели со шпинатом",
    price: 440,
    weight: 400,
    previewImage: "tefteli-so-shpinatom.jpg",
  },
  "11": {
    title: "Котлетки из красной рыбы с кальмаром",
    price: 380,
    weight: 300,
    amount: 3,
    previewImage: "tefteli-so-shpinatom.jpg",
  },
  "12": {
    title: "Рыбные биточки из судака с минтаем",
    price: 300,
    weight: 300,
    amount: 2,
    previewImage: "grechaniki.jpg",
  },
  "13": {
    title: "Фарш говядина-курица",
    price: 500,
    weight: 1000,
    previewImage: "grechaniki.jpg",
  },
  "14": {
    title: "Фарш говядина-курица",
    price: 300,
    weight: 500,
    previewImage: "grechaniki.jpg",
  },
  "15": {
    title: "Фарш индейка",
    price: 500,
    weight: 1000,
    previewImage: "grechaniki.jpg",
  },
  "16": {
    title: "Фарш индейка",
    price: 300,
    weight: 500,
    previewImage: "grechaniki.jpg",
  },
  "17": {
    title: "Фарш курица",
    price: 500,
    weight: 1000,
    previewImage: "grechaniki.jpg",
  },
  "18": {
    title: "Фарш курица",
    price: 300,
    weight: 500,
    previewImage: "grechaniki.jpg",
  },
  "19": {
    title: "Фарш рыбный (белая рыба)",
    price: 500,
    weight: 1000,
    previewImage: "grechaniki.jpg",
  },
  "20": {
    id: "20",
    title: "Фарш рыбный (белая рыба)",
    price: 300,
    weight: 500,
    previewImage: "grechaniki.jpg",
  },
  "21": {
    title: "Фарш рыбный (красная рыба)",
    price: 500,
    weight: 1000,
    previewImage: "grechaniki.jpg",
  },
  "22": {
    title: "Фарш рыбный (красная рыба)",
    price: 300,
    weight: 500,
    previewImage: "grechaniki.jpg",
  },
  "23": {
    title: "Фарш говядина",
    price: 500,
    weight: 1000,
    previewImage: "grechaniki.jpg",
  },
  "24": {
    title: "Фарш говядина",
    price: 300,
    weight: 500,
    previewImage: "grechaniki.jpg",
  },
};

export const itemsBydId: Readonly<Record<
  TMenuItemId,
  TMenuItem
>> = Object.entries(rawItemsById).reduce((acc, [rawId, item]) => {
  const id = rawId as TMenuItemId;
  acc[id] = {
    ...item,
    id,
  };

  return acc;
}, {} as Record<TMenuItemId, TMenuItem>);

export const items = Object.values(itemsBydId)
  .map((item) => item.id)
  .sort((a, b) => Number(a) - Number(b))
  .map((id) => itemsBydId[id]);

export const title = "Меню";
