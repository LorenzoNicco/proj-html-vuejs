<script>
import JumboSection from "./JumboSection.vue";
import DataAndPartners from "./DataAndPartners.vue";
import CardsSection from "./CardsSection.vue";

export default {
    name: "AppMain",
    data() {
        return {
            
        }
    },
    components: {
        JumboSection,
        DataAndPartners,
        CardsSection
    }
}
</script>

<template>
    <CardsSection />
    <JumboSection />
    <CardsSection />
    <!-- <DataAndPartners />
    <CardsSection />
    <JumboSection />
    <CardsSection />
    <DataAndPartners /> -->
</template>

<style lang="scss" scoped>

</style>