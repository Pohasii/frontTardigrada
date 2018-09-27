<template>
  <div id="app">
    <h1>Первое приложение!</h1>
    <p>
    <!-- используем компонент router-link для навигации -->
    <!-- входной параметр `to` определяет URL для перехода -->
    <!-- `<router-link>` по умолчанию отображается тегом `<a>` -->
    <router-link to="/">Перейти к main</router-link>
    <router-link to="/lab">Перейти к lab</router-link>
    <router-link to="/faq">Перейти к faq</router-link>
    <router-link to="/profile">Перейти к profile</router-link>
    </p>
    <!--img src="./assets/logo.png"-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /*
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  */
}
</style>
