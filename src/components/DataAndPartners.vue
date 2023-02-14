<script>
export default {
    name: "DataAndPartners",
    data() {
        return {
            
        }
    },
    props: [
        "data"
    ]
}
</script>

<template>
    <div v-if="data.dataType == 'text'" class="card-text">
        <span>{{ data.numbers }}</span>

        <span>{{ data.paragraphe }}</span>
    </div>
    <div v-else-if="data.dataType == 'pic'" class="card-img">
        <img :src="data.paragraphe" alt="img">
    </div>
</template>

<style lang="scss" scoped>
    // @import "../styles/partials/debug.scss";

    .card-text {
        color: white;
        text-align: center;

        span:first-child {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 2rem;
            font-weight: bold;
        }
    }

    .card-img {
        height: 3rem;

        img {
            height: 100%;
        }
    }

</style>