<template>
  <div>
    <div v-if="movie" class="container">
      <div class="row mt-4">
        <div class="col-md-6 rigth-box d-flex justify-content-center">
          <img
            style="max-width: 19rem"
            :src="movie.poster_path"
            :alt="movie.title"
          />
        </div>
        <div class="col-md-6 left-box" style="text-align: center">
          <div class="">
            <div>
              <h1>{{ movie.title }}<span class="text-nowrap" style="font-size: 1rem"> {{ movie.release_year }}</span></h1>
              <h4 class="font-italic"><span class="text-uppercase" style="font-size: 0.8rem">({{ movie.original_language }})</span> {{ movie.original_title }}</h4>
            </div>
            <div>
              <h2>
                <b-icon
                  icon="star-fill"
                  class="mx-2 mt-1"
                  style="color: gold"
                ></b-icon
                >{{ movie.vote_average
                }}<span style="font-size: 0.75rem"
                  > ({{ movie.vote_count }} votes)</span
                >
              </h2>
            </div>
            <div>
              <p>{{ movie.overview }}</p>
            </div>
            <div>
              <span
                style="font-weight: bold"
                v-for="genre in movie.genres"
                :key="genre.id"
              >
                {{ genre.name }}
                <span
                  style="font-weight: normal"
                  class="pr-1"
                  v-if="movie.genres.indexOf(genre) < movie.genres.length - 1"
                  >-</span
                >
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <input
        type="button"
        class="btn btn-primary mt-4"
        value="Back"
        onclick="window.history.back()"
      />
    </div>
  </div>
</template>

<script>
import Movie from "@/models/Movie.js";
import api from "@/services/api.service.js";

export default {
  name: "MovieView",
  data() {
    return {
      movie: {},
    };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    async getMovie() {
      const { data } = await api.getMovie(this.$route.params.id);
      this.movie = new Movie(data);
    },
  },
};
</script>

<style>
#poster {
  max-width: 15rem;
}
</style>