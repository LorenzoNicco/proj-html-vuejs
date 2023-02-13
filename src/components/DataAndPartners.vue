<script>
export default {
    name: "DataAndPartners",
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <section class="d-p-section">
        <div class="container">
            <div class="card"
             v-for="n in 4"
            >
                <span>DEBUG</span>

                <span>DEBUG</span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import "../styles/partials/debug.scss";

    .container {
        @include container-size;
        @include flex-around;

        .card {
            color: white;
            text-align: center;

            span:first-child {
                display: block;
                margin-bottom: 0.5rem;
            }
        }
    }
</style>