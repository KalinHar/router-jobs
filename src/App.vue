<template>
  <nav>
    <router-link :to="{ name: 'home'}">Home</router-link> |
    <router-link :to="{ name: 'about'}">About</router-link> |
    <router-link :to="{ name: 'jobs'}">Jobs</router-link>
    
    <br>

    <button @click="redirect">Redirect to Home</button>
    <button @click="back">Go Back</button>
    <button @click="forward">Go Forward</button>

  </nav>
  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({name:'home'})
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
