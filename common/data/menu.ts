export type TMenuItemId = keyof typeof rawItemsById;

export type TMenuItem = {
  id: TMenuItemId;
  title: string;
  price: number;
  weight: number;
  amount?: number;
  image: string;
  ingredients: string[];
};

const ingredients = [
  "фарш индейка",
  "фарш бедра индейки",
  "яйцо куриное",
  "лук белый",
  "соль",
  "перец чёрный",
  "паприка молотая",
  "кориандр",
  "мука пшеничная цельнозерновая",
  "мука рисовая",
];
const rawItemsById = {
  "1": {
    title: "Гречаники",
    price: 280,
    weight: 400,
    amount: 2,
    image: "grechaniki.jpg",
    ingredients,
  },
  "2": {
    title: "Биточки из трески",
    price: 350,
    weight: 300,
    amount: 2,
    image: "kotleti-treska.jpg",
    ingredients,
  },
  "3": {
    title: "Ленивые голубцы",
    price: 220,
    weight: 300,
    amount: 2,
    image: "lenivuie-golubtsi.jpg",
    ingredients,
  },
  "4": {
    title: "Котлеты из телятины и булгура",
    price: 440,
    weight: 400,
    amount: 4,
    image: "kotleti-telyatina-bulgur.jpg",
    ingredients,
  },
  "5": {
    title: "Котлеты из телятины с кабачком и зеленью",
    price: 340,
    weight: 300,
    amount: 2,
    image: "kotleti-telyatina-kabachok.jpg",
    ingredients,
  },
  "6": {
    id: "5",
    title: "Фрикадельки из индейки со шпинатом",
    price: 420,
    weight: 480,
    amount: 6,
    image: "frikadelky-shpinat.jpg",
    ingredients,
  },
  "7": {
    title: "Фрикадельки из индейки с луком",
    price: 410,
    weight: 480,
    amount: 6,
    image: "frikadelki-indeyka-luk.jpg",
    ingredients,
  },
  "8": {
    title: "Котлеты из курицы с имбирём",
    price: 440,
    weight: 520,
    amount: 4,
    image: "kotleti-indeyka-imbir.jpg",
    ingredients,
  },
  "9": {
    title: "Перец фаршированный",
    price: 350,
    weight: 400,
    amount: 2,
    image: "farshirovannuie-pertsi.jpg",
    ingredients,
  },
  "10": {
    title: "Котлетки из красной рыбы с кальмаром",
    price: 380,
    weight: 300,
    amount: 3,
    image: "kotleti-forel-kalmar.jpg",
    ingredients,
  },
  "11": {
    title: "Рыбные биточки из судака с минтаем",
    price: 300,
    weight: 300,
    amount: 2,
    image: "empty.jpg",
    ingredients,
  },
  "12": {
    title: "Фарш говядина-курица",
    price: 500,
    weight: 1000,
    image: "empty.jpg",
    ingredients,
  },
  "13": {
    title: "Фарш говядина-курица",
    price: 300,
    weight: 500,
    image: "empty.jpg",
    ingredients,
  },
  "14": {
    title: "Фарш индейка",
    price: 500,
    weight: 1000,
    image: "empty.jpg",
    ingredients,
  },
  "15": {
    title: "Фарш индейка",
    price: 300,
    weight: 500,
    image: "empty.jpg",
    ingredients,
  },
  "16": {
    title: "Фарш курица",
    price: 500,
    weight: 1000,
    image: "empty.jpg",
    ingredients,
  },
  "17": {
    title: "Фарш курица",
    price: 300,
    weight: 500,
    image: "empty.jpg",
    ingredients,
  },
  "18": {
    title: "Фарш из трески",
    price: 500,
    weight: 1000,
    image: "farsh-treska.jpg",
    ingredients,
  },
  "19": {
    id: "20",
    title: "Фарш из трески",
    price: 300,
    weight: 500,
    image: "farsh-treska.jpg",
    ingredients,
  },
  "20": {
    title: "Фарш из красной рыбы",
    price: 500,
    weight: 1000,
    image: "empty.jpg",
    ingredients,
  },
  "21": {
    title: "Фарш из красной рыбы",
    price: 300,
    weight: 500,
    image: "empty.jpg",
    ingredients,
  },
  "22": {
    title: "Фарш говядина",
    price: 500,
    weight: 1000,
    image: "farsh-govyadina.jpg",
    ingredients,
  },
  "23": {
    title: "Фарш говядина",
    price: 300,
    weight: 500,
    image: "farsh-govyadina.jpg",
    ingredients,
  },
} as const;

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
