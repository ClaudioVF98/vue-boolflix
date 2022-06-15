<template>
    <div>
        <h3>{{infoFilm.title}}</h3>
        <p>{{infoFilm.original_title}}</p>
        <lang-flag :iso="infoFilm.original_language" />
        <p>{{infoFilm.vote_average}}</p>
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
