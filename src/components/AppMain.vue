<script>
import { store } from "../store.js";

import aboutUsSection from "./aboutUsSection.vue";
import DataAndPartners from "./DataAndPartners.vue";
import CardsSection from "./CardsSection.vue";
import FormSection from "./FormSection.vue";

export default {
    name: "AppMain",
    data() {
        return {
            store,
            cardTitle: [
                {
                    secondary: "PELICULA STUDIO",
                    main: "THIS IS WHAT WE DO"
                },
                {
                    secondary: "YOUR WATCHLIST",
                    main: "BEST HITS MOVIES"
                },
                {
                    secondary: "THE PERICUROS",
                    main: "MEET THE TEAM"
                },
                {
                    secondary: "LATEST NEWS",
                    main: "ARTICLES UPDATED DAILY"
                }
            ],
            cardInfos: {
                firstSection: [
                    {
                        img: "/cinema/img/assets/image (14).svg",
                        title: "ARRAY OF EQUIPMENT",
                        sentence: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                        imgWidth: "first-width"
                    },
                    {
                        img: "/cinema/img/assets/image (15).svg",
                        title: "NEW TECHNOLOGIES",
                        sentence: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                        imgWidth: "first-width"
                    },
                    {
                        img: "/cinema/img/assets/image (16).svg",
                        title: "VERSITILE ACTORS",
                        sentence: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                        imgWidth: "first-width"
                    },
                    {
                        img: "/cinema/img/assets/image (17).svg",
                        title: "TOP DIRECTORS",
                        sentence: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                        imgWidth: "first-width"
                    },
                    {
                        img: "/cinema/img/assets/image (18).svg",
                        title: "MINUTE EDITING",
                        sentence: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                        imgWidth: "first-width"
                    },
                    {
                        img: "/cinema/img/assets/image (19).svg",
                        title: "VERSITILE ACTORS",
                        sentence: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                        imgWidth: "first-width"
                    }
                ],
                secondSection: [
                    {
                        img: "/cinema/img/assets/Gallery-01.jpg",
                        title: "SEVENTEENTH SUMMER",
                        sentence: "Commercial, Music Video",
                        imgWidth: "second-width"
                    },
                    {
                        img: "/cinema/img/assets/Gallery-02.jpg",
                        title: "A MESSAGE TO SPACE",
                        sentence: "Short Film",
                        imgWidth: "second-width"
                    },
                    {
                        img: "/cinema/img/assets/Gallery-03.jpg",
                        title: "THE MOST BEAUTIFUL THING",
                        sentence: "Music Video",
                        imgWidth: "second-width"
                    },
                    {
                        img: "/cinema/img/assets/Gallery-04.jpg",
                        title: "PERMISSION TO SPEAK",
                        sentence: "Documentary",
                        imgWidth: "second-width"
                    },
                    {
                        img: "/cinema/img/assets/Gallery-05.jpg",
                        title: "EXPLORE OUR SPACE",
                        sentence: "Film noir",
                        imgWidth: "second-width"
                    },
                    {
                        img: "/cinema/img/assets/Gallery-06.jpg",
                        title: "FILM PRODUCTION",
                        sentence: "Blaxploitation",
                        imgWidth: "second-width"
                    }
                ]
            }
        }
    },
    components: {
        aboutUsSection,
        DataAndPartners,
        CardsSection,
        FormSection
    }
}
</script>

<template>
    <main>
        <section class="card-section">
            <div class="container">
                <h6>{{ cardTitle[0].secondary }}</h6>

                <h2>{{ cardTitle[0].main }}</h2>

                <div class="card-container">
                    <CardsSection 
                     v-for="card in cardInfos.firstSection" 
                     :card="card" 
                    />
                </div>
            </div>
        </section>

        <aboutUsSection />

        <section class="card-section">
            <div class="container">
                <h6>{{ cardTitle[1].secondary }}</h6>

                <h2>{{ cardTitle[1].main }}</h2>

                <div class="card-container">
                    <CardsSection 
                     v-for="card in cardInfos.secondSection" 
                     :card="card" 
                    />
                </div>
            </div>
        </section>
        <!-- <DataAndPartners />
        <CardsSection /> -->

        <section class="testimonials-section">
            <div>
                <div>DEBUG</div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nobis odio repudiandae ad aut
                    inventore eligendi at explicabo dolorem illo?</p>

                <div>
                    IMG PLACEHOLDER
                </div>

                <div>DEBUG</div>
            </div>
        </section>

        <!-- <CardsSection />
        <DataAndPartners />
        <FormSection /> -->
    </main>
</template>

<style lang="scss" scoped>
.card-section {
    background-color: white;

    .container {
        @include container-size;

        h6,
        h2 {
            text-align: center;
            margin-bottom: 1rem;
        }

        .card-container {
            width: 100%;
            @include flex-card-container;
        }
    }
}

.end {
    padding-left: 50%;
}

.testimonials-section {
    padding: 4rem 0;

    div {
        width: 50%;
        margin: 0 auto;
        text-align: center;

        >*:not(:last-child) {
            margin-bottom: 1rem;
        }
    }
}
</style>