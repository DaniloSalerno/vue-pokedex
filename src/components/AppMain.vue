<script>
import AppSearch from './AppSearch.vue';
import AppSinglePokemon from './AppSinglePokemon.vue';
import { state } from '../state'

export default {
    name: 'AppMain',
    data() {
        return {
            state
        };
    },
    methods: {},
    components: { AppSearch, AppSinglePokemon }
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

                <section id="pokemon_list" class="col">
                    <div id="pokemon_list_container">
                        <h3> My pokemons</h3>

                        <div v-for="pokemon in this.state.myPokemonList">
                            {{ pokemon.name }}
                        </div>
                    </div>
                </section>
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

    #pokemon_list {
        padding: 3rem;
        border-left: 0.5rem solid rgb(119, 0, 0);

        #pokemon_list_container {
            background-color: white;
            padding: 1rem 0.5rem;
            height: 100%;
        }
    }
}
</style>