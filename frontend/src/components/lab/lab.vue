<template name="labscp">
  <h1>{{ msg }}</h1>
</template>

<template>
  <div><canvass/></div>
</template>

<!--script lang="js">
  import script from './script'
  export default script
</script-->

<script>
  import canvass from './canvas/canvas.vue'
  //import script from './script.js'

  export default {
    components: {
      canvass
    },
    data () {
      return {
        msg: 'Welcome to the lab'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'styles';
</style>
