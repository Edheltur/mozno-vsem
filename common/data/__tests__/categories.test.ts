import { categoriesBySlug } from "../categories";

describe("ensure no duplicates", () => {
  Object.values(categoriesBySlug).forEach((category) => {
    test(`in ${category.slug}`, () => {
      const ids = category.items.map((x) => x.id);

      expect(ids).toHaveLength(new Set(ids).size);
    });
  });
});
