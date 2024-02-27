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
            this.state.myPokemonList.push(this.state.pokemon)
            console.log(this.state.myPokemonList);
        }
    }
}
</script>

<template>
    <div id="search">
        <div>

            <input type="text" name="name" id="name" placeholder="Type Pokemon Name" v-model="this.pokemon">

            <button class="btn" @click="this.state.fetchData(this.state.baseUrl + this.pokemon)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </button>

        </div>

        <div id="options_button">
            <button @click="addOrRemovePokemon()">
                <div>Catch it!</div>
                <div class="d-none">Remove</div>
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
}
</style>