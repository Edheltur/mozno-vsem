export const itemsBydId = {
  1: {
    id: 1,
    title: "Гречаники",
    price: 280,
    weight: 400,
  },
  2: {
    id: 2,
    title: "Котлеты из телятины и булгура",
    price: 440,
    weight: 400,
  },
  3: {
    id: 3,
    title: "Котлеты из телятины с кабачком и зеленью",
    price: 340,
    weight: 300,
  },
  4: {
    id: 4,
    title: "Фрикадельки из индейки с луком",
    price: 410,
    weight: 480,
  },
  5: {
    id: 5,
    title: "Фрикадельки из индейки со шпинатом",
    price: 420,
    weight: 480,
  },
  6: {
    id: 6,
    title: "Биточки из трески",
    price: 350,
    weight: 300,
  },
  7: {
    id: 7,
    title: "Котлеты из курицы с имбирём",
    price: 440,
    weight: 520,
  },
  8: {
    id: 8,
    title: "Ленивые голубцы",
    price: 220,
    weight: 300,
  },
  9: {
    id: 9,
    title: "Перец фаршированный",
    price: 350,
    weight: 400,
  },
} as const;

export const items = Object.keys(itemsBydId)
  .map(Number)
  .sort((a, b) => a - b)
  .map((id) => itemsBydId[id as keyof typeof itemsBydId]);

export const title = "Меню";
