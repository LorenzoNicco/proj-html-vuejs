<script>
import { store } from "../store.js";

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    components: {
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

        <section class="jumbo-section">
            <div class="container">
                <div class="col">
                    <h5>CINEMA STUDIO</h5>

                    <h1>ACTION AND INSPIRE PEOPLE</h1>

                    <button>READ MORE</button>
                </div>
            </div>

            <div class="left arrow">
                <img src="/cinema/img/assets/left-arrow.svg" alt="img">
            </div>

            <div class="right arrow">
                <img src="/cinema/img/assets/right-arrow.svg" alt="img">
            </div>
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
            }

            .arrow-yes {
                display: inline-block;
                margin-left: 0.5rem;
                font-size: 0.5rem;
            }

            .arrow-no {
                display: none;
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
            width: 100%;
            background-image: url("/cinema/img/assets/Parallax-03.jpg");
            background-position: center;
            position: relative;

            .container {
                width: 1000px;
                margin: 0 auto;
                padding: 10rem 0;

                .col {
                    width: 50%;
                    color: white;

                    h1 {
                        margin: 1rem 0 2rem;
                        font-size: 3rem;
                    }

                    button {
                        @include white-btn;
                    }
                }
            }

            // ARROWS ---------------------------------------------------------
            .arrow {
                height: 2rem;
                width: 2rem;
                padding: 0.5rem;
                background-color: rgba(0, 0, 0, 0.5);
                position: absolute;
                z-index: 20;

                img {
                    height: 1rem;
                    filter: invert(1);
                }
            }

            .left {
                top: 50%;
                left: 1%;
            }

            .right {
                top: 50%;
                right: 1%;
            }
        }
    }
</style>