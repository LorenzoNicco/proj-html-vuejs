<script>
import { store } from "../store.js";

export default {
    name: "SliderSection",
    data () {
        return {
            store,
            slideIndex: 0,
            autoplay: null
        }
    },
    props: [
        "carousel"
    ],
    methods: {
        nextSlide () {
            if (this.slideIndex < this.carousel - 1) {
                this.slideIndex++;
            }
            else if (this.slideIndex == this.carousel - 1) {
                this.slideIndex = 0;
            }
        },
        prevSlide () {
            if (this.slideIndex > 0) {
                this.slideIndex--;
            }
            else if (this.slideIndex == 0) {
                this.slideIndex = this.carousel - 1;
            }
        },
    },
    mounted () {
        this.autoplay = setInterval(this.nextSlide, 3000);
    }
    
}
</script>

<template>
    <!-- SEZIONE TESTIMONIALS ------------------------------------------------------------------------------------->
    <div class="slide testimonials">
        <div class="comma-img">
            <img src="/cinema/img/assets/image (20).svg" alt="img">
        </div>

        <p>{{ store.testimonials[slideIndex].text }}</p>

        <div class="profile-container">
            <img :src="store.testimonials[slideIndex].pic" alt="img">

            <div>
                <h4>{{ store.testimonials[slideIndex].name }}</h4>

                <span>{{ store.testimonials[slideIndex].job }}</span>
            </div>
        </div>

        <div class="slide-dots">
            <div class="dot" @click="slideIndex = 0" :class="{'active' : slideIndex == 0}"></div>
            <div class="dot" @click="slideIndex = 1" :class="{'active' : slideIndex == 1}"></div>
            <div class="dot" @click="slideIndex = 2" :class="{'active' : slideIndex == 2}"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    // sezione testimonials-------------------------------------------------------------------------------------
    .testimonials {
        width: 50%;
        margin: 0 auto;
        text-align: center;
        @include container-small-size;
        color: white;
        
        .comma-img {
            height: 3rem;
    
            img {
                filter: invert(1);
                height: 100%;
            }
        }
    
        p {
            line-height: $line-height-media;
            margin: 2rem 0 1rem;
            height: 72px;
        }
    
        .profile-container {
            @include flex-center;
    
            img {
                margin-right: 0.5rem;
                height: 4rem;
                width: 4rem;
                border-radius: 50%;
            }
    
            > div {
                text-align: start;
                line-height: 1.2rem;
            }
        }

        .slide-dots {
            @include flex-between;
            width: 4rem;
            margin: 2rem auto 0;

            .dot {
                height: 0.5rem;
                width: 0.5rem;
                border-radius: 50%;
                background-color: rgb(126, 126, 126);
                
                &.active {
                    background-color: white;
                }
            }
        }

    }

</style>