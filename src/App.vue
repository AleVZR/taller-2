<template>
  <div id="app">
    <b-navbar id="nav" class="p-0 sticky-top">
      <b-navbar-brand class="p-2">
        <b-icon icon="file-play-fill" style="color: orange" font-scale="1"></b-icon>
        Movies
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <div class="p-4">
          <router-link to="/most-popular" class="text-decoration-none"
            >Most popular</router-link
          >
        </div>
        <div class="p-4">
          <router-link to="/top-rated" class="text-decoration-none"
            >Top Rated</router-link
          >
        </div>
      </b-navbar-nav>
    </b-navbar>
    <keep-alive include="MostPopular, TopRated">
      <router-view />
    </keep-alive>
  </div>
</template>

// <script>
// import MostPopular from '@/views/MostPopular'
// import TopRated from '@/views/TopRated'

// export default {
//   components: {
//     MostPopular,
//     TopRated
//   }
// }
// </script>

<style>
body {
  background-color: #cfcfcf;
}

h1 {
  color: rgb(0, 0, 0);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #1d1e72;
  color: white;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-light .navbar-brand {
  color: rgba(255, 255, 255, 0.9) !important;
}

.logo {
  height: 25px;
}
</style>
