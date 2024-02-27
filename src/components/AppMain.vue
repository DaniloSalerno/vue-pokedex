<script>
import AppSearch from './AppSearch.vue';
import AppSinglePokemon from './AppSinglePokemon.vue';
import AppPokemonsList from './AppPokemonsList.vue';

export default {
    name: 'AppMain',
    components: { AppSearch, AppSinglePokemon, AppPokemonsList }
}
</script>

<template>
    <main>

        <div id="pokedex" class="container">

            <div class="row row-cols-1 row-cols-md-2">

                <div id="pokemon_search" class="col">
                    <AppSearch />
                    <AppSinglePokemon />
                </div>

                <AppPokemonsList />

            </div>

        </div>

    </main>
</template>

<style lang="scss" scoped>
#pokedex {
    background-color: red;
    border: 1rem solid rgb(119, 0, 0);
    border-radius: 1rem;

    #pokemon_search {
        border-right: 0.5rem solid rgb(119, 0, 0);
    }

}
</style>