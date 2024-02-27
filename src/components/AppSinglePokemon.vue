<script>
import { state } from '../state'
export default {
    name: 'AppSinglePokemon',
    data() {
        return {
            state,
        }
    },
    methods: {

    },
    mounted() {
    }
}
</script>

<template>
    <div v-if="this.state.pokemon" id="pokemon_view">

        <div id="pokemon_thumb">
            <div>
                <img width="125" :src=this.state.imgFront alt="">
            </div>
        </div>


        <div id="pokemon_info">
            <div>
                <div>name: {{ this.state.pokemon.name }} </div>

                <span>types:</span>
                <ul>
                    <li v-for="typeName in this.state.pokemon.types">{{ typeName.type.name }}</li>
                </ul>
                <div>height: {{ this.state.pokemon.height }}</div>
                <div>weight: {{ this.state.pokemon.weight }}</div>
            </div>

            <div>
                <h3>Stats</h3>


                <div>
                    <div v-for="stat in this.state.stats">
                        {{ stat.name }} : {{ stat.base_stat }}
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
#pokemon_view {
    padding: 1rem;

    #pokemon_thumb {

        background-color: grey;
        width: 300px;
        margin: auto;
        padding: 1rem;

        div {
            padding: 1rem;
            background-color: white;
            border: 2px solid black;
            display: flex;
            justify-content: center;
            align-items: center;

        }
    }

    #pokemon_info {

        margin-top: 1rem;
        background-color: lime;
        padding: 0.5rem;
        border: 2px solid black;
        border-radius: 0.5rem;

        font-size: 0.85rem;
    }
}
</style>