<script>
import { store } from "../store.js";

import aboutUsSection from "./aboutUsSection.vue";
import DataAndPartners from "./DataAndPartners.vue";
import CardsSection from "./CardsSection.vue";
import FormSection from "./FormSection.vue";
import SliderSection from "./SliderSection.vue";
import SliderSectionVerTwo from "./SliderSectionVerTwo.vue";

export default {
    name: "AppMain",
    data() {
        return {
            store,
            carousel: store.testimonials.length,
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
                        imgWidth: "first-width",
                        cardSize: "first-card-size"
                    },
                    {
                        img: "/cinema/img/assets/image (15).svg",
                        title: "NEW TECHNOLOGIES",
                        sentence: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                        imgWidth: "first-width",
                        cardSize: "first-card-size"
                    },
                    {
                        img: "/cinema/img/assets/image (16).svg",
                        title: "VERSITILE ACTORS",
                        sentence: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                        imgWidth: "first-width",
                        cardSize: "first-card-size"
                    },
                    {
                        img: "/cinema/img/assets/image (17).svg",
                        title: "TOP DIRECTORS",
                        sentence: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                        imgWidth: "first-width",
                        cardSize: "first-card-size"
                    },
                    {
                        img: "/cinema/img/assets/image (18).svg",
                        title: "MINUTE EDITING",
                        sentence: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                        imgWidth: "first-width",
                        cardSize: "first-card-size"
                    },
                    {
                        img: "/cinema/img/assets/image (19).svg",
                        title: "VERSITILE ACTORS",
                        sentence: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                        imgWidth: "first-width",
                        cardSize: "first-card-size"
                    }
                ],
                secondSection: [
                    {
                        img: "/cinema/img/assets/Gallery-01.jpg",
                        title: "SEVENTEENTH SUMMER",
                        sentence: "Commercial, Music Video",
                        imgWidth: "second-width",
                        cardSize: "first-card-size"
                    },
                    {
                        img: "/cinema/img/assets/Gallery-02.jpg",
                        title: "A MESSAGE TO SPACE",
                        sentence: "Short Film",
                        imgWidth: "second-width",
                        cardSize: "first-card-size"
                    },
                    {
                        img: "/cinema/img/assets/Gallery-03.jpg",
                        title: "THE MOST BEAUTIFUL THING",
                        sentence: "Music Video",
                        imgWidth: "second-width",
                        cardSize: "first-card-size"
                    },
                    {
                        img: "/cinema/img/assets/Gallery-04.jpg",
                        title: "PERMISSION TO SPEAK",
                        sentence: "Documentary",
                        imgWidth: "second-width",
                        cardSize: "first-card-size"
                    },
                    {
                        img: "/cinema/img/assets/Gallery-05.jpg",
                        title: "EXPLORE OUR SPACE",
                        sentence: "Film noir",
                        imgWidth: "second-width",
                        cardSize: "first-card-size"
                    },
                    {
                        img: "/cinema/img/assets/Gallery-06.jpg",
                        title: "FILM PRODUCTION",
                        sentence: "Blaxploitation",
                        imgWidth: "second-width",
                        cardSize: "first-card-size"
                    }
                ],
                thirdSection: [
                    {
                        img: "/cinema/img/assets/Team-01.jpg",
                        title: "FABRICIO GUERRA",
                        sentence: "Main Director",
                        imgWidth: "second-width",
                        cardSize: "second-card-size"
                    },
                    {
                        img: "/cinema/img/assets/Team-02.jpg",
                        title: "UMBERTO PAGODA",
                        sentence: "Main Writer",
                        imgWidth: "second-width",
                        cardSize: "second-card-size"
                    },
                    {
                        img: "/cinema/img/assets/Team-03.jpg",
                        title: "GLORIA RICCASSO",
                        sentence: "Main Producer",
                        imgWidth: "second-width",
                        cardSize: "second-card-size"
                    },
                    {
                        img: "/cinema/img/assets/Team-04.jpg",
                        title: "LIO NAPOIN",
                        sentence: "Cameraman",
                        imgWidth: "second-width",
                        cardSize: "second-card-size"
                    },
                ],
                fourthSection: [
                    {
                        img: "/cinema/img/assets/blog07.jpg",
                        date: "November 06, 2021 By Admin",
                        title: "RECAP YOUR LATEST COMPANY EVENT",
                        sentence: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                        imgWidth: "second-width",
                        cardSize: "first-card-size"
                    },
                    {
                        img: "/cinema/img/assets/blog01.jpg",
                        date: "May 27, 2022 By Admin",
                        title: "HOW TO EDIT A FILM SCORE TO SET",
                        sentence: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                        imgWidth: "second-width",
                        cardSize: "first-card-size"
                    },
                    {
                        img: "/cinema/img/assets/blog02.jpg",
                        date: "May 07, 2022 By Admin",
                        title: "ARE YOU READY TO MAKE IT AWESOME",
                        sentence: "Design is our playground. While we create an awesome experience, we like having fun. No animals",
                        imgWidth: "second-width",
                        cardSize: "first-card-size"
                    }
                ]
            },
            dataAndPartners: {
                firstData: [
                    {
                        dataType: "text",
                        numbers: "158",
                        paragraphe: "SATISFIED CLIENTS"
                    },
                    {
                        dataType: "text",
                        numbers: "3+",
                        paragraphe: "OUR PROJECTS"
                    },
                    {
                        dataType: "text",
                        numbers: "1,906",
                        paragraphe: "CUP OF COFFEE"
                    },
                    {
                        dataType: "text",
                        numbers: 2,
                        paragraphe: "OUR AWARDS"
                    }
                ],
                secondData: [
                    {
                        dataType: "pic",
                        numbers: "",
                        paragraphe: "/cinema/img/assets/03.png"
                    },
                    {
                        dataType: "pic",
                        numbers: "",
                        paragraphe: "/cinema/img/assets/04.png"
                    },
                    {
                        dataType: "pic",
                        numbers: "",
                        paragraphe: "/cinema/img/assets/05.png"
                    },
                    {
                        dataType: "pic",
                        numbers: "",
                        paragraphe: "/cinema/img/assets/01.png"
                    },
                    {
                        dataType: "pic",
                        numbers: "",
                        paragraphe: "/cinema/img/assets/02.png"
                    }
                ]
            }
        }
    },
    components: {
        aboutUsSection,
        DataAndPartners,
        CardsSection,
        FormSection,
        SliderSection,
        SliderSectionVerTwo
    }
}
</script>

