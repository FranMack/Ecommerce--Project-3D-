const Products = require("../models/Products");
const db = require("../configs/db");

const productsData = [
  {
    categoryId: 1,
    name: "totoro",
    description:
      "Explora el mundo mágico de Totoro en esta hermosa ilustración. Perfecta para los amantes del Studio Ghibli.",
    price: 5800,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063727/arte/totoro_n7bq7d.png",
    stock: 8,
  },
  {
    categoryId: 1,
    name: "wall-e",
    description:
      "Embárcate en una aventura espacial con Wall-E en esta encantadora pintura. Ideal para los fans de Pixar.",
    price: 8800,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063726/arte/wale_zc33fr.png",
    stock: 5,
  },
  {
    categoryId: 1,
    name: "stich",
    description:
      "Descubre la ternura de Stitch en esta hermosa ilustración. Perfecta para los amantes de Disney.",
    price: 4500,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063726/arte/stich_nahstk.png",
    stock: 7,
  },
  {
    categoryId: 1,
    name: "mascara",
    description:
      "Esta mascara artística captura la esencia de la dualidad y la expresión creativa. Una pieza única para coleccionistas.",
    price: 7200,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063726/arte/mascara_oe55pd.png",
    stock: 3,
  },
  {
    categoryId: 1,
    name: "grood",
    description:
      "Grood, el gorila telepático con una historia épica, cobra vida en esta pintura vibrante. ¡Ideal para los fanáticos de los superhéroes!",
    price: 6400,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063726/arte/grood_rgr2ix.png",
    stock: 10,
  },
  {
    categoryId: 1,
    name: "dragón",
    description:
      "Este impresionante dibujo muestra la majestuosidad y la fuerza de un dragón ancestral. ¡Una obra de arte para los amantes de la fantasía!",
    price: 8500,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063726/arte/dragon_lfchja.png",
    stock: 6,
  },
  {
    categoryId: 1,
    name: "mamut",
    description:
      "Explora el pasado con esta pintura de un majestuoso mamut. Una pieza única para los aficionados a la arqueología y la historia.",
    price: 5900,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063726/arte/mamut_mkidsd.png",
    stock: 4,
  },
  {
    categoryId: 1,
    name: "león",
    description:
      "Este retrato cautivador muestra la nobleza y la belleza de un león en todo su esplendor. ¡Ideal para los amantes de la fauna salvaje!",
    price: 7200,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063726/arte/leon_iagqxs.png",
    stock: 2,
  },
  {
    categoryId: 1,
    name: "vegeta",
    description:
      "El poderoso guerrero Vegeta se une a la colección de figuras de acción. ¡Prepárate para la batalla con este juguete increíble!",
    price: 3500,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063892/juguetes/veggeta_yssqyh.png",
    stock: 9,
  },
  {
    categoryId: 1,
    name: "tiburón",
    description:
      "Sumérgete en la diversión con este juguete realista de un tiburón. Ideal para jugar en la piscina o crear aventuras acuáticas.",
    price: 2500,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063892/juguetes/tiburon_hc2uiz.png",
    stock: 6,
  },
  {
    categoryId: 1,
    name: "steve",
    description:
      "¡El famoso personaje Steve de Minecraft cobra vida en este set de juguetes! Únete a él en emocionantes aventuras pixeladas.",
    price: 4200,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063892/juguetes/stive_q52pjp.png",
    stock: 12,
  },
  {
    categoryId: 1,
    name: "sony",
    description:
      "Diviértete con este adorable y suave peluche de Sony, el perro más simpático del vecindario. ¡Perfecto para abrazar y jugar!",
    price: 1800,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063891/juguetes/sony_p2jpzc.png",
    stock: 8,
  },
  {
    categoryId: 1,
    name: "camión",
    description:
      "¿Listo para la diversión en la construcción? Este camión de juguete con funciones realistas hará que tus aventuras sean épicas.",
    price: 3200,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063891/juguetes/camion_bhgz4a.png",
    stock: 5,
  },
  {
    categoryId: 1,
    name: "goku",
    description:
      "El legendario guerrero Goku llega en forma de figura de acción. ¡Revive las emocionantes batallas de Dragon Ball con este juguete impresionante!",
    price: 5500,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063891/juguetes/goku_rfpyww.png",
    stock: 3,
  },
  {
    categoryId: 1,
    name: "harry",
    description:
      "Únete al mundo mágico con esta figura de Harry Potter. ¡Prepárate para vivir aventuras fantásticas en Hogwarts!",
    price: 3900,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063891/juguetes/harry_b31b7u.png",
    stock: 7,
  },
  {
    categoryId: 1,
    name: "bull",
    description:
      "¡El toro más valiente y fuerte está aquí! Este juguete de peluche te acompañará en tus juegos y te brindará abrazos llenos de energía.",
    price: 2700,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063891/juguetes/bull_ypmo5s.png",
    stock: 4,
  },
  {
    categoryId: 1,
    name: "robot",
    description:
      "Desata tu imaginación con este asombroso robot de juguete. Programa y controla sus movimientos para crear emocionantes aventuras.",
    price: 6500,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063891/juguetes/robot_ojeoow.png",
    stock: 2,
  },
  {
    categoryId: 1,
    name: "espinas",
    description:
      "Conviértete en un auténtico héroe espinoso con este juego de espadas de juguete. ¡Ideal para recrear épicas batallas medievales!",
    price: 3200,
    url_image:
      "https://res.cloudinary.com/dbj54ld99/image/upload/v1688063891/juguetes/espinas_nlyr7p.png",
    stock: 5,
  },
];

async function seed() {
  try {
    await db.sync();

    await Products.bulkCreate(productsData);

    console.log(
      "Los datos se han insertado correctamente en la base de datos."
    );

    process.exit(0);
  } catch (error) {
    console.error("Error al insertar los datos:", error);
    process.exit(1);
  }
}

seed();
