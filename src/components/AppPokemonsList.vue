<script>
import { state } from '../state'

export default {
    name: 'AppPokemonsList',
    data() {
        return {
            state
        };
    },
    methods: {
        setPokemonList() {
            this.state.myPokemonList = JSON.parse(localStorage.getItem("pokemon_names")).sort()
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

        <h3> My pokemons</h3>

        <div id="pokemon_list_container">

            <div v-if="this.state.myPokemonList.length === 0">
                <h3>There are no Pokemon yet</h3>
            </div>

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
    border-left: 0;

    h3 {
        text-transform: uppercase;
        text-align: center;
    }

    #pokemon_list_container {
        background-color: white;
        padding: 1rem 0.5rem;
        height: 400px;

        overflow-y: auto;

        .pokemon_name {
            cursor: pointer;
            text-transform: capitalize;
        }
    }
}

@media screen and (min-width: 768px) {
    #pokemon_list {
        border-left: 0.5rem solid rgb(119, 0, 0);
    }
}
</style>