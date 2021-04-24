const fs = require("fs").promises;

const [nodePath, filename, pricesPath, menuJsonPath] = process.env;
const pricesContent = await fs.readFile(pricesPath, { encoding: "utf-8" });
const menuContent = await fs.readFile(menuJsonPath, { encoding: "utf-8" });

const menu = JSON.parse(menuContent.toString());

pricesContent
  .toString()
  .split("\r\n")
  .slice(1)
  .forEach((line) => {
    const [title, id, amount, weight, price] = line.split(";");
    if (id in menu) {
      const dish = menu[id];

      dish.price = Number(price);
      dish.weight = Number(weight);
      if (amount !== "1") {
        dish.amount = Number(amount);
      }
    } else {
      console.warn(line);
    }
  });

await fs.writeFile(menuJsonPath, JSON.stringify(menu), { encoding: "utf-8" });
