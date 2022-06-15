<template>
    <div>
        <input type="text" v-model="Text" placeholder="Search" >
        <button @click="$emit('search', Text)">Enter</button>
    </div>
</template>

<script>

export default {
  name: 'SearchBar',
  data(){
    return {
        Text: "",
    }
  },


  components: {
  },


}
</script>

<style lang="scss">

</style>