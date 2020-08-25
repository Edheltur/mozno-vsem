export type TMenuItemId = keyof typeof rawItemsById;

export type TMenuItem = {
  id: TMenuItemId;
  title: string;
  price: number;
  weight: number;
  amount?: number;
  image: string;
  ingredients: ReadonlyArray<string>;
};

const rawItemsById = {
  "1": {
    title: "Гречаники",
    price: 280,
    weight: 400,
    amount: 2,
    image: "grechaniki.jpg",
    ingredients: [
      "фарш курица",
      "фарш бедра индейки",
      "греча",
      "яйцо куриное",
      "лук белый",
      "соль",
      "мускатный орех",
      "паприка молотая",
      "перец белый",
      "мука пшеничная цельнозерновая",
      "мука греченевая",
    ],
  },
  "2": {
    title: "Биточки из трески",
    price: 350,
    weight: 300,
    amount: 2,
    image: "kotleti-treska.jpg",
    ingredients: [
      "филе трески",
      "лук",
      "соль",
      "яйцо куриное",
      "розмарин",
      "мускатный орех",
      "тимьян",
    ],
  },
  "3": {
    title: "Ленивые голубцы",
    price: 220,
    weight: 300,
    amount: 2,
    image: "lenivuie-golubtsi.jpg",
    ingredients: [
      "фарш курица",
      "фарш говядина",
      "капуста",
      "лук белый",
      "яйцо куриное",
      "морковь",
      "масло подсолнечное",
      "чеснок",
      "соль",
      "тимьян",
      "мука пшеничная цельнозерновая",
      "мука рисовая",
    ],
  },
  "4": {
    title: "Фрикадельки из индейки с луком",
    price: 410,
    weight: 480,
    amount: 6,
    image: "frikadelki-indeyka-luk.jpg",
    ingredients: [
      "фарш индейка",
      "яйцо куриное",
      "лук белый",
      "соль",
      "перец чёрный",
      "паприка молотая",
      "кориандр",
      "мука пшеничная цельнозерновая",
      "мука рисовая",
    ],
  },
  "5": {
    title: "Котлеты из телятины с кабачком",
    price: 340,
    weight: 300,
    amount: 2,
    image: "kotleti-telyatina-kabachok.jpg",
    ingredients: [
      "фарш говядина",
      "кабачок",
      "яйцо куриное",
      "лук белый",
      "укроп",
      "зелень петрушки",
      "соль",
      "хмели-сунели",
      "мука пшеничная цельнозерновая",
      "мука рисовая",
    ],
  },
  "6": {
    id: "5",
    title: "Фрикадельки из индейки со шпинатом",
    price: 420,
    weight: 480,
    amount: 6,
    image: "frikadelky-shpinat.jpg",
    ingredients: [
      "фарш бедра индейки",
      "шпинат замороженный",
      "лук белый",
      "яйцо куриное",
      "базилик",
      "тимьян",
      "соль",
      "мука пшеничная цельнозерновая",
      "мука рисовая",
    ],
  },
  "7": {
    title: "Котлеты из телятины и булгура",
    price: 440,
    weight: 400,
    amount: 4,
    image: "kotleti-telyatina-bulgur.jpg",
    ingredients: [
      "фарш говядина",
      "булгур",
      "лук белый",
      "прованские травы",
      "соль",
      "мука пшеничная цельнозерновая",
      "мука рисовая",
    ],
  },
  "8": {
    title: "Котлеты из курицы с имбирём",
    price: 440,
    weight: 520,
    amount: 4,
    image: "kotleti-kuritsa-imbir.jpg",
    ingredients: [
      "куриное филе",
      "имбирь",
      "зелёный лук",
      "соевый соус",
      "зелень петрушки",
    ],
  },
  "9": {
    title: "Перец фаршированный",
    price: 350,
    weight: 400,
    amount: 2,
    image: "farshirovannuie-pertsi.jpg",
    ingredients: [
      "перец болгарский",
      "филе бедра индейки",
      "цветная капуста",
      "лук репчатый",
      "зелень петрушки",
      "моцарелла твёрдая",
      "соль",
      "паприка",
    ],
  },
  "10": {
    title: "Котлетки из красной рыбы с кальмаром",
    price: 380,
    weight: 300,
    amount: 3,
    image: "kotleti-forel-kalmar.jpg",
    ingredients: [
      "форель",
      "кальмар",
      "лук",
      "яйцо куриное",
      "соль",
      "базилик",
    ],
  },
  "11": {
    title: "Рыбные биточки из судака с минтаем",
    price: 300,
    weight: 300,
    amount: 2,
    image: "empty.jpg",
    ingredients: [
      "филе судака",
      "филе минтая",
      "лук репчатый",
      "соль",
      "яйцо куриное",
      "розмарин",
      "мускатный орех",
      "тимьян",
    ],
  },
  "12": {
    title: "Фарш из говядины и курицы",
    price: 500,
    weight: 1000,
    image: "farsh-govyadina-kurtisa.jpg",
    ingredients: ["говядина 50%", "филе курицы 50%"],
  },
  "13": {
    title: "Фарш из говядины и курицы",
    price: 300,
    weight: 500,
    image: "farsh-govyadina-kurtisa.jpg",
    ingredients: ["говядина 50%", "филе курицы 50%"],
  },
  "14": {
    title: "Фарш из индейки",
    price: 500,
    weight: 1000,
    image: "empty.jpg",
    ingredients: ["филе индейки"],
  },
  "15": {
    title: "Фарш из индейки",
    price: 300,
    weight: 500,
    image: "empty.jpg",
    ingredients: ["филе индейки"],
  },
  "16": {
    title: "Фарш из курицы",
    price: 500,
    weight: 1000,
    image: "farsh-kuritsa.jpg",
    ingredients: ["филе курицы"],
  },
  "17": {
    title: "Фарш из курицы",
    price: 300,
    weight: 500,
    image: "farsh-kuritsa.jpg",
    ingredients: ["филе курицы"],
  },
  "18": {
    title: "Фарш из белой рыбы",
    price: 500,
    weight: 1000,
    image: "farsh-treska.jpg",
    ingredients: ["филе трески"],
  },
  "19": {
    id: "20",
    title: "Фарш из белой рыбы",
    price: 300,
    weight: 500,
    image: "farsh-treska.jpg",
    ingredients: ["филе трески"],
  },
  "20": {
    title: "Фарш из красной рыбы",
    price: 500,
    weight: 1000,
    image: "empty.jpg",
    ingredients: ["филе кеты"],
  },
  "21": {
    title: "Фарш из красной рыбы",
    price: 300,
    weight: 500,
    image: "empty.jpg",
    ingredients: ["филе кеты"],
  },
  "22": {
    title: "Кальмары фаршировоанные",
    price: 420,
    weight: 260,
    amount: 2,
    image: "empty.jpg",
    ingredients: [
      "тушка кальмара",
      "фарш кеты",
      "фарш трески",
      "рис бурый",
      "лук",
      "специи",
    ],
  },
} as const;

// prettier-ignore
const OrderedIds: ReadonlyArray<TMenuItemId> = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "22", "12", "13", "14", "15", "16", "17", "18",
  "19",  "20", "21"
];

export const itemsBydId: Readonly<Record<
  TMenuItemId,
  TMenuItem
>> = OrderedIds.reduce((acc, id) => {
  acc[id] = {
    ...itemsBydId[id],
    id,
  };

  return acc;
}, {} as Record<TMenuItemId, TMenuItem>);

export const items = Object.values(itemsBydId)
  .map((item) => item.id)
  .sort((a, b) => Number(a) - Number(b))
  .map((id) => itemsBydId[id]);

export const title = "Меню";
