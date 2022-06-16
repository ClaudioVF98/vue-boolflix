<template>
  <div id="app">

      <div>
        <MyHeader @search="searching" />
      </div>


      <div class="container">
        <div class="filmCard">
          <MyCard v-for="(item, i) in series" :key="i" :infoFilm="item" />
        </div>    
      </div>


  </div>
</template>

<script>
import axios from "axios"
import MyHeader from './components/MyHeader.vue'
import MyCard from './components/MyCard.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

.container {
    background-color: #2c3e50;
    
    .filmCard {
      display: flex;
      flex-wrap: wrap;
      height: 90%;
      padding: 0 20px;
  }
}


</style>
