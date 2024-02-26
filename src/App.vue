<script>
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSearch
  },
}
</script>

<template>
  <AppHeader />
  <AppSearch />
</template>

<style scoped></style>
