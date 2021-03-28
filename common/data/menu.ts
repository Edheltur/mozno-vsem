import { mapObject } from "common/utils/object";

export type TMenuItemId = keyof typeof rawItemsById;

export type TMenuItem = {
  id: TMenuItemId;
  title: string;
  price: number;
  weight: number;
  amount?: number;
  image: string;
  ingredients: ReadonlyArray<string>;
};

const rawItemsById = {
  "1": {
    title: "Гречаники",
    price: 280,
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
      "мука пшеничная цельнозерновая",
      "мука греченевая",
    ],
  },
  "2": {
    title: "Биточки из трески",
    price: 350,
    weight: 300,
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
    price: 220,
    weight: 300,
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
      "мука пшеничная цельнозерновая",
      "мука рисовая",
    ],
  },
  "4": {
    title: "Фрикадельки из индейки с луком",
    price: 450,
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
      "мука пшеничная цельнозерновая",
      "мука рисовая",
    ],
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
      "мука пшеничная цельнозерновая",
      "мука рисовая",
    ],
  },
  "6": {
    title: "Фрикадельки из индейки со шпинатом",
    price: 420,
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
      "мука пшеничная цельнозерновая",
      "мука рисовая",
    ],
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
      "мука пшеничная цельнозерновая",
      "мука рисовая",
    ],
  },
  "8": {
    title: "Котлеты из курицы с имбирём",
    price: 440,
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
  },
  "9": {
    title: "Перец фаршированный",
    price: 350,
    weight: 400,
    amount: 2,
    image: "farshirovannuie-pertsi.jpg",
    ingredients: [
      "перец болгарский",
      "филе бедра индейки",
      "цветная капуста",
      "лук репчатый",
      "зелень петрушки",
      "моцарелла твёрдая",
      "соль",
      "паприка",
    ],
  },
  "10": {
    title: "Котлетки из красной рыбы с кальмаром",
    price: 400,
    weight: 300,
    amount: 3,
    image: "kotleti-forel-kalmar.jpg",
    ingredients: [
      "форель",
      "кальмар",
      "лук",
      "яйцо куриное",
      "соль",
      "базилик",
    ],
  },
  "11": {
    title: "Рыбные биточки из судака с минтаем",
    price: 350,
    weight: 300,
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
  },
  "13": {
    title: "Фарш из говядины и курицы",
    price: 400,
    weight: 500,
    image: "farsh-govyadina-kurtisa.jpg",
    ingredients: ["говядина 50%", "филе курицы 50%"],
  },
  "15": {
    title: "Фарш из индейки",
    price: 400,
    weight: 500,
    image: "farsh-indeyka.jpg",
    ingredients: ["филе индейки"],
  },
  "17": {
    title: "Фарш из курицы",
    price: 400,
    weight: 500,
    image: "farsh-kuritsa.jpg",
    ingredients: ["филе курицы"],
  },
  "19": {
    title: "Фарш из белой рыбы",
    price: 400,
    weight: 500,
    image: "farsh-treska.jpg",
    ingredients: ["филе трески"],
  },
  "21": {
    title: "Фарш из красной рыбы",
    price: 400,
    weight: 500,
    image: "farsh-keta.jpg",
    ingredients: ["филе кеты"],
  },
  "23": {
    title: "Капустники",
    price: 320,
    weight: 360,
    amount: 3,
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
  },
  "24": {
    title: "Хлеб полбяно-пшеничный",
    price: 200,
    weight: 540,
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
    weight: 540,
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
    price: 160,
    weight: 450,
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
    weight: 540,
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
  "29": {
    title: "Хлеб бездрожжевой цельнозерновой с семечками",
    price: 160,
    weight: 450,
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
      "кунжут",
    ],
  },
  "30": {
    title: "Котлеты куриные с брокколи",
    price: 280,
    weight: 300,
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
  },
  "31": {
    title: "Биточки из минтая с креветками",
    price: 380,
    weight: 300,
    amount: 3,
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
  },
  "32": {
    title: "Перец фаршированный овощной",
    price: 200,
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
  },
  "33": {
    title: "Фарш из говядины",
    price: 500,
    weight: 500,
    image: "farsh-govyadina-kurtisa.jpg",
    ingredients: ["говядина"],
  },
  "34": {
    title: "Фарш для животных",
    price: 200,
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
    price: 130,
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
    price: 130,
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
    price: 100,
    weight: 400,
    image: "smes-dlya-zarki-yaits.jpg",
    ingredients: ["перец", "томаты", "фасоль", "лук"],
  },
  "45": {
    title: "Шпинат резаный",
    price: 130,
    weight: 400,
    image: "shpinat.jpg",
    ingredients: ["шпинат"],
  },
  "47": {
    title: "Клубника",
    price: 120,
    weight: 300,
    image: "klubnika.jpg",
    ingredients: ["клубника"],
  },
  "48": {
    title: "Долма",
    price: 300,
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
  },
  "49": {
    title: "Голубцы Пекинские",
    price: 350,
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
  },
  "50": {
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
      "соль",
    ],
  },
  "51": {
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
      "соль",
    ],
  },
  "52": {
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
      "соль",
    ],
  },
  "53": {
    title: "Фрикадельки для ухи",
    price: 200,
    weight: 200,
    image: "ribnuie-frikadelki.jpg",
    ingredients: [
      "красная рыба",
      "лук",
      "яйцо",
      "соль",
      "перец",
      "куркума",
      "мука цельно зерновая",
    ],
  },
  "54": {
    title: "Бульон рыбный замороженный",
    price: 100,
    weight: 500,
    image: "empty.jpg",
    ingredients: ["вода", "красная рыба", "белая рыба", "соль"],
  },
  "55": {
    title: "Чебуреки мясные",
    price: 210,
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
    price: 310,
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
    price: 220,
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
    price: 250,
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
  "64": {
    title: "Зелёный горошек",
    price: 130,
    weight: 400,
    image: "goroh.jpg",
    ingredients: ["Зелёный горошек"],
  },
  "65": {
    title: "Лечо",
    price: 150,
    weight: 400,
    image: "lecho.jpg",
    ingredients: ["морковь", "перец", "томат", "лук", "цукини"],
  },
  "66": {
    title: "Рататуй",
    price: 200,
    weight: 400,
    image: "raratui.jpg",
    ingredients: ["цукини", "томаты", "перец", "лук", "баклажаны"],
  },
  "67": {
    title: "Кабачок",
    price: 120,
    weight: 400,
    image: "kabachok.jpg",
    ingredients: ["кабачок"],
  },
  "68": {
    title: "Смесь для борща",
    price: 100,
    weight: 400,
    image: "smes-borsh.jpg",
    ingredients: ["картофель", "морковь", "свекла", "капуста", "лук", "томаты"],
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
    price: 200,
    weight: 300,
    amount: 3,
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
  },

  "81": {
    title: "Котлеты морковные",
    price: 200,
    weight: 300,
    amount: 3,
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
  },
  "82": {
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
      "масло оливковое",
    ],
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
    price: 700,
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
  "91": {
    title: "Винегрет",
    price: 135,
    weight: 400,
    image: "empty.jpg",
    ingredients: ["картофель", "морковь", "свекла", "зеленый горошек"],
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
    price: 340,
    weight: 300,
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
    price: 240,
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
    price: 230,
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
    image: "empty.jpg",
    ingredients: [
      "чеснок",
      "перец красный",
      "соль",
      "базилик",
      "хмели-сунели",
      "кинза",
    ],
  },
  "102": {
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
      "перец",
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
  },
  "104": {
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
      "куркума",
    ],
  },
  "105": {
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
      "перец",
    ],
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
  "107": {
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
    price: 250,
    weight: 300,
    image: "frikadelki-kuritsa.jpg",
    ingredients: [
      "курица",
      "лук",
      "морковь",
      "мука кукурузная",
      "яйцо куриное",
      "соль",
      "перец",
      "куркума",
    ],
  },
  "110": {
    title: "Мясо для жаркого",
    price: 750,
    weight: 400,
    image: "empty.jpg",
    ingredients: ["говядина"],
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
    price: 380,
    weight: 900,
    image: "tciplyonok-tapaka.jpg",
    ingredients: ["курица", "соль", "специи"],
  },
  "114": {
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
      "соль",
    ],
  },
  "115": {
    title: "Шашлычок",
    price: 320,
    weight: 400,
    amount: 2,
    image: "empty.jpg",
    ingredients: [
      "индейка",
      "перец сладкий",
      "масло оливк",
      "горчица",
      "сок лимона",
      "соль",
      "перец",
    ],
  },
  "116": {
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
      "соль",
    ],
  },
  "117": {
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
      "куркума",
    ],
  },
  "118": {
    title: "Крылышки пикантные",
    price: 380,
    weight: 400,
    image: "empty.jpg",
    ingredients: ["аджика", "горчица", "масло оливк", "паприка", "чеснок"],
  },
  "119": {
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
      "мука б/г",
      "перец",
      "соль",
    ],
  },
  "120": {
    title: "Шашлычок",
    price: 320,
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
    image: "empty.jpg",
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
    image: "empty.jpg",
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
    image: "empty.jpg",
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
      "",
    ],
  },
} as const;

export const itemsById: Readonly<
  Record<TMenuItemId, TMenuItem>
> = mapObject(rawItemsById, (id, item) => ({ ...item, id }));

export const items: ReadonlyArray<TMenuItem> = Object.values(itemsById);
