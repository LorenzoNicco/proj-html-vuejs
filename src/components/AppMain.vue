<script>
import JumboSection from "./JumboSection.vue";
import DataAndPartners from "./DataAndPartners.vue";
import CardsSection from "./CardsSection.vue";
import FormSection from "./FormSection.vue";

export default {
    name: "AppMain",
    data() {
        return {
        }
    },
    components: {
        JumboSection,
        DataAndPartners,
        CardsSection,
        FormSection
    }
}
</script>

<template>
    <main>
        <CardsSection />
        <JumboSection class="end"/>
        <CardsSection />
        <DataAndPartners />
        <CardsSection />

        <section class="testimonials-section">
            <div>
                <div>DEBUG</div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nobis odio repudiandae ad aut inventore eligendi at explicabo dolorem illo?</p>

                <div>
                    IMG PLACEHOLDER
                </div>

                <div>DEBUG</div>
            </div>
        </section>

        <CardsSection />
        <DataAndPartners />
        <FormSection />
    </main>
</template>

<style lang="scss" scoped>
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