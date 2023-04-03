//=CHANGE LANGUAGE==============================================================================================================================================

/*-Add--class--".activeLang"----------------------------------------------------------------------------------------*/

$(".header-top-lang__item").click(function (e) {
  $(".header-top-lang__item").removeClass("activeLang");
  $(this).addClass("activeLang");
  localStorage.lang = this.getAttribute("key");
});

$(window).load(function () {
  var key = localStorage.lang || "en";
  $('button[key="' + key + '"]').addClass("activeLang");
});

/*-Translation--into--languages------------------------------------------------------------------------------------*/

const langArr = {
  /****************************************--ENGLISH--*****************************************************/

  en: {
    /*--------------------------------------block--header------------------------------------------------*/
    ordering: "online ordering",
    about: "about",
    menus: "menus",
    service: "service info",
    gallery: "gallery",
    friends: "friends",
    contacts: "contacts",
    /*--------------------------------------section--private----------------------------------------------*/
    private__title: "Private Catering",
    private__text:
      "Treat your guests to a beautifully plated dinner, hand-crafted canapes, seafood or sushi.",
    private__btn: "Get a quote",
    private__link: "View menus",
    /*--------------------------------------section--products--------------------------------------------*/
    products__title_1: "Corporate catering",
    products__text_1:
      "We are able to serve events from 2 to 2000 guests and always reasonable prices.",
    products__btn_1: "Get a quote",
    products__link_1: "View menus",
    /***/
    products__title_2: "Private catering",
    products__text_2:
      "Fresh, seasonal and simple cuisine. Food is our business and our passion.",
    products__btn_2: "Get a quote",
    products__link_2: "View menus",
    /***/
    products__title_3: "Wedding catering",
    products__text_3:
      "We use only the best organic ingredients and gluten and dairy free cooking.",
    products__btn_3: "Get a quote",
    products__link_3: "View menus",
    /***/
    products__title_4: "Online Ordering",
    products__text_4:
      "Successful catering is about organisation, high quality service, and great food.",
    products__btn_4: "Get a quote",
    products__link_4: "View menus",
    /*--------------------------------------section--why--------------------------------------------------*/
    why_top__title: "Why choose us?",
    /***/
    why_body__title_1: "Always fresh",
    why_body__text_1:
      "Fresh, seasonal and simple cuisine. Food is our business and our passion.",
    /***/
    why_body__title_2: "Reliable and flawless",
    why_body__text_2:
      "Successful catering is about organisation, high quality service, and great food.",
    /***/
    why_body__title_3: "Clean and Healthy",
    why_body__text_3:
      "We use only the best organic ingredients and gluten and dairy free cooking.",
    /***/
    why_body__title_4: "Fits any size and budget",
    why_body__text_4:
      "We are able to serve events from 2 to 2000 guests and always at reasonable prices.",
    /*--------------------------------------section--contacts--------------------------------------------*/
    contacts_top__title: "Say hello",
    contacts_content_form__title: "Get in touch",
    contacts_content_form_btn: "Send message",
  },

  /****************************************--FRENCH--*****************************************************/

  fra: {
    /*--------------------------------------block--header------------------------------------------------*/
    ordering: "commande en ligne",
    about: "à propos",
    menus: "menus",
    service: "les services",
    gallery: "galerie",
    friends: "amis",
    contacts: "contacts",
    /*--------------------------------------section--private----------------------------------------------*/
    private__title: "Restauration Privée",
    private__text:
      "Offrez à vos invités un dîner magnifiquement préparé, des canapés artisanaux, des fruits de mer ou des sushis.",
    private__btn: "Citation",
    private__link: "Le menu",
    /*--------------------------------------section--products--------------------------------------------*/
    products__title_1: "Restauration d'entreprise",
    products__text_1:
      "Nous sommes en mesure de servir des événements de 2 à 2000 invités et des prix toujours raisonnables.",
    products__btn_1: "Citation",
    products__link_1: "Le menu",
    /***/
    products__title_2: "Restauration privée",
    products__text_2:
      "Cuisine fraîche, de saison et simple. La gastronomie est notre métier et notre passion.",
    products__btn_2: "Citation",
    products__link_2: "Le menu",
    /***/
    products__title_3: "Restauration de mariage",
    products__text_3:
      "Nous n'utilisons que les meilleurs ingrédients biologiques et une cuisine sans gluten et sans produits laitiers.",
    products__btn_3: "Citation",
    products__link_3: "Le menu",
    /***/
    products__title_4: "Commande en ligne",
    products__text_4:
      "Une restauration réussie est une question d'organisation, de service de haute qualité et de bonne nourriture.",
    products__btn_4: "Citation",
    products__link_4: "Le menu",
    /*--------------------------------------section--why--------------------------------------------------*/
    why_top__title: "Pourquoi nous choisir?",
    /***/
    why_body__title_1: "Toujours frais",
    why_body__text_1:
      "Cuisine fraîche, de saison et simple. La gastronomie est notre métier et notre passion.",
    /***/
    why_body__title_2: "Fiable et impeccable",
    why_body__text_2:
      "Une restauration réussie est une question d'organisation, de service de haute qualité et de bonne nourriture.",
    /***/
    why_body__title_3: "Propre et sain",
    why_body__text_3:
      "Nous n'utilisons que les meilleurs ingrédients biologiques et une cuisine sans gluten et sans produits laitiers.",
    /***/
    why_body__title_4: "Pour toute taille et budget",
    why_body__text_4:
      "Nous sommes en mesure de servir des événements de 2 à 2000 invités et toujours à des prix raisonnables.",
    /*--------------------------------------section--contacts--------------------------------------------*/
    contacts_top__title: "Dis bonjour",
    contacts_content_form__title: "Entrer en contact",
    contacts_content_form_btn: "Envoyer",
  },

  /****************************************--SPANISH--*****************************************************/

  esp: {
    /*--------------------------------------block--header------------------------------------------------*/
    ordering: "pedidos en línea",
    about: "acerca de",
    menus: "menús",
    service: "de servicio",
    gallery: "galería",
    friends: "amigos",
    contacts: "contactos",
    /*--------------------------------------section--private----------------------------------------------*/
    private__title: "Catering Privado",
    private__text:
      "Deleite a sus invitados con una cena bellamente servida, canapés hechos a mano, mariscos o sushi.",
    private__btn: "Cita",
    private__link: "Ver menús",
    /*--------------------------------------section--products--------------------------------------------*/
    products__title_1: "Restauración corporativa",
    products__text_1:
      "Podemos atender eventos de 2 a 2000 invitados y siempre a precios razonables.",
    products__btn_1: "Cita",
    products__link_1: "Ver menús",
    /***/
    products__title_2: "Restauración privada",
    products__text_2:
      "Cocina fresca, de temporada y sencilla. La comida es nuestro negocio y nuestra pasión.",
    products__btn_2: "Cita",
    products__link_2: "Ver menús",
    /***/
    products__title_3: "Catering de bodas",
    products__text_3:
      "Utilizamos solo los mejores ingredientes orgánicos y cocinamos sin gluten ni lácteos.",
    products__btn_3: "Cita",
    products__link_3: "Ver menús",
    /***/
    products__title_4: "Pedidos en línea",
    products__text_4:
      "El catering exitoso se trata de organización, servicio de alta calidad y buena comida.",
    products__btn_4: "Cita",
    products__link_4: "Ver menús",
    /*--------------------------------------section--why--------------------------------------------------*/
    why_top__title: "¿Por qué elegirnos?",
    /***/
    why_body__title_1: "Siempre fresco",
    why_body__text_1:
      "Cocina fresca, de temporada y sencilla. La comida es nuestro negocio y nuestra pasión.",
    /***/
    why_body__title_2: "Confiable e impecable",
    why_body__text_2:
      "El catering exitoso se trata de organización, servicio de alta calidad y buena comida.",
    /***/
    why_body__title_3: "Limpio y saludable",
    why_body__text_3:
      "Utilizamos solo los mejores ingredientes orgánicos y cocinamos sin gluten ni lácteos.",
    /***/
    why_body__title_4: "Se adapta a cualquier tamaño y presupuesto.",
    why_body__text_4:
      "Estamos en capacidad de atender eventos de 2 a 2000 invitados y siempre a precios razonables.",
    /*--------------------------------------section--contacts--------------------------------------------*/
    contacts_top__title: "Di hola",
    contacts_content_form__title: "Ponerse en contacto",
    contacts_content_form_btn: "Enviar mensaje",
  },
};

/*-Change--language--function---------------------------------------------------------------------------------------*/

const langEn = document.querySelector("#lang-en");
const langFra = document.querySelector("#lang-fra");
const langEsp = document.querySelector("#lang-esp");

langEn.addEventListener("click", setLang.bind(null, "en"));
langFra.addEventListener("click", setLang.bind(null, "fra"));
langEsp.addEventListener("click", setLang.bind(null, "esp"));

function setLang(lang) {
  if (!langArr.hasOwnProperty(lang)) return;
  if (window.hasOwnProperty("localStorage"))
    window.localStorage.setItem("lang", lang);
  for (let key in langArr[lang]) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = langArr[lang][key];
    }
  }
}
var lang =
  (window.hasOwnProperty("localStorage") &&
    window.localStorage.getItem("lang", lang)) ||
  "en";
setLang(lang);
