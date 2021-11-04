<template>
  <header class="header">
    <BNavbar type="dark" class="navbar" variant="dark">
      <BContainer>
        <BNavbarBrand :href="logoURL">MovieDB</BNavbarBrand>
        <BNavForm>
          <BFormInput
            class="mr-sm-2 search-input"
            placeholder="Search"
            v-model="searchValue"
            debounce="500"
          ></BFormInput>
        </BNavForm>
      </BContainer>
    </BNavbar>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  data: () => ({
    searchValue: "",
    logoURL: process.env.BASE_URL + "?page=1",
  }),
  watch: {
    searchValue: "onSearchValueChanged",
  },
  methods: {
    ...mapActions("movies", [
      "searchMovie",
      "fetchMovies",
      "toggleSearchState",
    ]),
    onSearchValueChanged(value) {
      if (value) {
        this.searchMovie(value);
        this.toggleSearchState(true);
      } else {
        this.fetchMovies();
        this.toggleSearchState(false);
      }
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 30px;
}
.navbar {
  list-style: none;
  background-color: rgba(0, 0, 0, 0.7) !important;
}

.search-input {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 0, 0, 0.6);
}
.search-input:focus {
  box-shadow: none;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 0, 0, 0.6);
}
</style>
