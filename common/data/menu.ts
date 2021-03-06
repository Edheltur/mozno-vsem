import { mapObject } from "common/utils/object";

export type TMenuItemId = keyof typeof rawItemsById;
export type TNutrition = {
  whey: number;
  fats: number;
  carbs: number;
  energyValue: number;
};

export type TMenuItem = {
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
      "мука греченевая",
    ],
    nutrition: { whey: 10.3, fats: 7.2, carbs: 16, energyValue: 140.3 },
  },
  "2": {
    title: "Биточки из трески",
    price: 240,
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
      "тимьян",
    ],
  },
  "3": {
    title: "Ленивые голубцы",
    price: 180,
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
      "мука рисовая",
    ],
    nutrition: { whey: 8, fats: 4.3, carbs: 6, energyValue: 94.2 },
  },
  "4": {
    title: "Фрикадельки из индейки с луком",
    price: 490,
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
      "мука рисовая",
    ],
    nutrition: { whey: 13.7, fats: 6.4, carbs: 5, energyValue: 130.3 },
  },
  "5": {
    title: "Котлеты из телятины с кабачком",
    price: 340,
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
      "мука рисовая",
    ],
    nutrition: { whey: 10.7, fats: 6.4, carbs: 7, energyValue: 319.6 },
  },
  "6": {
    title: "Фрикадельки из индейки со шпинатом",
    price: 480,
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
      "мука рисовая",
    ],
    nutrition: { whey: 11.4, fats: 5.1, carbs: 5, energyValue: 113 },
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
      "мука рисовая",
    ],
    nutrition: { whey: 10.7, fats: 6.4, carbs: 7, energyValue: 132.4 },
  },
  "8": {
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
      "зелень петрушки",
    ],
    nutrition: { whey: 15.8, fats: 7.7, carbs: 4, energyValue: 146.6 },
  },
  "9": {
    title: "Перец фаршированный",
    price: 370,
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
      "паприка",
    ],
    nutrition: { whey: 9, fats: 5.9, carbs: 5, energyValue: 107.9 },
  },
  "10": {
    title: "Котлетки из красной рыбы с кальмаром",
    price: 290,
    weight: 200,
    amount: 2,
    image: "kotleti-forel-kalmar.jpg",
    ingredients: ["форель", "кета", "кальмар", "лук", "яйцо куриное", "соль"],
  },
  "11": {
    title: "Рыбные биточки из судака с минтаем",
    price: 270,
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
      "тимьян",
    ],
    nutrition: { whey: 14.3, fats: 3.2, carbs: 6, energyValue: 107.9 },
  },
  "13": {
    title: "Фарш из говядины и курицы",
    price: 450,
    weight: 500,
    image: "farsh-govyadina-kurtisa.jpg",
    ingredients: ["говядина 50%", "филе курицы 50%"],
  },
  "15": {
    title: "Фарш из индейки",
    price: 450,
    weight: 500,
    image: "farsh-indeyka.jpg",
    ingredients: ["филе индейки"],
  },
  "17": {
    title: "Фарш из курицы",
    price: 450,
    weight: 500,
    image: "farsh-kuritsa.jpg",
    ingredients: ["филе курицы"],
  },
  "19": {
    title: "Фарш из белой рыбы",
    price: 450,
    weight: 500,
    image: "farsh-treska.jpg",
    ingredients: ["филе трески"],
  },
  "21": {
    title: "Фарш из красной рыбы",
    price: 450,
    weight: 500,
    image: "farsh-keta.jpg",
    ingredients: ["филе кеты"],
  },
  "23": {
    title: "Капустники",
    price: 190,
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
      "мука рисовая",
    ],
    nutrition: { whey: 9.8, fats: 4.4, carbs: 6, energyValue: 100.3 },
  },
  "24": {
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
      "соль",
    ],
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
      "соль",
    ],
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
      "прованские травы",
    ],
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
      "кориандр",
    ],
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
      "соль",
    ],
    nutrition: { whey: 10.9, fats: 5, carbs: 6, energyValue: 110.5 },
  },
  "31": {
    title: "Биточки из минтая с креветками",
    price: 290,
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
      "перец",
    ],
    nutrition: { whey: 16.6, fats: 1.1, carbs: 3, energyValue: 88.2 },
  },
  "32": {
    title: "Перец фаршированный овощной",
    price: 250,
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
      "соль",
    ],
    nutrition: { whey: 1, fats: 1.5, carbs: 6, energyValue: 40.2 },
  },
  "33": {
    title: "Фарш из говядины",
    price: 450,
    weight: 500,
    image: "farsh-govyadina-kurtisa.jpg",
    ingredients: ["говядина"],
  },
  "34": {
    title: "Фарш для животных",
    price: 100,
    weight: 500,
    image: "farsh-kuritsa.jpg",
    ingredients: ["обрезь говядины", "обрезь курицы", "обрезь индейки"],
  },
  "37": {
    title: "Капуста брокколи",
    price: 150,
    weight: 400,
    image: "brokkoli.jpg",
    ingredients: ["капуста брокколи"],
  },
  "38": {
    title: "Капуста цветная",
    price: 150,
    weight: 400,
    image: "tsvetnaya-kapusta.jpg",
    ingredients: ["капуста цветная"],
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
      "морковь",
    ],
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
      "зеленый горошек",
    ],
  },
  "44": {
    title: "Смесь для жарки яиц",
    price: 130,
    weight: 400,
    image: "smes-dlya-zarki-yaits.jpg",
    ingredients: ["перец", "томаты", "фасоль", "лук"],
  },
  "45": {
    title: "Шпинат резаный",
    price: 150,
    weight: 400,
    image: "shpinat.jpg",
    ingredients: ["шпинат"],
  },
  "47": {
    title: "Клубника",
    price: 150,
    weight: 300,
    image: "klubnika.jpg",
    ingredients: ["клубника"],
  },
  "48": {
    title: "Долма",
    price: 340,
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
      "масло оливковое",
    ],
    nutrition: { whey: 13.9, fats: 9.5, carbs: 2, energyValue: 152.2 },
  },
  "49": {
    title: "Голубцы Пекинские",
    price: 370,
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
      "укроп сухой",
    ],
    nutrition: { whey: 8.4, fats: 3.6, carbs: 2, energyValue: 75.9 },
  },
  "53": {
    title: "Фрикадельки для ухи",
    price: 240,
    weight: 200,
    image: "ribnuie-frikadelki.jpg",
    ingredients: ["красная рыба", "лук", "яйцо", "соль", "перец", "куркума"],
    amount: 20,
  },
  "54": {
    title: "Бульон рыбный замороженный",
    price: 100,
    weight: 500,
    image: "empty.jpg",
    ingredients: ["вода", "красная рыба", "белая рыба", "соль"],
    nutrition: { whey: 2.9, fats: 0.7, carbs: 0, energyValue: 19.1 },
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
      "перец",
    ],
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
      "мука безглютеновая",
    ],
    nutrition: { whey: 7.2, fats: 21.2, carbs: 25, energyValue: 319.6 },
  },
  "57": {
    title: "Набор для ухи",
    price: 310,
    weight: 700,
    amount: 4,
    image: "ribnui-bulyon-s-frikadelkami.jpg",
    ingredients: ["бульон из рыбы", "фрикадельки из красной рыбы", "соль"],
  },
  "60": {
    title: "Блины безглютеновые",
    price: 150,
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
      "лимонная кислота",
    ],
  },
  "61": {
    title: "Блины б/г с фаршем из куриных сердечек",
    price: 250,
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
      "мускат",
    ],
  },
  "62": {
    title: "Блины б/г с яблоком и корицей",
    price: 260,
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
      "корица",
    ],
  },
  "63": {
    title: "Шампиньоны резаные",
    price: 150,
    weight: 400,
    image: "shampinyoni.jpg",
    ingredients: ["шампиньоны"],
  },
  "67": {
    title: "Кабачок",
    price: 130,
    weight: 400,
    image: "kabachok.jpg",
    ingredients: ["кабачок"],
  },
  "70": {
    title: "Брусника",
    price: 350,
    weight: 300,
    image: "brusnika.jpg",
    ingredients: ["брусника"],
  },
  "71": {
    title: "Клюква",
    price: 350,
    weight: 300,
    image: "klyukva.jpg",
    ingredients: ["клюква"],
  },
  "72": {
    title: "Голубика",
    price: 350,
    weight: 300,
    image: "golubika.jpg",
    ingredients: ["голубика"],
  },
  "73": {
    title: "Ежевика",
    price: 350,
    weight: 300,
    image: "ezevika.jpg",
    ingredients: ["ежевика"],
  },
  "74": {
    title: "Смородина красная",
    price: 200,
    weight: 300,
    image: "smorodina-krasnaya.jpg",
    ingredients: ["смородина красная"],
  },
  "75": {
    title: "Смородина чёрная",
    price: 200,
    weight: 300,
    image: "smorodina-chernaya.jpg",
    ingredients: ["смородина чёрная"],
  },
  "77": {
    title: "Облепиха",
    price: 250,
    weight: 300,
    image: "oblepikha.jpg",
    ingredients: ["облепиха"],
  },
  "79": {
    title: "Котлеты из форели с креветками",
    price: 650,
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
      "мука уневерсальная б/г",
    ],
  },
  "80": {
    title: "Котлеты свекольные",
    price: 140,
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
      "мускат",
    ],
    nutrition: { whey: 8.9, fats: 5.1, carbs: 34, energyValue: 217.6 },
  },
  "81": {
    title: "Котлеты морковные",
    price: 140,
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
      "мускат",
    ],
    nutrition: { whey: 3, fats: 1.6, carbs: 13, energyValue: 78.1 },
  },
  "83": {
    title: "Жимолость",
    price: 400,
    weight: 300,
    image: "zhimolost.jpg",
    ingredients: ["жимолость"],
  },
  "84": {
    title: "Черника",
    price: 350,
    weight: 300,
    image: "chernika.jpg",
    ingredients: ["черника"],
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
      "лук репчатый",
    ],
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
      "чернослив",
    ],
  },
  "87": {
    title: "Кальмары отварные",
    price: 800,
    weight: 400,
    image: "kalmar.jpg",
    ingredients: ["кальмар"],
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
      "перец",
    ],
  },
  "90": {
    title: "Язык говяжий отварной",
    price: 750,
    weight: 400,
    image: "yazik-govyadina.jpg",
    ingredients: ["язык говяжий"],
  },

  "92": {
    title: "Шиповник",
    price: 600,
    weight: 500,
    image: "shipovnik.jpg",
    ingredients: ["шиповник"],
  },
  "93": {
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
      "желатин",
    ],
  },
  "95": {
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
      "масло оливковое",
    ],
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
      "мускат",
    ],
  },
  "98": {
    title: "Бульон куриный замороженный",
    price: 100,
    weight: 500,
    image: "bulyon-kuritsa.jpg",
    ingredients: ["вода", "курица", "соль"],
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
      "соль",
    ],
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
      "соль",
    ],
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
      "кинза",
    ],
  },
  "103": {
    title: "Рулетики из индейки с сыром и зеленью",
    price: 650,
    weight: 520,
    image: "ruleti-indeyka.jpg",
    ingredients: [
      "грудка индейки",
      "сыр",
      "петрушка",
      "укроп",
      "чеснок",
      "соль",
      "перец",
    ],
    amount: 4,
  },
  "106": {
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
      "перец",
    ],
  },
  "108": {
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
      "соль",
    ],
  },
  "109": {
    title: "Фрикадельки куриные",
    price: 200,
    weight: 200,
    image: "frikadelki-kuritsa.jpg",
    ingredients: [
      "курица",
      "лук",
      "мука кукурузная",
      "яйцо куриное",
      "соль",
      "перец",
      "куркума",
    ],
    amount: 10,
  },
  "111": {
    title: "Фермерский фарш из говядины",
    price: 750,
    weight: 500,
    image: "farsh-govyadina-farm.jpg",
    ingredients: ["говядина"],
  },
  "112": {
    title: "Рубленый бифштекс",
    price: 600,
    weight: 300,
    amount: 2,
    image: "beefshteks-rublennui.jpg",
    ingredients: ["говядина", "соль", "перец"],
  },
  "113": {
    title: "Цыплёнок тапака",
    price: 400,
    weight: 1000,
    image: "tciplyonok-tapaka.jpg",
    ingredients: ["курица", "соль", "специи"],
  },
  "119": {
    title: "Биточки с сыром",
    price: 200,
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
      "соль",
    ],
  },
  "120": {
    title: "Шашлычок",
    price: 360,
    weight: 400,
    amount: 2,
    image: "empty.jpg",
    ingredients: [
      "индейка",
      "перец сладкий",
      "масло оливковое",
      "горчица",
      "сок лимона",
      "соль",
      "перец",
    ],
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
      "соль",
    ],
  },
  "122": {
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
      "куркума",
    ],
  },
  "123": {
    title: "Крылышки пикантные",
    price: 380,
    weight: 400,
    amount: 4,
    image: "kurinuie-byodra-gortchitza.jpg",
    ingredients: ["аджика", "горчица", "масло оливк", "паприка", "чеснок"],
  },
  "124": {
    title: "Блины б/г с куриным мясом",
    price: 250,
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
      "лимонная кислота",
    ],
  },
  "125": {
    title: "Запеканка из индейки с грибами и цветной капустой",
    price: 300,
    weight: 300,
    image: "empty.jpg",
    ingredients: [
      "индейка",
      "шампиньоны",
      "лук",
      "цветная капуста",
      "сыр",
      "масло оливковое",
    ],
  },
  "126": {
    title: "Запеканка из форели с брокколи",
    price: 400,
    weight: 300,
    image: "empty.jpg",
    ingredients: [
      "форель",
      "лук",
      "брокколи",
      "сыр",
      "масло оливковое",
      "орегано",
      "базилик",
    ],
  },
  "127": {
    title: "Купаты из курицы и индейки со шпинатом и сыром",
    price: 560,
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
      "кориандр",
    ],
  },
  "128": {
    title: "Купаты из индейки",
    price: 540,
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
      "кориандр",
    ],
  },
  "129": {
    title: "Шашлык фирменный",
    price: 600,
    weight: 1000,
    image: "empty.jpg",
    ingredients: ["индейка", "соль", "специи", "минеральная вода", "лимон"],
  },
  "130": {
    title: "Купаты по-русски из говядины",
    price: 540,
    weight: 400,
    amount: 4,
    image: "empty.jpg",
    ingredients: [
      "говядина",
      "лук",
      "чеснок",
      "масло оливковое",
      "вода",
      "соль",
      "перец",
      "кориандр",
    ],
  },
  "131": {
    title: "Купаты румынские",
    price: 560,
    weight: 400,
    amount: 4,
    image: "empty.jpg",
    ingredients: [
      "говядина",
      "перец сладкий",
      "лук",
      "масло олив",
      "чеснок",
      "соль",
    ],
  },
  "132": {
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
      "соль перец",
    ],
  },
  "133": {
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
      "соль",
    ],
  },
  "134": {
    title: "Блины безглютеновые с клубникой",
    price: 270,
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
      "крахмал тапиоковый ",
      "крахмал кукурузный",
      "молоко",
      "сахар",
      "соль",
      "клубника",
      "кокосовый сахар",
      "кукурузный крахмал",
    ],
  },
  "135": {
    title: "Блины безглютеновые с яблоком и красной смородиной",
    price: 260,
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
      "крахмал тапиоковый ",
      "крахмал кукурузный",
      "молоко",
      "сахар",
      "соль",
      "яблоко",
      "красная смородина",
      "кокосовый сахар",
      "кукурузный крахмал",
    ],
  },
} as const;

export const itemsById: Readonly<Record<TMenuItemId, TMenuItem>> = mapObject(
  rawItemsById,
  (id, item) => ({ ...item, id })
);

export function isMenuItemId(id?: string | null): id is TMenuItemId {
  return typeof id === "string" && id in itemsById;
}
export const items: ReadonlyArray<TMenuItem> = Object.values(itemsById);
