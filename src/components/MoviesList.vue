<template>
  <BContainer>
    <h3 class="list-title">{{ listTitle }}</h3>
    <BRow>
      <template v-if="isExist">
        <BCol
          class="col-md-4 col-6 col-lg-3"
          v-for="(movie, key) in list"
          :key="key"
        >
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
            @removeItem="onRemoveItem"
            @showModal="onShowMovieInfo"
          />
        </BCol>
      </template>
      <template v-else>
        <div>empty list</div>
      </template>
    </BRow>
    <BModal
      body-class="movie-modal-body"
      :id="movieInfoModalId"
      size="xl"
      hide-header
      hide-footer
    >
      <MovieInfoModalContent :movieInfo="selectedMovie" />
    </BModal>
  </BContainer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import MovieItem from "./MovieItem.vue";
import MovieInfoModalContent from "./MovieInfoModalContent.vue";

export default {
  name: "MoviesList",
  components: {
    MovieItem,
    MovieInfoModalContent,
  },
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    movieInfoModalId: "movie-info",
    selectedMovieId: "",
  }),
  computed: {
    ...mapGetters("movies", ["isSearch"]),
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    listTitle() {
      return this.isSearch ? "Search result" : "IMDB Top 250";
    },
    selectedMovie() {
      console.log(this.list[this.selectedMovieId]);
      return this.selectedMovieId ? this.list[this.selectedMovieId] : null;
    },
  },
  methods: {
    ...mapActions("movies", ["removeMovie"]),
    ...mapActions(["showNotify"]),
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    async onRemoveItem({ id, title }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm(
        `Are you sure delete ${title}`
      );

      if (isConfirmed) {
        this.removeMovie(id);
        this.showNotify({
          msg: "Movies deleted successful",
          title: "Succes",
          variant: "success",
        });
      }
    },
    onShowMovieInfo(id) {
      this.$bvModal.show(this.movieInfoModalId);
      this.selectedMovieId = id;
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}
</style>

<style>
.movie-modal-body {
  padding: 0 !important;
}
</style>
