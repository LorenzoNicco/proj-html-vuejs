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
        <JumboSection />
        <CardsSection />
        <DataAndPartners />
        <CardsSection />
        <JumboSection />
        <CardsSection />
        <DataAndPartners />
        <FormSection />
    </main>
</template>

<style lang="scss" scoped>

</style>