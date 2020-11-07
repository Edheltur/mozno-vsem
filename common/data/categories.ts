import { itemsById, TMenuItem } from "common/data/menu";

export type TCategory = {
  slug: TCategorySlug;
  title: string;
  items: ReadonlyArray<TMenuItem>;
};
export type TCategorySlug = keyof typeof rawCategoriesBySlug;
const orderedCategorySlugs: ReadonlyArray<TCategorySlug> = [
  "all",
  "second-courses",
  "cutlets",
  "vegetable-garnishes",
  "bread",
  "broths-and-soups",
  "fruits-and-berries",
  "desserts-and-pastry",
  "mincemeat",
];

const rawCategoriesBySlug = {
  cutlets: {
    title: "Котлеты",
    items: [
      itemsById["1"],
      itemsById["2"],
      itemsById["3"],
      itemsById["4"],
      itemsById["5"],
      itemsById["6"],
      itemsById["7"],
      itemsById["8"],
      itemsById["10"],
      itemsById["11"],
      itemsById["56"],
      itemsById["23"],
      itemsById["30"],
      itemsById["31"],
    ],
  },
  "second-courses": {
    title: "Вторые блюда",
    items: [
      itemsById["9"],
      itemsById["32"],
      itemsById["35"],
      itemsById["36"],
      itemsById["48"],
      itemsById["49"],
      itemsById["55"],
    ],
  },
  "vegetable-garnishes": {
    title: "Гарниры овощные",
    items: [
      itemsById["37"],
      itemsById["38"],
      itemsById["39"],
      itemsById["40"],
      itemsById["41"],
      itemsById["42"],
      itemsById["43"],
      itemsById["44"],
      itemsById["45"],
    ],
  },
  bread: {
    title: "Хлеб",
    items: [
      itemsById["24"],
      itemsById["25"],
      itemsById["26"],
      itemsById["27"],
      itemsById["28"],
      itemsById["29"],
    ],
  },
  "broths-and-soups": {
    title: "Супы",
    items: [itemsById["53"], itemsById["54"]],
  },
  "fruits-and-berries": {
    title: "Фрукты и ягоды",
    items: [itemsById["46"], itemsById["47"]],
  },
  "desserts-and-pastry": {
    title: "Десерты и выпечка",
    items: [itemsById["50"], itemsById["51"], itemsById["52"]],
  },
  mincemeat: {
    title: "Фарш",
    items: [
      itemsById["13"],
      itemsById["15"],
      itemsById["17"],
      itemsById["19"],
      itemsById["21"],
      itemsById["33"],
      itemsById["34"],
    ],
  },
  get all() {
    return {
      title: "Все блюда",
      items: [
        ...this["cutlets"].items,
        ...this["second-courses"].items,
        ...this["vegetable-garnishes"].items,
        ...this["fruits-and-berries"].items,
        ...this["desserts-and-pastry"].items,
        ...this["broths-and-soups"].items,
        ...this.mincemeat.items,
        ...this.bread.items,
      ],
    };
  },
} as const;

export const categoriesBySlug: Readonly<Record<
  TCategorySlug,
  TCategory
>> = orderedCategorySlugs.reduce((acc, slug) => {
  acc[slug] = {
    ...rawCategoriesBySlug[slug],
    slug,
  };

  return acc;
}, {} as Record<TCategorySlug, TCategory>);
export const categories = orderedCategorySlugs.map(
  (slug) => categoriesBySlug[slug]
);
