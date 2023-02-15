<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      headerMenu: [
        {
          index: "HOME",
          arrow: "arrow-no",
          dropdownDisplay: "dropdown-menu-no"
        },
        {
          index: "BLOG",
          arrow: "arrow-no",
          dropdownDisplay: "dropdown-menu-no"
        },
        {
          index: "PAGES",
          arrow: "arrow-yes",
          dropdownDisplay: "dropdown-menu-yes",
          dropdownItems: ["SERVICES", "OUR WORK FLOW", "VIDEO THUMBNAIL TYPE"]
        },
        {
          index: "ABOUT",
          arrow: "arrow-no",
          dropdownDisplay: "dropdown-menu-no"
        },
        {
          index: "CONTACTS",
          arrow: "arrow-no",
          dropdownDisplay: "dropdown-menu-no"
        },
        {
          index: "GALLERY",
          arrow: "arrow-no",
          dropdownDisplay: "dropdown-menu-no"
        },
        {
          index: "SHOP",
          arrow: "arrow-yes",
          dropdownDisplay: "dropdown-menu-yes",
          dropdownItems: ["OUR STORE", "DISCOUNT", "SPECIAL OFFER"]
        },
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
      ],
      footerMenu: [
        {
          title: "CONTACT INFO",
          info:[
            {
            icon: "/cinema/img/assets/footer-location-dot-solid.svg",
            text: "2/45 Tower Street, New York USA"
            },
            {
              icon: "/cinema/img/assets/footer-phone-solid.svg",
              text: "Call Us On 0800 840 1010"
            },
            {
              icon: "/cinema/img/assets/footer-envelope-soli.svg",
              text: "Demo@Example.Com"
            }
          ]
        },
        {
          title: "INFORMATION",
          info: [
            "Product Support",
            "Checkout",
            "Report Abuse",
            "Redeem Voucher",
            "Order Status"
          ]
        },
        {
          title: "USEFUL LINKS",
          info: [
            "Policies & Rules",
            "Privacy Policy",
            "License Policy",
            "My Account",
            "Locally"
          ]
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

  <AppFooter 
   :menu="footerMenu"
  />
</template>

<style lang="scss">
  @import "./styles/main.scss";
</style>