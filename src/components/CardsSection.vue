<script>
import { store } from "../store.js";

export default {
    name: "CardsSection",
    data() {
        return {
            store
        }
    },
    props: [
        "card"
    ]
}
</script>

<template>
    <div class="card">
        <div>
            <img :src="card.img" :class="card.imgWidth" alt="img">
        </div>

        <h5>{{ card.title }}</h5>

        <p>{{ card.sentence }}</p>
                </div>
</template>

<style lang="scss" scoped>
    // @import "../styles/partials/debug.scss";
    .card {
        text-align: center;
        width: calc((100% / 3) - 1rem);
        margin-top: 2rem;

        div {
            width: 100%;
            height: 6rem;

            img {
                height: auto;
                object-fit: cover;
            }

        }
        
        p {
            line-height: 1.5rem;
            margin-top: 1rem;
        }
    }

    .first-width {
        width: 4rem;
    }
</style>