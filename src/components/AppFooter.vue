<script>
export default {
    name: "AppFooter",
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <footer>
        <section>
            <div>
                <h4>DEBUG</h4>

                <ul>
                    <li>DEBUG</li>
                    <li>DEBUG</li>
                    <li>DEBUG</li>
                </ul>
            </div>

            <div>
                <h4>DEBUG</h4>

                <ul>
                    <li>DEBUG</li>
                    <li>DEBUG</li>
                    <li>DEBUG</li>
                    <li>DEBUG</li>
                    <li>DEBUG</li>
                </ul>
            </div>

            <div>
                <h4>DEBUG</h4>

                <ul>
                    <li>DEBUG</li>
                    <li>DEBUG</li>
                    <li>DEBUG</li>
                    <li>DEBUG</li>
                    <li>DEBUG</li>
                </ul>
            </div>

            <div>
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
    @import "../styles/partials/debug.scss";

    section {
        @include container-size;
        @include flex-between;
        border-bottom: 1px solid lightgray;

        div {
            width: 25%;
            align-self: stretch;

            h4 {
                margin-bottom: 1rem;
            }

            ul {
                list-style: none;
                line-height: 1.5rem;
            }

            input {
                margin: 0.5rem 0;
            }
        }
    }

    .copyright {
        margin: 0 auto;
        padding: 1rem 0;
        width: fit-content;
        text-align: center;
        color: white;
    }
</style>