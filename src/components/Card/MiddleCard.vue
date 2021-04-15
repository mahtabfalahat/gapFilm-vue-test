<template>
  <div>
    <b-card
    id="card"
      overlay
      v-bind:img-src="ThumbImage"
      img-alt="Card Image"
      text-variant="white"
      v-bind:title="Title"
    >
    </b-card>
  </div>
</template>
<script>
export default { 
  name: "MiddleCard",
  props: {
    Title: String,
    ThumbImage: String,
  },
};
</script>
<style scoped>
#card{
   margin: 5px 0px;
   border: none;

}
</style>