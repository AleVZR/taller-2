<template>
  <div>
    <b-card
      overlay
      :img-src="movie.backdrop_path"
      :img-alt="movie.title"
      tag="movie"
      style="max-width: 19rem"
      class="mb-2 position-relative"
    >
      <div class="d-flex">
          <b-icon icon="star-fill" class="mx-2 mt-1" style="color: gold;"></b-icon>
          <div class="vote" style="color: white; font-weight: bold;">{{ movie.vote_average }}</div>
      </div>
      <div class="title">{{ movie.title }}</div>
    </b-card>
  </div>
</template>

<script>
import Movie from "@/models/Movie.js";

export default {
  name: "MovieCard",
  props: {
    movie: {
      required: true,
      type: Movie,
    },
  },
//   data() {
//     return {
//       isHovered: false,
//     };
//   },
//   methods: {
//     hoverHandler(hovered) {
//       this.isHovered = hovered;
//     },
//   },
};
</script>

<style>
.card:hover {
  transform: scale(1.1);
}

.card-body {
  padding: 0px;
}

.card-text {
  background-color: rgba(75, 75, 194, 0.5);
  color: rgb(255, 123, 0);
  width: inherit;
}

.card-subtitle {
  color: white;
  -webkit-text-stroke: 1px white;
}

.title {
  color: white;
  position: absolute;
  bottom: 2px;
  left: 4px;
  text-align: left;
  font-weight: bold;
  -webkit-text-stroke: 1px black;
}

.vote {
    position: relative;
    top: 1px;
    right: 5px;
    -webkit-text-stroke: 1px black;
}
</style>