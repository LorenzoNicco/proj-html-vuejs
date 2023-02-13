<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      headerMenu: [
        "HOME",
        "BLOG",
        "PAGES",
        "ABOUT",
        "CONTACTS",
        "GALLERY",
        "SHOP"
      ],
      headerIcons: [
        {
          name: "facebook",
          img: "/cinema/img/assets/image (9).svg"
        },
        {
          name: "twitter",
          img: "/cinema/img/assets/image (10).svg"
        },
        {
          name: "youtube",
          img: "/cinema/img/assets/image (11).svg"
        },
        {
          name: "instagram",
          img: "/cinema/img/assets/image (12).svg"
        }
      ]
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>
  <AppHeader 
   :link="headerMenu"
   :icons="headerIcons"
  />

  <AppMain />

  <AppFooter />
</template>

<style lang="scss">
  @import "./styles/main.scss";
</style>