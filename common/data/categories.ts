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
  "fish",
  "meat",
  "vegetables-and-berries",
  "sauces",
  "bakery",
  "for-pets",
];

const rawCategoriesBySlug = {
  new: {
    title: "Новинки",
    items: [
      itemsById["144"],
      itemsById["143"],
      itemsById["142"],
      itemsById["141"],
      itemsById["140"],
      itemsById["136"],
      itemsById["137"],
      itemsById["138"],
      itemsById["139"],
    ],
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
      itemsById["126"],
    ],
  },
  meat: {
    title: "Мясо",
    items: [
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
      itemsById["9"],
      itemsById["48"],
      itemsById["85"],
      itemsById["86"],
      itemsById["112"],
      itemsById["142"],
      itemsById["141"],
      itemsById["140"],
      itemsById["56"],
      itemsById["103"],
      itemsById["109"],
      itemsById["98"],
      itemsById["113"],
      itemsById["121"],
      itemsById["120"],
      itemsById["125"],
      itemsById["128"],
      itemsById["127"],
      itemsById["131"],
      itemsById["130"],
      itemsById["88"],
      itemsById["144"],
    ],
  },
  "vegetables-and-berries": {
    title: "Овощи и ягоды",
    items: [
      itemsById["81"],
      itemsById["80"],
      itemsById["32"],
      itemsById["41"],
      itemsById["42"],
      itemsById["44"],
      itemsById["38"],
      itemsById["37"],
      itemsById["45"],
      itemsById["67"],
      itemsById["63"],
      itemsById["84"],
      itemsById["83"],
      itemsById["77"],
      itemsById["75"],
      itemsById["74"],
      itemsById["73"],
      itemsById["72"],
      itemsById["71"],
      itemsById["70"],
      itemsById["47"],
      itemsById["92"],
    ],
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
      itemsById["135"],
      itemsById["134"],
    ],
  },
  sauces: {
    title: "Соусы",
    items: [
      itemsById["101"],
      itemsById["136"],
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
        ...this["fish"].items,
        ...this["meat"].items,
        ...this["vegetables-and-berries"].items,
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
