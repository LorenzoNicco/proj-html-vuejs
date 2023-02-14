<script>
import { store } from "../store.js";
import JumboSection from "./JumboSection.vue";

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    components: {
        JumboSection
    },
    props: [
        "link",
        "icons"
    ]
}
</script>

<template>
    <header>
        <div class="header-top">
            <div class="logo">
                <img src="/cinema/img/assets/logo.svg" alt="logo">
            </div>

            <nav>
                <ul class="header-menu">
                    <li v-for="index in link">{{ index }}</li>
                </ul>
            </nav>

            <nav>
                <ul class="header-icons">
                    <button class="search-btn">
                        <img class="search-icon" src="/cinema/img/assets/image (8).svg" alt="">
                    </button>

                    <li v-for="index in icons">
                        <button>
                            <img :src="index.img" alt="icon">
                        </button>    
                    </li>
                </ul>
            </nav>
        </div>

        <JumboSection />
    </header>
</template>

<style lang="scss" scoped>
    // @import "../styles/partials/debug.scss";

    header {
        .header-top {
            height: 5rem;
            width: 100%;
            @include flex-between;
            padding: 0 2rem;

            .logo {
                height: 3rem;

                img {
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        nav:first-child {
            height: 100%;
        }

        .header-menu {
            list-style: none;
            @include flex-between;
            height: 100%;

            li {
                padding: 2rem 0.5rem;
                height: 100%;
            }
        }
        
        .header-icons {
            list-style: none;
            @include flex-between;

            button {
                background-color: transparent;
                height: 1rem;
                width: 2rem;
                border: none;
                margin-left: 1rem;
                vertical-align: middle;
                
                img {
                    height: 100%;
                }

                &.search-btn {
                    border-right: 1px solid $color-gray;
                    width: 5rem;
                    height: 1.5rem;

                    img {
                        height: 100%;
                    }
                }
            }

        }
    }
</style>