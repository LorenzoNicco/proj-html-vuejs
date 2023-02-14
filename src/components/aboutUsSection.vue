<script>
export default {
    name: "aboutUsSection",
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <section class="about-us-section">
        <div class="container">
            <div class="col">
                <h6>ABOUT US</h6>

                <h2>HIGH QUALITY CINEMATICS</h2>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime doloribus labore explicabo, eius minus, numquam voluptatibus iure doloremque ex pariatur sed minima! Architecto corrupti numquam non quae quibusdam itaque totam officiis quisquam. Itaque, voluptate quaerat necessitatibus illum ullam optio corrupti!</p>

                <button>READ MORE</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    // @import "../styles/partials/debug.scss";
    
    .about-us-section {
        background-image: url("/cinema/img/assets/About-Us.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        .container {
            @include container-size;
            color: white;
    
            .col {
                width: 50%;
                transform: translateX(100%);
    
                h6 {
                    margin-bottom: 1rem;
                }
    
                p {
                    line-height: $line-height-media;
                    margin: 2rem 0;
                }

                button {
                    @include white-btn;
                }
            }
        }
    }

</style>