import { categoriesBySlug } from "../categories";

describe("ensure no duplicates", () => {
  Object.values(categoriesBySlug).forEach((category) => {
    test(`in ${category.slug}`, () => {
      const ids = category.items.map((x) => x.id);

      expect(ids).toHaveLength(new Set(ids).size);
    });
  });
});

describe("ensure no deleted", () => {
  Object.values(categoriesBySlug).forEach((category) => {
    test(`in ${category.slug}`, () => {
      expect(category.items.filter((x) => x.deleted)).toStrictEqual([]);
    });
  });
});
