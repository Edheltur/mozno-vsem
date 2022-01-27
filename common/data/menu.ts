import { mapObject } from "common/utils/object";

export type TMenuItemId = keyof typeof rawItemsById;
export type TNutrition = {
  whey: number;
  fats: number;
  carbs: number;
  energyValue: number;
};

export type TMenuItem = {
  deleted?: boolean;
  id: TMenuItemId;
  title: string;
  price: number;
  weight: number;
  amount?: number;
  image: string;
  ingredients: ReadonlyArray<string>;
  nutrition?: TNutrition;
};

const rawItemsById = {
  "1": {
    title: "Гречаники",
    price: 350,
    weight: 400,
    amount: 4,
    image: "grechaniki.jpg",
    ingredients: [
      "фарш курица",
      "фарш бедра индейки",
      "греча",
      "яйцо куриное",
      "лук белый",
      "соль",
      "мускатный орех",
      "паприка молотая",
      "перец белый",
      "мука греченевая"
    ],
    nutrition: { whey: 10.3, fats: 7.2, carbs: 16, energyValue: 140.3 }
  },
  "2": {
    title: "Биточки из трески",
    price: 310,
    weight: 200,
    amount: 2,
    image: "kotleti-treska.jpg",
    ingredients: [
      "филе трески",
      "лук",
      "соль",
      "яйцо куриное",
      "розмарин",
      "мускатный орех",
      "тимьян"
    ]
  },
  "3": {
    title: "Ленивые голубцы",
    price: 220,
    weight: 200,
    amount: 2,
    image: "lenivuie-golubtsi.jpg",
    ingredients: [
      "фарш курица",
      "фарш говядина",
      "капуста",
      "лук белый",
      "яйцо куриное",
      "морковь",
      "масло подсолнечное",
      "чеснок",
      "соль",
      "тимьян",
      "мука рисовая"
    ],
    nutrition: { whey: 8, fats: 4.3, carbs: 6, energyValue: 94.2 }
  },
  "4": {
    title: "Фрикадельки из индейки с луком",
    price: 500,
    weight: 480,
    amount: 6,
    image: "frikadelki-indeyka-luk.jpg",
    ingredients: [
      "фарш индейка",
      "яйцо куриное",
      "лук белый",
      "соль",
      "перец чёрный",
      "паприка молотая",
      "кориандр",
      "мука рисовая"
    ],
    nutrition: { whey: 13.7, fats: 6.4, carbs: 5, energyValue: 130.3 }
  },
  "5": {
    title: "Котлеты из телятины с кабачком",
    price: 370,
    weight: 300,
    amount: 2,
    image: "kotleti-telyatina-kabachok.jpg",
    ingredients: [
      "фарш говядина",
      "кабачок",
      "яйцо куриное",
      "лук белый",
      "укроп",
      "зелень петрушки",
      "соль",
      "хмели-сунели",
      "мука рисовая"
    ],
    nutrition: { whey: 10.7, fats: 6.4, carbs: 7, energyValue: 319.6 }
  },
  "6": {
    title: "Фрикадельки из индейки со шпинатом",
    price: 520,
    weight: 480,
    amount: 6,
    image: "frikadelky-shpinat.jpg",
    ingredients: [
      "фарш бедра индейки",
      "шпинат замороженный",
      "лук белый",
      "яйцо куриное",
      "базилик",
      "тимьян",
      "соль",
      "мука рисовая"
    ],
    nutrition: { whey: 11.4, fats: 5.1, carbs: 5, energyValue: 113 }
  },
  "7": {
    title: "Котлеты из телятины и булгура",
    price: 440,
    weight: 400,
    amount: 4,
    image: "kotleti-telyatina-bulgur.jpg",
    ingredients: [
      "фарш говядина",
      "булгур",
      "лук белый",
      "прованские травы",
      "соль",
      "мука рисовая"
    ],
    nutrition: { whey: 10.7, fats: 6.4, carbs: 7, energyValue: 132.4 }
  },
  "8": {
    deleted: true,
    title: "Котлеты из курицы с имбирём",
    price: 520,
    weight: 520,
    amount: 4,
    image: "kotleti-kuritsa-imbir.jpg",
    ingredients: [
      "куриное филе",
      "имбирь",
      "зелёный лук",
      "соевый соус",
      "зелень петрушки"
    ],
    nutrition: { whey: 15.8, fats: 7.7, carbs: 4, energyValue: 146.6 }
  },
  "9": {
    title: "Перец фаршированный",
    price: 390,
    weight: 400,
    amount: 2,
    image: "farshirovannuie-pertsi.jpg",
    ingredients: [
      "перец болгарский",
      "филе бедра индейки",
      "цветная капуста",
      "лук репчатый",
      "зелень петрушки",
      "брокколи",
      "соль",
      "паприка"
    ],
    nutrition: { whey: 9, fats: 5.9, carbs: 5, energyValue: 107.9 }
  },
  "10": {
    title: "Котлетки из красной рыбы с кальмаром",
    price: 370,
    weight: 200,
    amount: 2,
    image: "kotleti-forel-kalmar.jpg",
    ingredients: ["форель", "кета", "кальмар", "лук", "яйцо куриное", "соль"]
  },
  "11": {
    title: "Рыбные биточки из судака с минтаем",
    price: 310,
    weight: 200,
    amount: 2,
    image: "kotleti-sudak-mintai.jpg",
    ingredients: [
      "филе судака",
      "филе минтая",
      "лук репчатый",
      "соль",
      "яйцо куриное",
      "розмарин",
      "мускатный орех",
      "тимьян"
    ],
    nutrition: { whey: 14.3, fats: 3.2, carbs: 6, energyValue: 107.9 }
  },
  "12": {
    deleted: true,
    title: "Фарш из говядины и курицы",
    price: 500,
    weight: 1000,
    image: "farsh-govyadina-kurtisa.jpg",
    ingredients: ["говядина 50%", "филе курицы 50%"]
  },
  "13": {
    deleted: true,
    title: "Фарш из говядины и курицы",
    price: 500,
    weight: 500,
    image: "farsh-govyadina-kurtisa.jpg",
    ingredients: ["говядина 50%", "филе курицы 50%"]
  },
  "14": {
    deleted: true,
    title: "Фарш из индейки",
    price: 500,
    weight: 1000,
    image: "farsh-indeyka.jpg",
    ingredients: ["филе индейки"]
  },
  "15": {
    deleted: true,
    title: "Фарш из индейки",
    price: 500,
    weight: 500,
    image: "farsh-indeyka.jpg",
    ingredients: ["филе индейки"]
  },
  "16": {
    deleted: true,
    title: "Фарш из курицы",
    price: 500,
    weight: 1000,
    image: "farsh-kuritsa.jpg",
    ingredients: ["филе курицы"]
  },
  "17": {
    deleted: true,
    title: "Фарш из курицы",
    price: 500,
    weight: 500,
    image: "farsh-kuritsa.jpg",
    ingredients: ["филе курицы"]
  },
  "18": {
    deleted: true,
    title: "Фарш из белой рыбы",
    price: 500,
    weight: 1000,
    image: "farsh-treska.jpg",
    ingredients: ["филе трески"]
  },
  "19": {
    deleted: true,
    title: "Фарш из белой рыбы",
    price: 500,
    weight: 500,
    image: "farsh-treska.jpg",
    ingredients: ["филе трески"]
  },
  "20": {
    deleted: true,
    title: "Фарш из красной рыбы",
    price: 500,
    weight: 1000,
    image: "farsh-keta.jpg",
    ingredients: ["филе кеты"]
  },
  "21": {
    deleted: true,
    title: "Фарш из красной рыбы",
    price: 500,
    weight: 500,
    image: "farsh-keta.jpg",
    ingredients: ["филе кеты"]
  },
  "22": {
    deleted: true,
    title: "Кальмары фаршированные",
    price: 420,
    weight: 260,
    amount: 2,
    image: "calmari.jpg",
    ingredients: [
      "тушка кальмара",
      "фарш кеты",
      "фарш трески",
      "рис бурый",
      "лук",
      "специи"
    ]
  },
  "23": {
    title: "Капустники",
    price: 230,
    weight: 200,
    amount: 2,
    image: "kapustniki.jpg",
    ingredients: [
      "капуста",
      "лук белый",
      "яйцо куриное",
      "чеснок",
      "соль",
      "тимьян",
      "мука рисовая"
    ],
    nutrition: { whey: 9.8, fats: 4.4, carbs: 6, energyValue: 100.3 }
  },
  "24": {
    deleted: true,
    title: "Хлеб полбяно-пшеничный",
    price: 200,
    weight: 450,
    image: "polyabno-pshenichnui.jpg",
    ingredients: [
      "вода",
      "мука полбяная",
      "мука пшеничная цельнозерновая",
      "закваска ржаная (мука ржаная, вода)",
      "закваска пшеничная (мука пшеничная в/с, вода, в процентах ниже 2)",
      "соль"
    ]
  },
  "25": {
    title: "Хлеб бездрожжевой ржаной",
    price: 200,
    weight: 450,
    image: "rzhanoy.jpg",
    ingredients: [
      "вода",
      "мука ржаная обдирная",
      "закваска ржаная (вода, мука ржаная обдирная)",
      "соль"
    ]
  },
  "26": {
    title: "Хлеб бездрожжевой цельнозерновой с прованскими травами",
    price: 200,
    weight: 425,
    image: "celnozernovoy-provanskie.jpg",
    ingredients: [
      "вода",
      "мука пшеничная цельнозерновая",
      "закваска ржаная (мука ржаная, вода)",
      "мука ржаная",
      "сахар",
      "соль",
      "масло оливковое",
      "прованские травы"
    ]
  },
  "27": {
    title: "Хлеб бездрожжевой Бородинский",
    price: 200,
    weight: 450,
    image: "borodinskiy.jpg",
    ingredients: [
      "вода",
      "мука ржаная обдирная",
      "мука пшеничная цельнозерновая",
      "солод ржаной ферментированный",
      "сахар",
      "патока",
      "соль",
      "кориандр"
    ]
  },
  "28": {
    deleted: true,
    title: "Хлеб бездрожжевой цельнозерновой десертный",
    price: 240,
    weight: 540,
    image: "desertniy.jpg",
    ingredients: [
      "вода",
      "мука пшеничная цельнозерновая",
      "закваска ржаная (мука ржаная, вода)",
      "мука ржаная",
      "сахар",
      "масло оливковое",
      "соль",
      "смесь орехов",
      "курага",
      "изюм"
    ]
  },
  "29": {
    deleted: true,
    title: "Хлеб бездрожжевой цельнозерновой с семечками",
    price: 200,
    weight: 425,
    image: "celnozernovoy-semechki.jpg",
    ingredients: [
      "вода",
      "мука пшеничная цельнозерновая",
      "закваска ржаная (мука ржаная, вода)",
      "мука ржаная",
      "сахар",
      "соль",
      "масло оливковое",
      "семена подсолнечника",
      "семена подсолнечника",
      "кунжут"
    ]
  },
  "30": {
    title: "Котлеты куриные с брокколи",
    price: 210,
    weight: 200,
    amount: 2,
    image: "kotleti-kuritsa-brokkoli.jpg",
    ingredients: [
      "куриная грудка",
      "куриное бедро",
      "брокколи",
      "лук репка",
      "специи",
      "яйцо куриное",
      "чеснок",
      "соль"
    ],
    nutrition: { whey: 10.9, fats: 5, carbs: 6, energyValue: 110.5 }
  },
  "31": {
    title: "Биточки из минтая с креветками",
    price: 350,
    weight: 200,
    amount: 2,
    image: "kotleti-mintay-krevetka.jpg",
    ingredients: [
      "филе минтая",
      "креветка",
      "лук",
      "яйцо куриное",
      "укроп",
      "куркума",
      "чеснок",
      "лимон",
      "соль",
      "перец"
    ],
    nutrition: { whey: 16.6, fats: 1.1, carbs: 3, energyValue: 88.2 }
  },
  "32": {
    title: "Перец фаршированный овощной",
    price: 270,
    weight: 400,
    amount: 2,
    image: "perci-s-ovoshami.jpg",
    ingredients: [
      "кабачок",
      "баклажан",
      "перец сладкий",
      "помидор",
      "лук репка",
      "морковь",
      "укроп",
      "петрушка",
      "чеснок",
      "масло оливковое",
      "куркума",
      "прованские травы",
      "мускатный орех",
      "соль"
    ],
    nutrition: { whey: 1, fats: 1.5, carbs: 6, energyValue: 40.2 }
  },
  "33": {
    deleted: true,
    title: "Фарш из говядины",
    price: 500,
    weight: 500,
    image: "farsh-govyadina-kurtisa.jpg",
    ingredients: ["говядина"]
  },
  "34": {
    title: "Фарш для животных",
    price: 100,
    weight: 500,
    image: "farsh-kuritsa.jpg",
    ingredients: ["обрезь говядины", "обрезь курицы", "обрезь индейки"]
  },
  "35": {
    deleted: true,
    title: "Кальмары по-русски",
    price: 450,
    weight: 450,
    amount: 2,
    image: "kalmari-po-russki.jpg",
    ingredients: ["греча", "шампиньоны", "лук", "соль", "специи"]
  },
  "36": {
    deleted: true,
    title: "Кальмар с красной рыбой",
    price: 600,
    weight: 450,
    amount: 2,
    image: "kalmari-s-krasnoi-riboi.jpg",
    ingredients: [
      "кета",
      "горбуша",
      "форель",
      "морковь",
      "лук",
      "яйцо куриное",
      "соль",
      "перец",
      "специи"
    ]
  },
  "37": {
    title: "Капуста брокколи",
    price: 150,
    weight: 400,
    image: "brokkoli.jpg",
    ingredients: ["капуста брокколи"]
  },
  "38": {
    title: "Капуста цветная",
    price: 150,
    weight: 400,
    image: "tsvetnaya-kapusta.jpg",
    ingredients: ["капуста цветная"]
  },
  "39": {
    deleted: true,
    title: "Мини-морковка",
    price: 150,
    weight: 400,
    image: "empty.jpg",
    ingredients: ["мини-морковака"]
  },
  "40": {
    deleted: true,
    title: "Европеская смесь",
    price: 140,
    weight: 400,
    image: "evropeyskaya-smes.jpg",
    ingredients: ["брокколи", "цветная капуста", "фасоль", "морковь"]
  },
  "41": {
    title: "Мексиканская смесь",
    price: 150,
    weight: 400,
    image: "maksikanskaya-smes.jpg",
    ingredients: [
      "перец",
      "цветная капуста",
      "фасоль",
      "зеленый горошек",
      "лук",
      "кукуруза",
      "морковь"
    ]
  },
  "42": {
    title: "Овощной букет",
    price: 150,
    weight: 400,
    image: "ovoshnoi-buket.jpg",
    ingredients: [
      "цветная капуста",
      "фасоль",
      "брокколи",
      "морковь",
      "зеленый горошек"
    ]
  },
  "43": {
    deleted: true,
    title: "Смесь с брокколи",
    price: 130,
    weight: 400,
    image: "smes-s-brokkoli.jpg",
    ingredients: ["брокколи", "цветная капуста", "морковь"]
  },
  "44": {
    title: "Смесь для жарки яиц",
    price: 130,
    weight: 400,
    image: "smes-dlya-zarki-yaits.jpg",
    ingredients: ["перец", "томаты", "фасоль", "лук"]
  },
  "45": {
    title: "Шпинат резаный",
    price: 150,
    weight: 400,
    image: "shpinat.jpg",
    ingredients: ["шпинат"]
  },
  "46": {
    deleted: true,
    title: "Манго резаный",
    price: 340,
    weight: 300,
    image: "mango.jpg",
    ingredients: ["манго"]
  },
  "47": {
    title: "Клубника",
    price: 150,
    weight: 300,
    image: "klubnika.jpg",
    ingredients: ["клубника"]
  },
  "48": {
    title: "Долма",
    price: 370,
    weight: 240,
    amount: 6,
    image: "dolma.jpg",
    ingredients: [
      "лист виноградный маринованный",
      "говядина",
      "курица",
      "лук",
      "чеснок",
      "соль",
      "мускатный орех",
      "перец чёрный",
      "перец белый",
      "орегано",
      "укроп сухой",
      "петрушка сухая",
      "масло оливковое"
    ],
    nutrition: { whey: 13.9, fats: 9.5, carbs: 2, energyValue: 152.2 }
  },
  "49": {
    title: "Голубцы Пекинские",
    price: 420,
    weight: 450,
    amount: 4,
    image: "golubci-pekinskie.jpg",
    ingredients: [
      "лист пекинской капусты",
      "индейка",
      "курица",
      "морковь",
      "лук",
      "капуста пекинская",
      "соль",
      "перец",
      "куркума",
      "мускатный орех",
      "паприка",
      "укроп сухой"
    ],
    nutrition: { whey: 8.4, fats: 3.6, carbs: 2, energyValue: 75.9 }
  },
  "50": {
    deleted: true,
    title: "Банановый кекс",
    price: 120,
    weight: 100,
    image: "keks-banan.jpg",
    ingredients: [
      "мука кукурузная",
      "банан",
      "масло оливковое",
      "орех грецкий",
      "яйцо",
      "сироп топинамбура",
      "разрыхлитель",
      "соль"
    ]
  },
  "51": {
    deleted: true,
    title: "Шоколадный кекс",
    price: 120,
    weight: 100,
    image: "keks-shokolad.jpg",
    ingredients: [
      "мука рисовая",
      "яблоко",
      "масло оливковое",
      "вишня/клюква сушеные",
      "яйцо",
      "сироп топинамбура",
      "разрыхлитель",
      "соль"
    ]
  },
  "52": {
    deleted: true,
    title: "Тыквенный кекс",
    price: 120,
    weight: 100,
    image: "keks-tikva.jpg",
    ingredients: [
      "мука кукурузная",
      "тыква",
      "масло оливковое",
      "семечки тыквенные",
      "яйцо",
      "сироп топинамбура",
      "разрыхлитель",
      "соль"
    ]
  },
  "53": {
    title: "Фрикадельки для ухи",
    price: 300,
    weight: 200,
    image: "ribnuie-frikadelki.jpg",
    ingredients: ["красная рыба", "лук", "яйцо", "соль", "перец", "куркума"],
    amount: 20
  },
  "54": {
    title: "Бульон рыбный замороженный",
    price: 100,
    weight: 500,
    image: "empty.jpg",
    ingredients: ["вода", "красная рыба", "белая рыба", "соль"],
    nutrition: { whey: 2.9, fats: 0.7, carbs: 0, energyValue: 19.1 }
  },
  "55": {
    title: "Чебуреки мясные",
    price: 270,
    weight: 200,
    amount: 2,
    image: "chebureki-myaso.jpg",
    ingredients: [
      "мука пшеничная цельнозеровая",
      "вода",
      "говядина",
      "курица",
      "лук",
      "соль",
      "перец"
    ]
  },
  "56": {
    title: "Детские котлетки",
    price: 380,
    weight: 300,
    amount: 4,
    image: "detskie-kotletki.jpg",
    ingredients: [
      "индейка",
      "лук",
      "яйцо",
      "соль",
      "куркума",
      "мука безглютеновая"
    ],
    nutrition: { whey: 7.2, fats: 21.2, carbs: 25, energyValue: 319.6 }
  },
  "57": {
    deleted: true,
    title: "Набор для ухи",
    price: 310,
    weight: 700,
    amount: 4,
    image: "ribnui-bulyon-s-frikadelkami.jpg",
    ingredients: ["бульон из рыбы", "фрикадельки из красной рыбы", "соль"]
  },
  "58": {
    deleted: true,
    title: "Пельмени мясные безглютеновые",
    price: 680,
    weight: 840,
    image: "empty.jpg",
    ingredients: [
      "мука универсальная безглютеновая",
      "мука кукурузная",
      "вода",
      "яйцо",
      "соль",
      "масло оливковое",
      "говядина",
      "бедро куриное",
      "лук репчатый",
      "масло оливковое",
      "перец черный молотый",
      "перец белый",
      "куркума",
      "мускат"
    ]
  },
  "59": {
    deleted: true,
    title: "Пельмени с судаком безглютеновые",
    price: 800,
    weight: 840,
    image: "empty.jpg",
    ingredients: [
      "мука универсальная безглютеновая",
      "мука кукурузная",
      "вода",
      "яйцо",
      "соль",
      "масло оливковое",
      "филе судака",
      "яйцо",
      "лук репчатый",
      "перец черный молотый",
      "перец белый",
      "перец лимонный",
      "лимонный сок",
      "куркума"
    ]
  },
  "60": {
    title: "Блины безглютеновые",
    price: 180,
    weight: 150,
    amount: 4,
    image: "blini.jpg",
    ingredients: [
      "яйцо",
      "вода",
      "мука рисовая",
      "мука кукурузная",
      "мука льняная",
      "мука амарантовая",
      "крахмал тапиоковый",
      "крахмал кукурзный",
      "молоко",
      "сахар",
      "соль",
      "лимонная кислота"
    ]
  },
  "61": {
    title: "Блины б/г с фаршем из куриных сердечек",
    price: 280,
    weight: 250,
    amount: 4,
    image: "blini-kurinoye-serdce.jpg",
    ingredients: [
      "яйцо",
      "вода",
      "мука рисовая",
      "мука кукурузная",
      "мука льняная",
      "мука амарантовая",
      "крахмал тапиоковый",
      "крахмал кукурзный",
      "молоко сухое",
      "сахар",
      "соль",
      "лимонная кислота",
      "сердце куриное",
      "лук репчатый",
      "соль",
      "перец белый",
      "мускат"
    ]
  },
  "62": {
    title: "Блины б/г с яблоком и корицей",
    price: 290,
    weight: 250,
    amount: 4,
    image: "blini-yabloko-koritsa.jpg",
    ingredients: [
      "яйцо",
      "вода",
      "мука рисовая",
      "мука кукурузная",
      "мука льняная",
      "мука амарантовая",
      "крахмал тапиоковый",
      "крахмал кукурзный",
      "молоко",
      "сахар",
      "соль",
      "лимонная кислота",
      "яблоко",
      "сироп топинамбура",
      "корица"
    ]
  },
  "63": {
    title: "Шампиньоны резаные",
    price: 150,
    weight: 400,
    image: "shampinyoni.jpg",
    ingredients: ["шампиньоны"]
  },
  "64": {
    deleted: true,
    title: "Зелёный горошек",
    price: 130,
    weight: 400,
    image: "goroh.jpg",
    ingredients: ["Зелёный горошек"]
  },
  "65": {
    deleted: true,
    title: "Лечо",
    price: 150,
    weight: 400,
    image: "lecho.jpg",
    ingredients: ["морковь", "перец", "томат", "лук", "цукини"]
  },
  "66": {
    deleted: true,
    title: "Рататуй",
    price: 200,
    weight: 400,
    image: "raratui.jpg",
    ingredients: ["цукини", "томаты", "перец", "лук", "баклажаны"]
  },
  "67": {
    title: "Кабачок",
    price: 130,
    weight: 400,
    image: "kabachok.jpg",
    ingredients: ["кабачок"]
  },
  "68": {
    deleted: true,
    title: "Смесь для борща",
    price: 100,
    weight: 400,
    image: "smes-borsh.jpg",
    ingredients: ["картофель", "морковь", "свекла", "капуста", "лук", "томаты"]
  },
  "69": {
    deleted: true,
    title: "Кубики ананаса",
    price: 210,
    weight: 300,
    image: "ananas.jpg",
    ingredients: ["ананас"]
  },
  "70": {
    deleted: true,
    title: "Брусника",
    price: 350,
    weight: 300,
    image: "brusnika.jpg",
    ingredients: ["брусника"]
  },
  "71": {
    title: "Клюква",
    price: 350,
    weight: 300,
    image: "klyukva.jpg",
    ingredients: ["клюква"]
  },
  "72": {
    title: "Голубика",
    price: 350,
    weight: 300,
    image: "golubika.jpg",
    ingredients: ["голубика"]
  },
  "73": {
    title: "Ежевика",
    price: 350,
    weight: 300,
    image: "ezevika.jpg",
    ingredients: ["ежевика"]
  },
  "74": {
    title: "Смородина красная",
    price: 200,
    weight: 300,
    image: "smorodina-krasnaya.jpg",
    ingredients: ["смородина красная"]
  },
  "75": {
    title: "Смородина чёрная",
    price: 200,
    weight: 300,
    image: "smorodina-chernaya.jpg",
    ingredients: ["смородина чёрная"]
  },
  "76": {
    deleted: true,
    title: "Малина",
    price: 350,
    weight: 300,
    image: "malina.jpg",
    ingredients: ["малина"]
  },
  "77": {
    title: "Облепиха",
    price: 250,
    weight: 300,
    image: "oblepikha.jpg",
    ingredients: ["облепиха"]
  },
  "78": {
    deleted: true,
    title: "Смесь для компота",
    price: 250,
    weight: 500,
    image: "smes-kompot.jpg",
    ingredients: [
      "красная смородина",
      "чёрная смородина",
      "крыжовник",
      "слива",
      "клубника",
      "рябина черноплодная"
    ]
  },
  "79": {
    title: "Котлеты из форели с креветками",
    price: 700,
    weight: 400,
    amount: 4,
    image: "kotleti-forel-krevetka.jpg",
    ingredients: [
      "форель",
      "лук",
      "яйцо",
      "креветки",
      "соль",
      "перец",
      "лимонный сок",
      "мука кукурузная",
      "мука уневерсальная б/г"
    ]
  },
  "80": {
    title: "Котлеты свекольные",
    price: 170,
    weight: 200,
    amount: 2,
    image: "kotleti-svekolnie.jpg",
    ingredients: [
      "свекла",
      "яйцо",
      "мука уневерсальная б/г",
      "мука кукурузная",
      "мука льняная",
      "соль",
      "перец",
      "мускат"
    ],
    nutrition: { whey: 8.9, fats: 5.1, carbs: 34, energyValue: 217.6 }
  },
  "81": {
    title: "Котлеты морковные",
    price: 170,
    weight: 200,
    amount: 2,
    image: "kotleti-morkovnie.jpg",
    ingredients: [
      "морковь",
      "яйцо",
      "мука кукурузная",
      "мука уневерсальная б/г",
      "куркума",
      "масло оливковое",
      "соль",
      "перец",
      "мускат"
    ],
    nutrition: { whey: 3, fats: 1.6, carbs: 13, energyValue: 78.1 }
  },
  "82": {
    deleted: true,
    title: "Котлеты из индейки с горошком",
    price: 300,
    weight: 400,
    amount: 4,
    image: "kotleti-indeyaka-goroh.jpg",
    ingredients: [
      "филе грудки индейки",
      "зеленый горошек",
      "лук",
      "яйцо",
      "мука кукурузная",
      "мука уневерсальная б/г",
      "соль",
      "перец",
      "мускат",
      "масло оливковое"
    ]
  },
  "83": {
    title: "Жимолость",
    price: 400,
    weight: 300,
    image: "zhimolost.jpg",
    ingredients: ["жимолость"]
  },
  "84": {
    deleted: true,
    title: "Черника",
    price: 350,
    weight: 300,
    image: "chernika.jpg",
    ingredients: ["черника"]
  },
  "85": {
    title: "Рулет куриный с грибами",
    price: 600,
    weight: 500,
    image: "rulet-kuritsa-gribi.jpg",
    ingredients: [
      "куриная грудка",
      "яйцо куриное",
      "мука кукурузная",
      "мука уневерсальная б/г",
      "соль",
      "перец",
      "мускат",
      "масло оливковое",
      "грибы шампиньоны",
      "лук репчатый"
    ]
  },
  "86": {
    title: "Рулет с черносливом",
    price: 600,
    weight: 500,
    image: "rulet-govyadina-chernosliv.jpg",
    ingredients: [
      "говядина",
      "куриная грудка",
      "яйцо куриное",
      "масло оливковое",
      "лук репчатый",
      "томатная паста",
      "мука кукурузная",
      "мука универсальная б/г",
      "соль",
      "перец",
      "чернослив"
    ]
  },
  "87": {
    deleted: true,
    title: "Кальмары отварные",
    price: 800,
    weight: 400,
    image: "kalmar.jpg",
    ingredients: ["кальмар"]
  },
  "88": {
    title: "Холодец",
    price: 650,
    weight: 500,
    image: "kholodetc.jpg",
    ingredients: [
      "говядина",
      "курица",
      "соль",
      "чеснок",
      "лук",
      "лавровый лист",
      "укроп",
      "перец"
    ]
  },
  "89": {
    deleted: true,
    title: "Карп для запекания",
    price: 700,
    weight: 650,
    image: "karp-zapekanie.jpg",
    ingredients: ["карп", "соль", "перец"]
  },
  "90": {
    title: "Язык говяжий отварной",
    price: 750,
    weight: 400,
    image: "yazik-govyadina.jpg",
    ingredients: ["язык говяжий"]
  },
  "91": {
    deleted: true,
    title: "Винегрет",
    price: 150,
    weight: 400,
    image: "vinegret.jpg",
    ingredients: ["картофель", "морковь", "свекла", "зеленый горошек"]
  },
  "92": {
    title: "Шиповник",
    price: 600,
    weight: 500,
    image: "shipovnik.jpg",
    ingredients: ["шиповник"]
  },
  "93": {
    deleted: true,
    title: "Готовый холодец",
    price: 850,
    weight: 700,
    image: "empty.jpg",
    ingredients: [
      "говядина",
      "курица",
      "соль",
      "чеснок",
      "лук",
      "лавровый лист",
      "укроп перец",
      "желатин"
    ]
  },
  "94": {
    deleted: true,
    title: "Тыква резаная",
    price: 120,
    weight: 400,
    image: "tikva.jpg",
    ingredients: ["тыква"]
  },
  "95": {
    deleted: true,
    title: "Биточки из говядины с грибами",
    price: 260,
    weight: 200,
    amount: 2,
    image: "empty.jpg",
    ingredients: [
      "говядина",
      "грибы шампиньоны",
      "лук репчатый",
      "яйцо",
      "соль",
      "перец",
      "мускат",
      "мука б/г",
      "мука кукурузная",
      "масло оливковое"
    ]
  },
  "96": {
    deleted: true,
    title: "Котлетки Скитлс",
    price: 410,
    weight: 400,
    amount: 4,
    image: "kotleti-skitlz.jpg",
    ingredients: [
      "филе грудки индейки",
      "перец сладкий",
      "цветная капуста",
      "фасоль стручковая",
      "зеленый горошек",
      "лук репчатый",
      "кукуруза",
      "морковь",
      "яйцо",
      "соль",
      "смесь перецев",
      "мука льняная",
      "мука кукурузная"
    ]
  },
  "97": {
    title: "Чебуреки ржаные",
    price: 300,
    weight: 200,
    amount: 2,
    image: "cheburek-rzhanoy.jpg",
    ingredients: [
      "мука ржаная",
      "вода",
      "масло оливковое",
      "говядина",
      "курица",
      "лук репчатый",
      "соль",
      "перец черный",
      "перец белый",
      "мускат"
    ]
  },
  "98": {
    title: "Бульон куриный замороженный",
    price: 100,
    weight: 500,
    image: "bulyon-kuritsa.jpg",
    ingredients: ["вода", "курица", "соль"]
  },
  "99": {
    title: "Чебуреки с сыром и зеленью",
    price: 250,
    weight: 200,
    amount: 2,
    image: "cheburek-sir-zelen.jpg",
    ingredients: [
      "мука пшеничная цельнозерновая",
      "сыр 40%",
      "петрушка",
      "укроп",
      "соль"
    ]
  },
  "100": {
    title: "Чебуреки ржаные с сыром и зеленью",
    price: 260,
    weight: 200,
    amount: 2,
    image: "cheburek-rzhanoy-sir-zelen.jpg",
    ingredients: [
      "мука ржаная",
      "масло оливковое",
      "сыр 40%",
      "петрушка",
      "укроп",
      "соль"
    ]
  },
  "101": {
    title: "Аджика",
    price: 280,
    weight: 200,
    image: "adzika.jpg",
    ingredients: [
      "чеснок",
      "перец красный",
      "соль",
      "базилик",
      "хмели-сунели",
      "кинза"
    ]
  },
  "102": {
    deleted: true,
    title: "Бефстроганов из печени",
    price: 300,
    weight: 400,
    image: "befstroganov-pechen.jpg",
    ingredients: [
      "печень индейки",
      "масло оливковое",
      "сироп топинамбура",
      "лук",
      "корица",
      "соль",
      "куркума",
      "перец"
    ]
  },
  "103": {
    deleted: true,
    title: "Рулетики из индейки с сыром и зеленью",
    price: 710,
    weight: 520,
    image: "ruleti-indeyka.jpg",
    ingredients: [
      "грудка индейки",
      "сыр",
      "петрушка",
      "укроп",
      "чеснок",
      "соль",
      "перец"
    ],
    amount: 4
  },
  "104": {
    deleted: true,
    title: "Фрикасе из курицы",
    price: 350,
    weight: 400,
    image: "frikase-kuritsa.jpg",
    ingredients: [
      "куриная грудка",
      "лук",
      "кокосовое молоко",
      "кукурузная мука",
      "соль",
      "перец",
      "куркума"
    ]
  },
  "105": {
    deleted: true,
    title: "Гуляш из говядины",
    price: 600,
    weight: 400,
    image: "gulyahs-govyadina.jpg",
    ingredients: [
      "говядина",
      "томатная паста",
      "лук",
      "горчица",
      "сироп топинамбура",
      "соль",
      "перец"
    ]
  },
  "106": {
    deleted: true,
    title: "Сердце индейки пикантное",
    price: 300,
    weight: 400,
    image: "cerdce-indeyki-pikantnoe.jpg",
    ingredients: [
      "сердце индейки",
      "томатная паста",
      "аджика",
      "горчица",
      "сироп топинамбура",
      "лук",
      "соль",
      "перец"
    ]
  },
  "107": {
    deleted: true,
    title: "Печень индейки в сливочном соусе",
    price: 320,
    weight: 400,
    image: "pechen-indeyka.jpg",
    ingredients: [
      "печень индейки",
      "молоко кокосовое",
      "лук",
      "мука кукурузная",
      "соль",
      "перец"
    ]
  },
  "108": {
    deleted: true,
    title: "Рагу из куриных потрошков",
    price: 320,
    weight: 400,
    image: "empty.jpg",
    ingredients: [
      "сердце куриное",
      "печень куриная",
      "масло оливковое",
      "горчица",
      "лук",
      "перец",
      "чеснок сухой",
      "паприка",
      "соль"
    ]
  },
  "109": {
    title: "Фрикадельки куриные",
    price: 250,
    weight: 300,
    image: "frikadelki-kuritsa.jpg",
    ingredients: [
      "курица",
      "лук",
      "мука кукурузная",
      "яйцо куриное",
      "соль",
      "перец",
      "куркума"
    ],
    amount: 10
  },
  "110": {
    deleted: true,
    title: "Мясо для жаркого",
    price: 750,
    weight: 400,
    image: "empty.jpg",
    ingredients: ["говядина"]
  },
  "111": {
    deleted: true,
    title: "Фермерский фарш из говядины",
    price: 750,
    weight: 500,
    image: "empty.jpg",
    ingredients: ["говядина"]
  },
  "112": {
    title: "Рубленый бифштекс",
    price: 600,
    weight: 300,
    amount: 2,
    image: "beefshteks-rublennui.jpg",
    ingredients: ["говядина", "соль", "перец"]
  },
  "113": {
    title: "Цыплёнок тапака",
    price: 400,
    weight: 1000,
    image: "tciplyonok-tapaka.jpg",
    ingredients: ["курица", "соль", "специи"]
  },
  "114": {
    deleted: true,
    title: "Биточки с сыром",
    price: 350,
    weight: 400,
    amount: 4,
    image: "empty.jpg",
    ingredients: [
      "индейка",
      "сыр",
      "зелень",
      "лук",
      "чеснок",
      "яйцо",
      "масло оливковое",
      "мука кукурузная",
      "мука безглютеновая",
      "перец",
      "соль"
    ]
  },
  "115": {
    deleted: true,
    title: "Шашлычок",
    price: 320,
    weight: 400,
    amount: 2,
    image: "shahlichok.jpg",
    ingredients: [
      "индейка",
      "перец сладкий",
      "масло оливк",
      "горчица",
      "сок лимона",
      "соль",
      "перец"
    ]
  },
  "116": {
    deleted: true,
    title: "Куриное бедро в брусничном соусе",
    price: 380,
    weight: 500,
    amount: 4,
    image: "empty.jpg",
    ingredients: [
      "куриное бедро",
      "брусника",
      "перец острый",
      "сироп топинамбура",
      "томатная паста",
      "соль"
    ]
  },
  "117": {
    deleted: true,
    title: "Голень куриная в сливочно-горчином соусе",
    price: 420,
    weight: 500,
    amount: 4,
    image: "empty.jpg",
    ingredients: [
      "голень куриная",
      "кокосовое молоко",
      "горчица",
      "сироп топинамбура",
      "чеснок",
      "соль",
      "куркума"
    ]
  },
  "118": {
    deleted: true,
    title: "Крылышки пикантные",
    price: 380,
    weight: 400,
    image: "empty.jpg",
    ingredients: ["аджика", "горчица", "масло оливк", "паприка", "чеснок"]
  },
  "119": {
    title: "Биточки с сыром",
    price: 270,
    weight: 200,
    amount: 2,
    image: "bitochki-s-sirom.jpg",
    ingredients: [
      "индейка",
      "сыр",
      "зелень",
      "лук",
      "чеснок",
      "яйцо",
      "масло оливковое",
      "мука кукурузная",
      "мука б/г",
      "перец",
      "соль"
    ]
  },
  "120": {
    deleted: true,
    title: "Шашлычок",
    price: 360,
    weight: 400,
    amount: 2,
    image: "shahlichok.jpg",
    ingredients: [
      "индейка",
      "перец сладкий",
      "масло оливковое",
      "горчица",
      "сок лимона",
      "соль",
      "перец"
    ]
  },
  "121": {
    title: "Куриное бедро в брусничном соусе",
    price: 380,
    weight: 500,
    amount: 4,
    image: "kurinuie-byodra-brusnika.jpg",
    ingredients: [
      "куриное бедро",
      "брусника",
      "перец острый",
      "сироп топинамбура",
      "томатная паста",
      "соль"
    ]
  },
  "122": {
    deleted: true,
    title: "Голень куриная в сливочно-горчином соусе",
    price: 420,
    weight: 500,
    amount: 4,
    image: "krilishki-pikantniye.jpg",
    ingredients: [
      "голень куриная",
      "кокосовое молоко",
      "горчица",
      "сироп топинамбура",
      "чеснок",
      "соль",
      "куркума"
    ]
  },
  "123": {
    deleted: true,
    title: "Крылышки пикантные",
    price: 380,
    weight: 400,
    amount: 4,
    image: "kurinuie-byodra-gortchitza.jpg",
    ingredients: ["аджика", "горчица", "масло оливк", "паприка", "чеснок"]
  },
  "124": {
    title: "Блины б/г с куриным мясом",
    price: 280,
    weight: 240,
    amount: 4,
    image: "empty.jpg",
    ingredients: [
      "яйцо",
      "мука рисовая",
      "мука кукурузная",
      "мука льняная",
      "мука амарантовая",
      "крахмал тапиоковый",
      "крахмал кукурзный",
      "молоко сухое",
      "сахар",
      "соль",
      "лимонная кислота"
    ]
  },
  "125": {
    title: "Запеканка из индейки с грибами и цветной капустой",
    price: 350,
    weight: 300,
    image: "empty.jpg",
    ingredients: [
      "индейка",
      "шампиньоны",
      "лук",
      "цветная капуста",
      "сыр",
      "масло оливковое"
    ]
  },
  "126": {
    title: "Запеканка из форели с брокколи",
    price: 450,
    weight: 300,
    image: "empty.jpg",
    ingredients: [
      "форель",
      "лук",
      "брокколи",
      "сыр",
      "масло оливковое",
      "орегано",
      "базилик"
    ]
  },
  "127": {
    title: "Купаты из курицы и индейки со шпинатом и сыром",
    price: 550,
    weight: 400,
    amount: 4,
    image: "empty.jpg",
    ingredients: [
      "курица",
      "индейка",
      "лук репчатый",
      "масло оливковое",
      "шпинат",
      "сыр",
      "чеснок",
      "соль",
      "перец",
      "мускат",
      "кориандр"
    ]
  },
  "128": {
    deleted: true,
    title: "Купаты из индейки",
    price: 470,
    weight: 400,
    amount: 4,
    image: "empty.jpg",
    ingredients: [
      "индейка",
      "лук",
      "аджика",
      "горчица сухая",
      "сироп топинамбура",
      "масло",
      "вода",
      "мускат",
      "перец",
      "соль",
      "кориандр"
    ]
  },
  "129": {
    deleted: true,
    title: "Шашлык фирменный",
    price: 600,
    weight: 1000,
    image: "empty.jpg",
    ingredients: ["индейка", "соль", "специи", "минеральная вода", "лимон"]
  },
  "130": {
    title: "Купаты по-русски из говядины",
    price: 590,
    weight: 400,
    amount: 4,
    image: "kupati.jpg",
    ingredients: [
      "говядина",
      "лук",
      "чеснок",
      "масло оливковое",
      "вода",
      "соль",
      "перец",
      "кориандр"
    ]
  },
  "131": {
    deleted: true,
    title: "Купаты румынские",
    price: 590,
    weight: 400,
    amount: 4,
    image: "empty.jpg",
    ingredients: [
      "говядина",
      "перец сладкий",
      "лук",
      "масло олив",
      "чеснок",
      "соль"
    ]
  },
  "132": {
    deleted: true,
    title: "Шашлык из индейки",
    price: 600,
    weight: 1000,
    image: "empty.jpg",
    ingredients: [
      "индейка",
      "лук",
      "лимон",
      "минеральная вода",
      "горчица",
      "соль перец"
    ]
  },
  "133": {
    deleted: true,
    title: "Пельмени радуга",
    price: 400,
    weight: 500,
    image: "empty.jpg",
    ingredients: [
      "говядина",
      "курица",
      "лук",
      "соль",
      "перец",
      "мука",
      "сок свеклы",
      "сок моркови",
      "сок шпината",
      "сок укропа",
      "яйцо",
      "соль"
    ]
  },
  "134": {
    title: "Блины безглютеновые с клубникой",
    price: 290,
    weight: 250,
    amount: 4,
    image: "empty.jpg",
    ingredients: [
      "яйцо",
      "вода",
      "мука рисовая",
      "мука кукурузная",
      "мука льняная",
      "мука амарантовая",
      "крахмал тапиоковый",
      "крахмал кукурузный",
      "молоко",
      "сахар",
      "соль",
      "клубника",
      "кокосовый сахар",
      "кукурузный крахмал"
    ]
  },
  "135": {
    title: "Блины безглютеновые с яблоком и красной смородиной",
    price: 290,
    weight: 250,
    amount: 4,
    image: "empty.jpg",
    ingredients: [
      "яйцо",
      "вода",
      "мука рисовая",
      "мука кукурузная",
      "мука льняная",
      "мука амарантовая",
      "крахмал тапиоковый",
      "крахмал кукурузный",
      "молоко",
      "сахар",
      "соль",
      "яблоко",
      "красная смородина",
      "кокосовый сахар",
      "кукурузный крахмал"
    ]
  },
  "136": {
    deleted: true,
    title: "Соус кисло-сладкий",
    price: 250,
    weight: 200,
    image: "sous-kislo-sladkiy.jpg",
    ingredients: [
      "смородина красная",
      "чеснок",
      "Аджика",
      "сироп топинамбура",
      "масло оливковое",
      "крахмал рисовый"
    ]
  },
  "137": {
    title: "Соус грибной",
    price: 200,
    weight: 200,
    image: "sous-gribnoy.jpg",
    ingredients: [
      "грибы шампиньоны",
      "лук",
      "масло оливковое",
      "молоко кокосовое",
      "бульон куриный",
      "крахмал рисовый"
    ]
  },
  "138": {
    title: "Соус летний",
    price: 300,
    weight: 200,
    image: "sous-letniy.jpg",
    ingredients: [
      "кинза",
      "петрушка",
      "укроп",
      "базилик",
      "чеснок",
      "горчица зернистая",
      "перец сладкий",
      "топинамбур",
      "сок лимона",
      "масло оливковое",
      "соль",
      "белый перец"
    ]
  },
  "139": {
    title: "Соус томатный",
    price: 220,
    weight: 200,
    image: "sous-tomaniy.jpg",
    ingredients: [
      "томатная паста",
      "укроп",
      "петрушка",
      "чеснок",
      "оливковое масло",
      "сироп топинамбура"
    ]
  },
  "140": {
    deleted: true,
    title: "Наггетсы куриные",
    price: 380,
    weight: 250,
    image: "nagetsi.jpg",
    ingredients: [
      "куриная грудка",
      "сок лимона",
      "соль",
      "перец белый",
      "яйцо",
      "крупа кукурузная"
    ]
  },
  "141": {
    title: "Стрипсы",
    price: 380,
    weight: 250,
    image: "stripsi.jpg",
    ingredients: [
      "куриная грудка",
      "сок лимона",
      "чеснок",
      "соль",
      "томат сушеный",
      "паприка",
      "шафран",
      "смесь перцев",
      "яйцо",
      "крупа кукурузная"
    ]
  },
  "142": {
    deleted: true,
    title: "Шницель куриный",
    price: 380,
    weight: 250,
    amount: 2,
    image: "shnitcel-kuriniy.jpg",
    ingredients: [
      "куриная грудка",
      "аджика",
      "чеснок",
      "соль",
      "смесь перцев",
      "обвалка",
      "яйцо",
      "крупа кукурузная"
    ]
  },
  "143": {
    title: "Котлеты с ламинарией",
    price: 270,
    weight: 200,
    amount: 2,
    image: "kotleti-laminariya.jpg",
    ingredients: ["курица", "морская капуста", "лук ", "соль", "белый перец"]
  },
  "144": {
    title: "Фаршированные окорочка",
    price: 400,
    weight: 400,
    amount: 2,
    image: "empty.jpg",
    ingredients: [
      "курица",
      "шампиньоны",
      "лук",
      "чеснок",
      "сыр",
      "масло сливочное",
      "масло оливковое",
      "соль",
      "перец"
    ]
  },
  "145": {
    title: "Котлеты для мужчин",
    price: 270,
    weight: 260,
    amount: 2,
    image: "empty.jpg",
    ingredients: [
      "говядина",
      "будро куриное",
      "лук",
      "чеснок",
      "соль",
      "перец",
      "масло оливковое"
    ]
  }
} as const;

export const itemsById: Readonly<Record<TMenuItemId, TMenuItem>> = mapObject(
  rawItemsById,
  (id, item) => ({ ...item, id })
);

export function isMenuItemId(id?: string | null): id is TMenuItemId {
  return typeof id === "string" && id in itemsById;
}

export const itemsWithDeleted: ReadonlyArray<TMenuItem> =
  Object.values(itemsById);

export const items: ReadonlyArray<TMenuItem> = itemsWithDeleted.filter(
  (x) => !x.deleted
);
