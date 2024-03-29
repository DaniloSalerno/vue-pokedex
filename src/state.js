import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({

    baseUrl: 'https://pokeapi.co/api/v2/pokemon/',

    // oggetto che conterrà il singolo pokemon
    pokemon: null,

    imgFront: '',

    imgBack: '',

    // statistiche del pokemon
    stats: [],

    // lista di pokemon catturati
    myPokemonList: [],

    fetchData(url) {
        axios
            .get(url)
            .then(response => {
                //console.log(response.data);

                this.pokemon = response.data
                this.imgFront = response.data.sprites.front_default
                this.imgBack = response.data.sprites.back_default

                this.stats = response.data.stats.map(el => {
                    const name = el.stat.name
                    const base_stat = el.base_stat
                    return {
                        name,
                        base_stat
                    }
                })

            })
            .catch(error => {
                console.error(error);
            })
    }

})





