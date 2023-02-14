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
    <div class="card">
        <span>{{ data.numbers }}</span>

        <span>{{ data.paragraphe }}</span>
    </div>
</template>

<style lang="scss" scoped>
    // @import "../styles/partials/debug.scss";

    .card {
        color: white;
        text-align: center;

        span:first-child {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 2rem;
            font-weight: bold;
        }
    }

</style>