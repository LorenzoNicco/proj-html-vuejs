<script>

export default {
    name: "CardsSection",
    data() {
        return {
        }
    },
    props: [
        "card"
    ]
}
</script>

<template>
    <div class="card" :class="card.cardSize">
        <div>
            <img :src="card.img" :class="card.imgWidth" alt="img">
        </div>

        <h6>{{ card.date }}</h6>

        <h5>{{ card.title }}</h5>

        <p>{{ card.sentence }}</p>
    </div>
</template>

<style lang="scss" scoped>
    // @import "../styles/partials/debug.scss";
    .card {
        text-align: center;
        margin-top: 2rem;

        div {
            width: 100%;
            min-height: 6rem;
            margin-bottom: 1rem;
            @include flex-center;

            img {
                object-fit: cover;
            }

        }

        h6 {
            margin-bottom: 1rem;
            color: gray;
        }
        
        p {
            line-height: $line-height-media;
            margin-top: 1rem;
        }
    }

    .first-card-size {
       width: calc((100% / 3) - 1rem);
    }

    .second-card-size {
       width: calc((100% / 4) - 1rem);
    }

    .first-width {
        width: 4rem;
    }

    .second-width {
        width: 100%;
        height: auto;
    }
</style>