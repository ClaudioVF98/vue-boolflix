<template>
  <div>
    Main
    <SearchBar @search="searching" />
    <MyCard v-for="(item, i) in series" :key="i" :infoFilm="item" />
  </div>
</template>

<script>
import axios from "axios"
import SearchBar from './SearchBar.vue'
import MyCard from './MyCard.vue'

export default {
  name: 'MyMain',
  components: {
    SearchBar,
    MyCard
  },
  data() {
    return {
      seriesApiUrl: "https://api.themoviedb.org/3/search/multi?api_key=da52b4cba746e4101c83afd7fa18a086&language=it-IT&page=1&include_adult=true",
      searchText: "",
      series: [],
    }
  },

  created() {
    this.generateSeriesApi();
  },

  methods: {
    generateSeriesApi() {
      if (this.searchText !== "") {
        let newUrl = this.seriesApiUrl + "&query=" + this.searchText;
        axios
          .get(newUrl)
          .then((result) => {
            this.series = result.data.results;
            console.log(this.series);
          })
          .catch((error) => {
            console.log("Errore", error);
          })
      }
    },

    searching(searchedText) {
      this.searchText = searchedText;
      console.log(this.searchText);
      this.generateSeriesApi();
    },
  }
}
</script>

<style lang="scss">
</style>
