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
    <div v-if="this.state.pokemon">
        <img :src=this.state.imgFront alt="">

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


            <div v-for="stat in this.state.stats">
                {{ stat.name }} : {{ stat.base_stat }}
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped></style>