import { createStore } from "vuex";

export const store = createStore({
    state: {
        occasions: [{
            id: "01",
            name: "Birthday ",
            img: require("../assets/Birthday.jpg"),
            link: "https://evnayd.github.io/portfolio",
          },
          {
            id: "02",
            name: "Anniversary",
            img: require("../assets/Anniversary.jpg"),
            link: "https://evnayd.github.io/Recipesapp/",
          },
          {
            id: "03",
            name: "Valentine's day",
            img: require("../assets/Valentines.jpg"),
            link: "https://evnayd.github.io/Recipesapp/",
          },
          {
            id: "04",
            name: "Christmas",
            img: require("../assets/Christmas.jpg"),
            link: "https://evnayd.github.io/Recipesapp/",
          },
        ],
        socials: [{
            id: "01",
            name: "facebook",
            img: require("../assets/facebook.svg"),
            link: "#",
            alt: 'facebook icon'
          },
          {
            id: "02",
            name: "twitter",
            img: require("../assets/twitter.svg"),
            link: "#",
            alt: 'twitter icon'
          },
          {
            id: "03",
            name: "instagram",
            img: require("../assets/instagram.svg"),
            link: "#",
            alt: 'instagram icon'
          },
          {
            id: "04",
            name: "youtube",
            img: require("../assets/youtube.svg"),
            link: "#",
            alt: 'youtube icon'
          },
          {
            id: "05",
            name: "pinterest",
            img: require("../assets/pinterest.svg"),
            link: "#",
            alt: 'pinterest icon'
          },
        ]
    },
    mutations:
{},
actions: {

},
});


/*const store = createStore({
    state: {
    },
    mutations:
{},
actions: {

},
});*/


//export default store;