<template>
    <main>
        <!-- card section 1 ------------------------------------------------------------->
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

        <!-- about us section  ------------------------------------------------------------->
        <aboutUsSection />

        <!-- card section 2 ------------------------------------------------------------->
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

        <!-- data and partners section 1 ------------------------------------------------------------->
        <section class="d-p-section">
            <div class="container">
                <DataAndPartners 
                 v-for="data in dataAndPartners.firstData"
                 :data="data"
                />
            </div>
        </section>

        <!-- card section 3 ------------------------------------------------------------->
        <section class="card-section">
            <div class="container">
                <h6>{{ cardTitle[2].secondary }}</h6>

                <h2>{{ cardTitle[2].main }}</h2>

                <div class="card-container">
                    <CardsSection 
                     v-for="card in cardInfos.thirdSection" 
                     :card="card" 
                    />
                </div>
            </div>
        </section>

        <!-- testimonials ------------------------------------------------------------->
        <section class="testimonials-section">
            <div>
                <!-- <SliderSection :carousel="carousel"/> -->

                <SliderSectionVerTwo :carousel="carousel"/>
            </div>
        </section>

        <!-- card section 4 ------------------------------------------------------------->
        <section class="card-section">
            <div class="container">
                <h6>{{ cardTitle[3].secondary }}</h6>

                <h2>{{ cardTitle[3].main }}</h2>

                <div class="card-container">
                    <CardsSection class="text-start"
                     v-for="card in cardInfos.fourthSection" 
                     :card="card" 
                    />
                </div>
            </div>
        </section>

        <!-- data and partners section 2 ------------------------------------------------------------->
        <section class="d-p-section">
            <div class="container">
                <DataAndPartners 
                 v-for="data in dataAndPartners.secondData"
                 :data="data"
                />
            </div>
        </section>

        <!-- form section ------------------------------------------------------------->
        <FormSection />
    </main>
</template>

<style lang="scss" scoped>
// sezione cards--------------------------------------------------------
.card-section {
    background-color: white;

    .container {
        @include container-size;

        h6{
            text-align: center;
            margin-bottom: 1rem;
        }

        h2 {
            text-align: center;
        }

        .card-container {
            width: 100%;
            @include flex-card-container;
        }

        .text-start {
            text-align: start;
        }
    }
}

// sezione data and partners--------------------------------------------------------
.d-p-section {
    background-image: url("/cinema/img/assets/Parallax-01.jpg");
    background-position: center;

    .container {
        @include container-size;
        @include flex-around;
    }
}

// sezione testimonials--------------------------------------------------------
.testimonials-section {
    background-image: url("/cinema/img/assets/Parallax-02.jpg");
    background-position: top;
}
</style>