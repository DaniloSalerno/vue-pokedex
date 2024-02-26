import { reactive } from 'vue'

export const state = reactive({

    baseUrl: 'https://pokeapi.co/api/v2/pokemon/',

    fetchData(url) {
        fetch(url).then(resp => {
            return resp.json()
        }).then(data => {
            console.log(data.name);
        })
    }

})





