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
                <h4>NEWSLETTER</h4>

                <p>Subscribe To Receive Inspiration, Ideas & News In Your Inbox.</p>

                <input type="email" placeholder="Enter Your Email">

                <button>SUBSCRIBE</button>
            </div>
        </section>

        <p class="copyright"><font-awesome-icon icon="fa-regular fa-copyright" class="icon" /> 2023 All Rights Reserved. Developed By TemplateMela</p>
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
                    margin: 1rem 0;
                    background-color: #1c1c1c;
                    border: none;
                    display: block;
                    padding: 1rem;
                }

                button {
                    padding: 1rem 2rem;
                    cursor: pointer;
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

            .second-menu  li:hover,
            .third-menu  li:hover {
                filter: brightness(2);
                cursor: pointer;
            }

            .fourth-menu p {
                line-height: $line-height-media;
                margin-top: 2rem;
            }
        }

        .copyright {
            margin: 0 auto;
            padding: 1rem 0;
            width: fit-content;
            text-align: center;
            color: #f2f2f2;

            .icon {
                font-size: 0.8rem;
            }
        }
    }

</style>