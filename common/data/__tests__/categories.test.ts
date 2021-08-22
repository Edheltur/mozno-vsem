import { categoriesBySlug } from "../categories";
import { items } from "../menu";

describe("ensure no duplicates", () => {
  Object.values(categoriesBySlug).forEach((category) => {
    test(`in ${category.slug}`, () => {
      const ids = category.items.map((x) => x.id);

      expect(ids).toHaveLength(new Set(ids).size);
    });
  });
});

test("ensure all non-deleted dishes exists in categories", () => {
  items.forEach(({ id }) => {
    expect(
      items.filter((item) => !categoriesBySlug.all.items.includes(item))
    ).toStrictEqual([]);
  });
});

describe("ensure no deleted", () => {
  Object.values(categoriesBySlug).forEach((category) => {
    test(`in ${category.slug}`, () => {
      expect(category.items.filter((x) => x.deleted)).toStrictEqual([]);
    });
  });
});
