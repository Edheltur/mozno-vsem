import { itemsById } from "../menu";

test("ensure all id exists", () => {
  const ids = Object.keys(itemsById);
  const maxId = Math.max(...ids.map(Number));
  const expectedIds = Array.from({ length: maxId }, (_, i) => String(i + 1));

  expect(ids).toStrictEqual(expectedIds);
});
