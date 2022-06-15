<template>
    <div>
        <h3>{{infoFilm.title}}</h3>
        <img :src="'https://image.tmdb.org/t/p/w342' + infoFilm.poster_path" alt="">
        <p>{{infoFilm.original_title}}</p>
        <lang-flag :iso="infoFilm.original_language" />
        <p>{{Math.round(infoFilm.vote_average/2)}}</p>
        <font-awesome-icon icon="fa-solid fa-star" />
        <p>{{infoFilm.media_type}}</p>
    </div>
</template>

<script>

export default {
  name: 'MyCard',
  components: {

  },
  props: {
    infoFilm: Object,
  }
}
</script>

<style lang="scss">

</style>
