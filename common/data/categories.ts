import { itemsById, TMenuItem } from "common/data/menu";

export type TCategory = {
  slug: TCategorySlug;
  title: string;
  items: ReadonlyArray<TMenuItem>;
};
export type TCategorySlug = keyof typeof rawCategoriesBySlug;
const orderedCategorySlugs: ReadonlyArray<TCategorySlug> = [
  "all",
  "new",
  "soups",
  "fish",
  "meat",
  "vegetables",
  "sauces",
  "bakery",
  "for-pets",
];

const rawCategoriesBySlug = {
  new: {
    title: "Новинки",
    items: [
      itemsById["146"],
      itemsById["145"],
      itemsById["90"],
      itemsById["144"],
      itemsById["143"],
      itemsById["141"],
      itemsById["137"],
      itemsById["138"],
      itemsById["139"],
    ],
  },
  soups: {
    title: "Супы",
    items: [itemsById["146"], itemsById["54"], itemsById["98"]],
  },
  fish: {
    title: "Рыба",
    items: [
      itemsById["2"],
      itemsById["10"],
      itemsById["11"],
      itemsById["31"],
      itemsById["79"],
      itemsById["54"],
      itemsById["53"],
    ],
  },
  meat: {
    title: "Мясо",
    items: [
      itemsById["145"],
      itemsById["1"],
      itemsById["7"],
      itemsById["4"],
      itemsById["6"],
      itemsById["5"],
      itemsById["30"],
      itemsById["143"],
      itemsById["119"],
      itemsById["23"],
      itemsById["3"],
      itemsById["49"],
      itemsById["48"],
      itemsById["86"],
      itemsById["90"],
      itemsById["141"],
      itemsById["56"],
      itemsById["109"],
      itemsById["98"],
      itemsById["113"],
      itemsById["121"],
      itemsById["127"],
      itemsById["88"],
      itemsById["144"],
    ],
  },
  vegetables: {
    title: "Овощи",
    items: [itemsById["81"], itemsById["80"]],
  },
  bakery: {
    title: "Выпечка",
    items: [
      itemsById["25"],
      itemsById["26"],
      itemsById["27"],
      itemsById["55"],
      itemsById["97"],
      itemsById["99"],
      itemsById["100"],
      itemsById["60"],
      itemsById["61"],
      itemsById["62"],
      itemsById["124"],
    ],
  },
  sauces: {
    title: "Соусы",
    items: [
      itemsById["101"],
      itemsById["137"],
      itemsById["138"],
      itemsById["139"],
    ],
  },
  "for-pets": {
    title: "Для животных",
    items: [itemsById["34"]],
  },
  get all() {
    return {
      title: "Все блюда",
      items: uniq([
        ...this["soups"].items,
        ...this["fish"].items,
        ...this["meat"].items,
        ...this["vegetables"].items,
        ...this["sauces"].items,
        ...this["bakery"].items,
        ...this["for-pets"].items,
      ]),
    };
  },
} as const;

export const categoriesBySlug: Readonly<Record<TCategorySlug, TCategory>> =
  orderedCategorySlugs.reduce((acc, slug) => {
    acc[slug] = {
      ...rawCategoriesBySlug[slug],
      slug,
    };

    return acc;
  }, {} as Record<TCategorySlug, TCategory>);
export const categories = orderedCategorySlugs.map(
  (slug) => categoriesBySlug[slug]
);

function uniq<T>(arr: ReadonlyArray<T>): ReadonlyArray<T> {
  return arr.filter((v, i) => arr.indexOf(v) === i);
}
