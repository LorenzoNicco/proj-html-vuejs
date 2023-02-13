<script>
export default {
    name: "JumboSection",
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="col">
                <h5>DEBUG</h5>

                <h1>DEBUG</h1>

                <button>READ MORE</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import "../styles/partials/debug.scss";

    .container {
        @include container-size;

        .col {
            width: 50%;

            h5 {
                margin-bottom: 1rem;
            }

            h1 {
                margin-bottom: 2rem;
            }
        }
    }
</style>