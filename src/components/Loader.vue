<template>
  <div class="loader-wrap" v-if="getShowLoader">
    <b-spinner type="grow" variant="light" label=""></b-spinner>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Loader",
  data: () => ({
    isHidden: Boolean,
  }),
  computed: {
    ...mapGetters(["getShowLoader"]),
  },
};
</script>

<style scoped>
.loader-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
