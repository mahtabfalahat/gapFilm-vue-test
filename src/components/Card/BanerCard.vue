<template>
  <div>
    <b-card
      id="baner"
      overlay
      v-bind:img-src="LandscapeImage"
      img-alt="Card Image"
      text-variant="white"
      v-bind:title="Title"
    >
      <p id="title">{{ Title }}</p>

     
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
#baner {
  margin: 5px 0px;
  border: none;
  text-align: center;
}
#title {
  color: white;
  font-size: 80px;
}
#summary {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 500px;
  color: #e41f43;
}
</style>
