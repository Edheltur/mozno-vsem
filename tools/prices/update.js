const fs = require("fs").promises;

const [nodePath, filename, pricesPath, menuJsonPath] = process.argv;

(async function run() {
  const pricesContent = await fs.readFile(pricesPath, { encoding: "utf-8" });
  const menuContent = await fs.readFile(menuJsonPath, { encoding: "utf-8" });

  const menu = JSON.parse(menuContent.toString());

  pricesContent
    .toString()
    .split("\r\n")
    .slice(1)
    .forEach((line) => {
      const [id, amount, weight, price] = line.split(";");
      if (id in menu && price) {
        const dish = menu[id];

        dish.price = Number(price);
        dish.weight = Number(weight);
        if (amount !== "1" && amount !== "0") {
          dish.amount = Number(amount);
        }
      } else {
        console.warn(line);
      }
    });

  await fs.writeFile(menuJsonPath, JSON.stringify(menu, null, 2), {
    encoding: "utf-8",
  });
})();
