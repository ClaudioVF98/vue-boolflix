<template>
  <div class="card">
    <div class="image">
      <img :src="'https://image.tmdb.org/t/p/w342' + infoFilm.poster_path" :alt="infoFilm.poster_path">
    </div>

    <div class="filmInfo">
      <h3>{{ infoFilm.title }}</h3>
      <p>{{ infoFilm.original_title }}</p>
      <lang-flag :iso="infoFilm.original_language" />
      <span>
        <i v-for="(star, i) in voto" :key="i">
          <font-awesome-icon icon="fa-solid fa-star" />
        </i>
      </span>
      <span>
        <i v-for="(star, i) in (5 - voto)" :key="i">
          <font-awesome-icon icon="fa-regular fa-star" />
        </i>
      </span>
      <p>{{ infoFilm.media_type }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyCard',
  components: {
  },
  data() {
    return {
      voto: Math.round(this.infoFilm.vote_average / 2)
    }
  },
  props: {
    infoFilm: Object,
  },
  methods: {
    getEmptyStars(vote) {
      let pippo = parseInt(Math.round(5 - (vote / 2)));
      return pippo;
    },
    getStars(vote) {
      let calc = parseInt(Math.round(vote / 2));
      return calc;
    },
  }
}
</script>

<style lang="scss">
.card {
  width: calc((100% / 5) - 20px);
  margin: 10px 10px;
  background-color: #496480;
}
</style>
