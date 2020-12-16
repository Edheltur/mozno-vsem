import { itemsById, TMenuItem } from "common/data/menu";

export type TCategory = {
  slug: TCategorySlug;
  title: string;
  items: ReadonlyArray<TMenuItem>;
};
export type TCategorySlug = keyof typeof rawCategoriesBySlug;
const orderedCategorySlugs: ReadonlyArray<TCategorySlug> = [
  "all",
  "new-year",
  "cutlets",
  "second-courses",
  "soups",
  "mincemeat",
  "garnishes",
  "bread",
  "fruits-and-berries",
  "bakery",
];

const rawCategoriesBySlug = {
  "new-year": {
    title: "Новогодние блюда",
    items: [
      itemsById["85"],
      itemsById["86"],
      itemsById["87"],
      itemsById["88"],
      itemsById["93"],
      itemsById["89"],
      itemsById["90"],
      itemsById["91"],
      itemsById["79"],
      itemsById["36"],
      itemsById["70"],
      itemsById["71"],
    ],
  },
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
      itemsById["53"],
      itemsById["79"],
      itemsById["82"],
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
      itemsById["58"],
      itemsById["59"],
      itemsById["60"],
      itemsById["61"],
      itemsById["62"],
      itemsById["85"],
      itemsById["86"],
      itemsById["87"],
      itemsById["88"],
      itemsById["93"],
      itemsById["89"],
      itemsById["90"],
    ],
  },
  garnishes: {
    title: "Гарниры",
    items: [
      itemsById["37"],
      itemsById["38"],
      itemsById["39"],
      itemsById["41"],
      itemsById["42"],
      itemsById["43"],
      itemsById["44"],
      itemsById["45"],
      itemsById["63"],
      itemsById["64"],
      itemsById["65"],
      itemsById["66"],
      itemsById["67"],
      itemsById["80"],
      itemsById["81"],
      itemsById["91"],
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
  soups: {
    title: "Супы",
    items: [itemsById["54"], itemsById["57"], itemsById["68"]],
  },
  "fruits-and-berries": {
    title: "Фрукты и ягоды",
    items: [
      itemsById["46"],
      itemsById["47"],
      itemsById["69"],
      itemsById["70"],
      itemsById["71"],
      itemsById["72"],
      itemsById["73"],
      itemsById["74"],
      itemsById["75"],
      itemsById["76"],
      itemsById["77"],
      itemsById["78"],
      itemsById["83"],
      itemsById["84"],
      itemsById["92"],
    ],
  },
  bakery: {
    title: "Выпечка",
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
      items: getUniqueItems([
        ...this["new-year"].items,
        ...this["cutlets"].items,
        ...this["second-courses"].items,
        ...this["garnishes"].items,
        ...this["fruits-and-berries"].items,
        ...this["bakery"].items,
        ...this["soups"].items,
        ...this["mincemeat"].items,
        ...this["bread"].items,
      ]),
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

function getUniqueItems(items: TMenuItem[]): TMenuItem[] {
  const itemsById: Record<string, TMenuItem> = {};

  items.forEach((item) => {
    itemsById[item.id] = item;
  });

  return Object.keys(itemsById).map(function (v) {
    return itemsById[v];
  });
}
