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

                <div>
                    <span>name:</span> {{ this.state.pokemon.name }}
                </div>

                <div class="d-flex gap-1">

                    <span>types:</span>

                    <ul class="d-flex list-unstyled gap-4 m-0">
                        <li v-for="typeName in this.state.pokemon.types">
                            {{ typeName.type.name }}
                        </li>
                    </ul>

                </div>

                <div>

                    <span>height:</span> {{ this.state.pokemon.height }}

                </div>

                <div>

                    <span>weight:</span> {{ this.state.pokemon.weight }}

                </div>

            </div>

            <div>

                <h3>Stats</h3>

                <div>

                    <div v-for="stat in this.state.stats" class="d-flex align-items-center">

                        <div class="col-3">
                            {{ stat.name }}
                        </div>

                        <div class="bar w-100 position-relative">
                            <div :style="`width: ${stat.base_stat > 100 ? 100 : stat.base_stat}%`" class="progress_bar">
                            </div>
                        </div>

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
        padding: 0.5rem;

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

        text-transform: capitalize;

        span {
            font-weight: bold;
            text-transform: capitalize;
        }

        .bar {
            background-color: grey;
            border: 1px solid black;
            height: 10px;

            .progress_bar {
                position: absolute;
                left: 0;
                top: 0;

                height: 100%;
                background-color: red;
            }
        }

        h3 {
            margin-bottom: 0;
            margin-top: 1rem;
        }
    }
}
</style>