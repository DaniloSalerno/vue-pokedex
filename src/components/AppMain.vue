<script>
import AppSearch from './AppSearch.vue';
import AppSinglePokemon from './AppSinglePokemon.vue';

export default {
    name: 'AppMain',
    data() {
        return {};
    },
    methods: {},
    components: { AppSearch, AppSinglePokemon }
}
</script>

<template>
    <main>
        <AppSearch />
        <AppSinglePokemon />
    </main>
</template>

<style lang="scss" scoped></style>