export type TMenuItemId = keyof typeof itemsBydId;

export type TMenuItem = typeof itemsBydId[TMenuItemId];

export const itemsBydId = {
  "1": {
    id: "1",
    title: "Гречаники",
    price: 280,
    weight: 400,
    amount: 2,
    previewImage: "grechaniki.jpg",
  },
  "2": {
    id: "2",
    title: "Котлеты из телятины и булгура",
    price: 440,
    weight: 400,
    previewImage: "tefteli-so-shpinatom.jpg",
  },
  "3": {
    id: "3",
    title: "Котлеты из телятины с кабачком и зеленью",
    price: 340,
    weight: 300,
    previewImage: "kotlety-iz-telyatiny-s-kabachkom-i-zelenyu.jpg",
  },
  "4": {
    id: "4",
    title: "Фрикадельки из индейки с луком",
    price: 410,
    weight: 480,
    previewImage: "grechaniki.jpg",
  },
  "5": {
    id: "5",
    title: "Фрикадельки из индейки со шпинатом",
    price: 420,
    weight: 480,
    previewImage: "tefteli-so-shpinatom.jpg",
  },
  "6": {
    id: "6",
    title: "Биточки из трески",
    price: 350,
    weight: 300,
    previewImage: "kotlety-iz-telyatiny-s-kabachkom-i-zelenyu.jpg",
  },
  "7": {
    id: "7",
    title: "Котлеты из курицы с имбирём",
    price: 440,
    weight: 520,
    previewImage: "grechaniki.jpg",
  },
  "8": {
    id: "8",
    title: "Ленивые голубцы",
    price: 220,
    weight: 300,
    previewImage: "tefteli-so-shpinatom.jpg",
  },
  "9": {
    id: "9",
    title: "Перец фаршированный",
    price: 350,
    weight: 400,
    previewImage: "grechaniki.jpg",
  },
  "10": {
    id: "10",
    title: "Тефтели со шпинатом",
    price: 440,
    weight: 400,
    previewImage: "tefteli-so-shpinatom.jpg",
  },
} as const;

export const items = Object.values(itemsBydId)
  .map((item) => item.id)
  .sort((a, b) => Number(a) - Number(b))
  .map((id) => itemsBydId[id]);

export const title = "Меню";
