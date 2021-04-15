<template>
  <div >
    <b-card
    id="baner"
      overlay
      v-bind:img-src="LandscapeImage"
      img-alt="Card Image"
      text-variant="white"
      v-bind:title="Title"
    >
    </b-card>
  </div>
</template>
<script>
export default {
  name: "BannerCard",
  props: {
    Title: String,
    LandscapeImage: String,
  },
};
</script>
<style scoped>
#baner{
   margin: 5px 0px;
   border: none;
}
</style>