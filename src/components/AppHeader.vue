<script>
import JumboSection from "./JumboSection.vue";

export default {
    name: "AppHeader",
    data() {
        return {
            
        }
    },
    components: {
        JumboSection
    }
}
</script>

<template>
    <header>
        <div class="header-top">
            <div class="logo">
                <img src="../assets/cinema/img/assets/logo.svg" alt="">
            </div>

            <nav>
                <ul class="header-menu">
                    <li v-for="n in 7">DEBUG</li>
                </ul>
            </nav>

            <nav>
                <ul class="header-icons">
                    <li v-for="n in 5">DEBUG</li>
                </ul>
            </nav>
        </div>

        <JumboSection />
    </header>
</template>

<style lang="scss" scoped>
    @import "../styles/partials/debug.scss";

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

            li {
                padding: 0.5rem;
            }
        }
    }
</style>