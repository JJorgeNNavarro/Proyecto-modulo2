let peliculas = [
  {
    nombre: "Soy Groot",
    imagen: "/images/yo_soy_groot.jpg",
    categoria: "Aventura",
    codigo: 0,
    descripcion:
      "Cuando los Guardianes de la Galaxia quedan atrapados en un agujero de gusano, un Groot más pequeño de lo normal se separa a miles de millones de años luz del equipo. Al caer a un planeta inferior, Groot descubre que se encuentra en un mundo totalmente ajeno y desconocido, lleno de criaturas y sociedades extrañas.",
    publicado: true,
    destacada: true,
    video: "/videos/groot.mp4",
  },
  {
    nombre: "Zootopia",
    imagen: "/images/zootopia.jpg",
    categoria: "Aventura",
    codigo: 1,
    descripcion:
      "Zootrópolis es una moderna metrópoli donde viven todo tipo de mamíferos. Cerca de la ciudad vive Judy Hopps, una conejita que no se parece en nada a sus 275 hermanos ni a sus padres, los encantadores conejos Bonnie y Stu. Desde niña, Judy ha deseado ayudar a los demás y ahora cree haberlo logrado al ser la primera conejita oficial de la policía de Zootrópolis. Sin embargo, pronto descubre que trabajar en un cuerpo compuesto de animales duros y enormes no es fácil",
    publicado: true,
    destacada: false,
    video: "/videos/zootopia.mp4",
  },
  {
    nombre: "UP",
    imagen: "/images/up.jpg",
    categoria: "Aventura",
    codigo: 2,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim dui. Duis nec eros rhoncus, luctus mauris non, lobortis velit. Proin sed ligula euismod, tempor tellus at, dictum lorem. Donec dignissim nec felis at cursus. Cras eget sem vitae odio varius viverra. Vivamus scelerisque quis augue id consequat. Mauris egestas gravida eros vitae faucibus. Vivamus magna leo, tincidunt vel hendrerit sit amet, molestie ac nisl.",
    publicado: true,
    destacada: false,
    video: "",
  },
  {
    nombre: "Winnie Poh",
    imagen: "/images/winnie_pooh.jpg",
    categoria: "Aventura",
    codigo: 3,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim dui. Duis nec eros rhoncus, luctus mauris non, lobortis velit. Proin sed ligula euismod, tempor tellus at, dictum lorem. Donec dignissim nec felis at cursus. Cras eget sem vitae odio varius viverra. Vivamus scelerisque quis augue id consequat. Mauris egestas gravida eros vitae faucibus. Vivamus magna leo, tincidunt vel hendrerit sit amet, molestie ac nisl.",
    publicado: true,
    destacada: false,
    video: "",
  },

  {
    nombre: "Logan",
    imagen: "/images/logan-accion.jpg",
    categoria: "Accion",
    codigo: 4,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim dui. Duis nec eros rhoncus, luctus mauris non, lobortis velit. Proin sed ligula euismod, tempor tellus at, dictum lorem. Donec dignissim nec felis at cursus. Cras eget sem vitae odio varius viverra. Vivamus scelerisque quis augue id consequat. Mauris egestas gravida eros vitae faucibus. Vivamus magna leo, tincidunt vel hendrerit sit amet, molestie ac nisl.",
    publicado: true,
    destacada: false,
    video: "",
  },
  {
    nombre: "Iron Man",
    imagen: "/images/iron_man-accion.jpg",
    categoria: "Accion",
    codigo: 5,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim dui. Duis nec eros rhoncus, luctus mauris non, lobortis velit. Proin sed ligula euismod, tempor tellus at, dictum lorem. Donec dignissim nec felis at cursus. Cras eget sem vitae odio varius viverra. Vivamus scelerisque quis augue id consequat. Mauris egestas gravida eros vitae faucibus. Vivamus magna leo, tincidunt vel hendrerit sit amet, molestie ac nisl.",
    publicado: true,
    destacada: false,
    video: "",
  },
  {
    nombre: "Doble de riesgo",
    imagen: "/images/doble_de_riesgo-accion.jpg",
    categoria: "Accion",
    codigo: 6,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim dui. Duis nec eros rhoncus, luctus mauris non, lobortis velit. Proin sed ligula euismod, tempor tellus at, dictum lorem. Donec dignissim nec felis at cursus. Cras eget sem vitae odio varius viverra. Vivamus scelerisque quis augue id consequat. Mauris egestas gravida eros vitae faucibus. Vivamus magna leo, tincidunt vel hendrerit sit amet, molestie ac nisl.",
    publicado: true,
    destacada: false,
    video: "",
  },
  {
    nombre: "John Wick 4",
    imagen: "/images/john-wick-accion.jpg",
    categoria: "Accion",
    codigo: 7,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim dui. Duis nec eros rhoncus, luctus mauris non, lobortis velit. Proin sed ligula euismod, tempor tellus at, dictum lorem. Donec dignissim nec felis at cursus. Cras eget sem vitae odio varius viverra. Vivamus scelerisque quis augue id consequat. Mauris egestas gravida eros vitae faucibus. Vivamus magna leo, tincidunt vel hendrerit sit amet, molestie ac nisl.",
    publicado: true,
    destacada: false,
    video: "",
  },
  {
    nombre: "El Ninio",
    imagen: "/images/el-nino-terror.jpg",
    categoria: "Terror",
    codigo: 8,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim dui. Duis nec eros rhoncus, luctus mauris non, lobortis velit. Proin sed ligula euismod, tempor tellus at, dictum lorem. Donec dignissim nec felis at cursus. Cras eget sem vitae odio varius viverra. Vivamus scelerisque quis augue id consequat. Mauris egestas gravida eros vitae faucibus. Vivamus magna leo, tincidunt vel hendrerit sit amet, molestie ac nisl.",
    publicado: true,
    destacada: false,
    video: "",
  },
  {
    nombre: "La huerfana",
    imagen: "/images/la-huerfana-terror.jpg",
    categoria: "Terror",
    codigo: 9,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim dui. Duis nec eros rhoncus, luctus mauris non, lobortis velit. Proin sed ligula euismod, tempor tellus at, dictum lorem. Donec dignissim nec felis at cursus. Cras eget sem vitae odio varius viverra. Vivamus scelerisque quis augue id consequat. Mauris egestas gravida eros vitae faucibus. Vivamus magna leo, tincidunt vel hendrerit sit amet, molestie ac nisl.",
    publicado: true,
    destacada: false,
    video: "",
  },
  {
    nombre: "Mama",
    imagen: "/images/mama-terror.jpg",
    categoria: "Terror",
    codigo: 10,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim dui. Duis nec eros rhoncus, luctus mauris non, lobortis velit. Proin sed ligula euismod, tempor tellus at, dictum lorem. Donec dignissim nec felis at cursus. Cras eget sem vitae odio varius viverra. Vivamus scelerisque quis augue id consequat. Mauris egestas gravida eros vitae faucibus. Vivamus magna leo, tincidunt vel hendrerit sit amet, molestie ac nisl.",
    publicado: true,
    destacada: false,
    video: "",
  },
  {
    nombre: "Huesera",
    imagen: "/images/huesera-terror.jpg",
    categoria: "Terror",
    codigo: 11,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim dui. Duis nec eros rhoncus, luctus mauris non, lobortis velit. Proin sed ligula euismod, tempor tellus at, dictum lorem. Donec dignissim nec felis at cursus. Cras eget sem vitae odio varius viverra. Vivamus scelerisque quis augue id consequat. Mauris egestas gravida eros vitae faucibus. Vivamus magna leo, tincidunt vel hendrerit sit amet, molestie ac nisl.",
    publicado: true,
    destacada: false,
    video: "",
  },
  {
    nombre: "Missy",
    imagen: "/images/missy-comedia.jpg",
    categoria: "Comedia",
    codigo: 12,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim dui. Duis nec eros rhoncus, luctus mauris non, lobortis velit. Proin sed ligula euismod, tempor tellus at, dictum lorem. Donec dignissim nec felis at cursus. Cras eget sem vitae odio varius viverra. Vivamus scelerisque quis augue id consequat. Mauris egestas gravida eros vitae faucibus. Vivamus magna leo, tincidunt vel hendrerit sit amet, molestie ac nisl.",
    publicado: true,
    destacada: false,
    video: "",
  },
  {
    nombre: "Delivery Man",
    imagen: "/images/delivery-comedia.jpg",
    categoria: "Comedia",
    codigo: 13,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim dui. Duis nec eros rhoncus, luctus mauris non, lobortis velit. Proin sed ligula euismod, tempor tellus at, dictum lorem. Donec dignissim nec felis at cursus. Cras eget sem vitae odio varius viverra. Vivamus scelerisque quis augue id consequat. Mauris egestas gravida eros vitae faucibus. Vivamus magna leo, tincidunt vel hendrerit sit amet, molestie ac nisl.",
    publicado: true,
    destacada: false,
    video: "",
  },
  {
    nombre: "dover",
    imagen: "/images/dover-comedia.jpg",
    categoria: "Comedia",
    codigo: 14,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim dui. Duis nec eros rhoncus, luctus mauris non, lobortis velit. Proin sed ligula euismod, tempor tellus at, dictum lorem. Donec dignissim nec felis at cursus. Cras eget sem vitae odio varius viverra. Vivamus scelerisque quis augue id consequat. Mauris egestas gravida eros vitae faucibus. Vivamus magna leo, tincidunt vel hendrerit sit amet, molestie ac nisl.",
    publicado: true,
    destacada: false,
    video: "",
  },
  {
    nombre: "Una comedia macabra",
    imagen: "/images/comedia-macabra-comedia.jpg",
    categoria: "Comedia",
    codigo: 15,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim dui. Duis nec eros rhoncus, luctus mauris non, lobortis velit. Proin sed ligula euismod, tempor tellus at, dictum lorem. Donec dignissim nec felis at cursus. Cras eget sem vitae odio varius viverra. Vivamus scelerisque quis augue id consequat. Mauris egestas gravida eros vitae faucibus. Vivamus magna leo, tincidunt vel hendrerit sit amet, molestie ac nisl.",
    publicado: true,
    destacada: false,
    video: "",
  },
];
