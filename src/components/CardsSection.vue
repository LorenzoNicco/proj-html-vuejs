<script>
export default {
    name: "CardsSection",
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <section class="card-section">
        <div class="container">
            <h6>DEBUG</h6>

            <h2>DEBUG</h2>

            <div class="card-container">
                <div class="card"
                 v-for="n in 6"
                >
                    <div>DEBUG IMG</div>

                    <h5>DEBUG</h5>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, omnis.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import "../styles/partials/debug.scss";

    .card-section {
        background-color: white;

        .container {
            @include container-size;

            h6, h2 {
                text-align: center;
                margin-bottom: 1rem;
            }

            .card-container {
                width: 100%;
                @include flex-card-container;

                .card {
                    text-align: center;
                    width: calc((100% / 3) - 0.7rem);
                }
            }
        }
    }
</style>