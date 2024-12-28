<template>

    <NavbarSection />
    <CheckSecction />
</template>

<script>
import CheckSecction from './CheckSecction.vue';
import NavbarSection from './NavbarSecction.vue';
    export default {
        name: 'SectionTastes',
        components: {
            CheckSecction,
            NavbarSection
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>