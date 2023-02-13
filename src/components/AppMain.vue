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
    <CardsSection />
    <JumboSection />
    <CardsSection />
    <DataAndPartners />
    <CardsSection />
    <JumboSection />
    <CardsSection />
    <DataAndPartners />
    <FormSection />
</template>

<style lang="scss" scoped>

</style>