<template>
  <div class="movie-item mb-3">
    <div class="movie-item-poster" :style="posterBG"></div>
    <div class="movie-info-wrap">
      <div class="movie-item-info">
        <h1 class="movie-title">{{ movie.Title }}</h1>
        <span class="movie-year">{{ movie.Year }}</span>
      </div>
      <div class="movie-item-controls row">
        <div class="col pr-2 pb-1">
          <BButton
            size="md"
            block
            variant="outline-light"
            @click="showInfoModalEvent"
            >Info</BButton
          >
        </div>
        <div class="col pl-2 pb-1">
          <BButton
            size="md"
            block
            variant="outline-light"
            @click="emitRemoveEvent"
            >Remove</BButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    posterBG() {
      return {
        "background-image": `url(${this.movie.Poster})`,
      };
    },
  },
  methods: {
    emitRemoveEvent() {
      this.$emit("removeItem", {
        id: this.movie.imdbID,
        title: this.movie.Title,
      });
    },
    showInfoModalEvent() {
      this.$emit("showModal", this.movie.imdbID);
    },
  },
};
</script>

<style scoped>
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
  height: 400px;
}
.movie-item:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
}
.movie-item-poster {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
}
.movie-info-wrap {
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: #fff;
}
.movie-title {
  font-size: 19px;
}
.movie-year {
  font-size: 15px;
}
.movie-item:hover .movie-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.5);
}
.movie-item-controls button {
  width: 100%;
  display: block;
}
@media screen and (max-width: 760px) {
  .movie-item {
    height: 350px;
  }
  .movie-title {
    font-size: 17px;
  }
  .movie-year {
    font-size: 14px;
  }
}
@media screen and (max-width: 450px) {
  .movie-item {
    height: 250px;
  }
  .movie-title {
    font-size: 15px;
  }
  .movie-year {
    font-size: 13px;
  }
}
</style>
