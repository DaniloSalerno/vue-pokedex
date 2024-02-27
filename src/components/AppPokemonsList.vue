<script>
import { state } from '../state'

export default {
    name: 'AppPokemonsList',
    data() {
        return {
            state,

            pokemons: JSON.parse(localStorage.getItem("pokemon_names")),
        };
    },
    methods: {
        setPokemonList() {
            this.state.myPokemonList = JSON.parse(localStorage.getItem("pokemon_names"))
        }
    },
    mounted() {
        this.state.fetchData(this.state.baseUrl + 'pikachu')
        this.setPokemonList()
    }
}
</script>

<template>
    <section id="pokemon_list" class="col">

        <div id="pokemon_list_container">

            <h3 @click="getNewPokemonsList()"> My pokemons</h3>

            <div v-for="pokemon in this.state.myPokemonList" @click="this.state.fetchData(this.state.baseUrl + pokemon)"
                class="pokemon_name">
                {{ pokemon }}
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
#pokemon_list {
    padding: 3rem;
    border-left: 0.5rem solid rgb(119, 0, 0);

    #pokemon_list_container {
        background-color: white;
        padding: 1rem 0.5rem;
        height: 100%;

        .pokemon_name {
            cursor: pointer;
        }
    }
}
</style>