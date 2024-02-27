<script>
import { state } from '../state'
export default {
    name: 'AppSearch',
    data() {
        return {
            state,

            pokemon: '',
        }
    },
    methods: {

        addOrRemovePokemon() {

            // recupero l'array dal localStorage o creo un array vuoto se non esiste
            const pokemonNamesFromLocalStorage = JSON.parse(localStorage.getItem('pokemon_names')) || [];

            // se il nome del pokemon cercato è incluso nella lista dei miei pokemon
            if (this.state.myPokemonList.includes(this.state.pokemon.name)) {

                //elimino il nome del pokemon dalla lista dei miei pokemon
                this.state.myPokemonList.splice(this.state.myPokemonList.indexOf(this.state.pokemon.name), 1)

                // elimino il pokemon dall'array di pokemon da inserire nel local storage
                pokemonNamesFromLocalStorage.splice(pokemonNamesFromLocalStorage.indexOf(this.state.pokemon.name), 1)

                // aggiungo il nuovo array al local storage
                localStorage.setItem('pokemon_names', JSON.stringify(pokemonNamesFromLocalStorage));

                this.pokemon = ''

            } else {
                // aggiungo il nome del pokemon alla lista dei miei pokemon
                this.state.myPokemonList.push(this.state.pokemon.name)

                // aggiungo il nome del nuovo pokemon all'array
                pokemonNamesFromLocalStorage.push(this.state.pokemon.name);

                //l'array viene salvato nel local storage
                localStorage.setItem('pokemon_names', JSON.stringify(pokemonNamesFromLocalStorage))

                this.pokemon = ''

            }

        },

        fetchPokemon() {
            this.state.fetchData(this.state.baseUrl + this.pokemon);
            this.pokemon = ''
        }
    }
}
</script>

<template>
    <div id="search">

        <div class="input_search">

            <div class="form-floating">
                <input type="text" class="form-control" id="floatingInput" placeholder="Type Pokemon Name"
                    v-model="this.pokemon" required @keyup.enter="fetchPokemon">
                <label for="floatingInput">Type Pokemon Name</label>
            </div>

            <!-- <input type="text" name="name" id="name" placeholder="Type Pokemon Name" v-model="this.pokemon" required> -->

            <button class="btn border-0" @click="fetchPokemon" :disabled="this.pokemon.trim() === ''">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </button>

        </div>

        <div id="options_button">
            <button @click="addOrRemovePokemon()" v-if="this.state.pokemon" class="btn btn-outline-dark">
                <div v-if="!this.state.myPokemonList.includes(this.state.pokemon.name)">Catch it!
                </div>
                <div v-else>Remove</div>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#search {
    padding: 0.5rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .input_search {
        display: flex;
        align-items: center;
        gap: 1rem;

    }
}
</style>