<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Notification",
  computed: {
    ...mapGetters(["messagesPool"]),
  },
  watch: {
    messagesPool: "showNotification",
  },
  methods: {
    showNotification({ variant, msg, title }) {
      console.log(this.$bvToast);
      this.$bvToast.show(msg, {
        title,
        variant,
        solid: true,
      });
    },
  },
};
</script>

<style scoped></style>
