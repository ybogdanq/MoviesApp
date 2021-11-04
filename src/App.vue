<template>
  <div id="app">
    <Loader />
    <Notification />
    <PosterBG :poster="posterUrl" />
    <Header />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// Components
import MoviesList from "./components/MoviesList.vue";
import PosterBG from "./components/PosterBG.vue";
import MoviesPagination from "./components/MoviesPagination.vue";
import Loader from "./components/Loader.vue";
import Header from "./components/Header.vue";
import Notification from "./components/Notification.vue";

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBG,
    MoviesPagination,
    Loader,
    Header,
    Notification,
  },
  data: () => ({
    posterUrl: "",
  }),
  mounted() {
    // this.fetchMovies();
  },
  computed: {
    ...mapGetters("movies", [
      "moviesList",
      "currentPage",
      "moviesPerPage",
      "moviesLength",
    ]),
  },
  watch: {
    "$route.query": {
      handler: "onPageQueryChange",
      immediate: true,
      deep: true,
    },
  },
  methods: {
    ...mapActions("movies", ["changeCurrentPage"]),
    onChangePoster(poster) {
      this.posterUrl = poster;
    },
    onPageChanged(page) {
      this.$router.push({ query: { page } });
    },
    onPageQueryChange({ page = 1 } = {}) {
      this.changeCurrentPage(Number(page));
    },
  },
};
</script>

<style>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
#app {
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
</style>
