<template>
  <div>
    <b-card
      id="card"
      bg-variant="dark"
      text-variant="white"
      class="text-center"
      v-bind:img-src="ThumbImage"
      img-alt="Image"
      img-top
    >
      <p id="title">{{ Title }}</p>
      <b-card-text id="summary">
        {{ Summary }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardVideo",
  props: {
    Title: String,
    Summary: String,
    ThumbImage: String,
  },
};
</script>
<style scoped>
#card {
  margin: 5px 0px;
  min-height: 300px;
   border: none;

}
#title {
  color: #a49f8e;
}
#summary {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
