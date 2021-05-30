<template>
  <div class="most-popular">
    <h1 class="p-2 mb-2 text-uppercase">Trending movies</h1>
    <div v-if="loading" class="text-center my-3 d-flex justify-content-center">
      <b-icon icon="three-dots" style="color: blue" font-scale="4"></b-icon>
    </div>
    <div class="row">
      <div class="card-group d-flex justify-content-center">
        <router-link
          v-for="movie in this.movies"
          :key="movie.id"
          :to="{
            name: 'Movies',
            params: { id: movie.id, title: movie.title },
          }"
        >
          <movie-card :movie="movie"></movie-card>
        </router-link>
      </div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary m-4" @click="addMovies(page + 1)">
        See more
      </button>
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard";
import Movie from "@/models/Movie.js";
import api from "@/services/api.service.js";

export default {
  name: "MostPopular",
  components: {
    MovieCard,
  },
  data() {
    return {
      page: 0,
      loading: true,
      movies: [],
      nextPageMovies: [],
    };
  },
  mounted() {
    this.getPopular(1);
  },
  methods: {
    async getPopular(page) {
      this.page = page;
      this.loading = true;
      const { data } = await api.getPopular(this.page);
      this.movies = await Promise.all(
        data.results.map((movie) => this.getMovie(movie.id))
      );
      this.loading = false;
    },
    async getMovie(id) {
      const { data } = await api.getMovie(id);
      return new Movie(data);
    },
    async addMovies(nextPage) {
      this.page = nextPage;
      const { data } = await api.getPopular(this.page);
      this.nextPageMovies = await Promise.all(
        data.results.map((movie) => this.getMovie(movie.id))
      );
      this.movies = this.movies.concat(this.nextPageMovies);
    },
  },
};
</script>

<style>
.btn:hover {
  transform: scale(1.1);
}

.card-group {
  column-gap: 63px !important;
  row-gap: 25px !important;
}
</style>