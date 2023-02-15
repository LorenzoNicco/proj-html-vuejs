<script>
import { store } from "../store.js";

import SliderSection from "./SliderSection.vue";

export default {
    name: "AppHeader",
    data() {
        return {
            store,
            carousel: store.jumbo.length
        }
    },
    components: {
        SliderSection
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
                    <li v-for="index in link">
                        <span>{{ index.index }}</span>
                        
                        <font-awesome-icon icon="fa-solid fa-chevron-down" :class="index.arrow" />

                        <ul class="dropdown-menu" v-if="index.dropdownDisplay == 'dropdown-menu-yes'">
                            <li v-for="item in index.dropdownItems">
                                <a href="#">{{ item }}</a>
                            </li>
                        </ul>
                    </li>
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

        <!-- JUMBO SECTION ----------------------------------------------------------->
        <section class="jumbo-section">
            <SliderSection :carousel="carousel"/>
        </section>
    </header>
</template>

<style lang="scss" scoped>
    // @import "../styles/partials/debug.scss";

    header {
        // HEADER TOP ---------------------------------------------------------
        .header-top {
            height: 5rem;
            width: 100%;
            @include flex-between;
            padding: 0 2rem;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 30;
            background-color: white;

            .logo {
                height: 2rem;

                img {
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        // PRIMO NAV ---------------------------------------------------------
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
                cursor: pointer;
                position: relative;

                &:hover .dropdown-menu {
                    display: block;
                }
            }

            .arrow-yes {
                display: inline-block;
                margin-left: 0.5rem;
                font-size: 0.5rem;
            }

            .arrow-no {
                display: none;
            }

            .dropdown-menu {
                position: absolute;
                left: 0;
                top: 100%;
                z-index: 50;
                list-style: none;
                display: none;
                background-color: black;
                width: 16rem;

                > li {
                    display: block;
                    padding: 1rem;

                    &:hover {
                        background-color: rgb(34, 34, 34);
                    }

                    &:not(:last-child) {
                        border-bottom: 1px solid $color-gray;
                    }

                    a {
                        text-decoration: none;
                        color: white;
                    }
                }
            }
        }
        
        // SECONDO NAV ---------------------------------------------------------
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
                cursor: pointer;
                
                img {
                    height: 100%;
                }

                &.search-btn {
                    border-right: 1px solid $color-gray;
                    width: 5rem;
                    height: 1.5rem;
                }
            }

        }

        // JUMBO SECTION ---------------------------------------------------------
        .jumbo-section {
            margin-top: 5rem;
            width: 100%;
            background-image: url("/cinema/img/assets/Parallax-03.jpg");
            background-position: center;
            filter: brightness(1.5);
        }
    }
</style>