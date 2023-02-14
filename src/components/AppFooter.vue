<script>
export default {
    name: "AppFooter",
    data() {
        return {
            
        }
    },
    props: [
        "menu"
    ]
}
</script>

<template>
    <footer>
        <section>
            <div class="first-menu">
                <h4>{{ menu[0].title }}</h4>

                <ul>
                    <li
                     v-for="index in menu[0].info"
                    >
                        <img :src="index.icon" alt="icon">

                        <p>{{ index.text }}</p>
                    </li>
                </ul>
            </div>

            <div class="second-menu">
                <h4>{{ menu[1].title }}</h4>

                <ul>
                    <li 
                     v-for="index in menu[1].info"
                    >
                        {{ index }}
                    </li>
                </ul>
            </div>

            <div class="third-menu">
                <h4>{{ menu[2].title }}</h4>

                <ul>
                    <li 
                     v-for="index in menu[2].info"
                    >
                        {{ index }}
                    </li>
                </ul>
            </div>

            <div class="fourth-menu">
                <h4>DEBUG</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem et debitis illo tenetur veritatis autem?</p>

                <input type="email" placeholder="Enter Your Email">

                <button>SUBSCIRBE</button>
            </div>
        </section>

        <p class="copyright">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iusto, ea corrupti debitis harum quaerat?</p>
    </footer>
</template>

<style lang="scss" scoped>
    // @import "../styles/partials/debug.scss";

    footer {
        background-color: $color-black;

        section {
            @include container-size;
            @include flex-between;
            border-bottom: 1px solid lightgray;
            color: #f2f2f2;

            div {
                width: 25%;
                align-self: stretch;

                h4 {
                    margin-bottom: 1rem;
                    color: #ffffff;
                }

                ul {
                    list-style: none;
                    line-height: 1.5rem;

                    li {
                        margin-top: 1rem;
                    }
                }

                input {
                    margin: 0.5rem 0;
                }
            }

            .first-menu {

                li {
                    line-height: 1.5rem;
                    @include flex-start;

                    &:first-child {
                        align-items: start;

                        img {
                            margin-top: 0.2rem;
                        }
                    }

                    img {
                        height: 1rem;
                        margin-right: 1rem;
                    }
                }

            }
        }

        .copyright {
            margin: 0 auto;
            padding: 1rem 0;
            width: fit-content;
            text-align: center;
            color: #f2f2f2;
        }
    }

</style>