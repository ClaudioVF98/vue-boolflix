<template>
  <div class="header">
    <div class="boolflix">
      <h2>Boolflix</h2>
    </div>

    <div class="searchbar">
      <input type="text" v-model="Text" placeholder="Search">
      <button @click="$emit('search', Text)">Enter</button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'SearchBar',
  data() {
    return {
      Text: "",
    }
  },


  components: {
  },


}
</script>

<style lang="scss">
.header {
  background-color: gray;
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .searchbar{
    
  }
}
</style>