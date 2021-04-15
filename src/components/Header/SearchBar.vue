<template>
  <nav>
    <div id="navContainer">
      <ul>
        <li><a href="#">LOGIN</a></li>
        <li><a href="#">PENTRIES</a></li>
      </ul>
      <div id="navbar-search">
        <b-nav-form @submit.stop.prevent="alert('Form Submitted')">
          <b-form-input
            placeholder="Search"
            aria-label="Input"
            class="mr-1"
            id="searchBox"
          ></b-form-input>
        </b-nav-form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SearcgBar",
};
</script>

<style scoped>
#navContainer {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: #333333;
}
#navbar-search {
  text-align: right;
  right: 0;
  margin: 0;
}
#searchBox {
  background-color: #202020;
  border: none;
  margin: auto;
  color: #e41f43;
}
ul {
  width: 30%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
li {
  float: left;
  padding: 7px 10px;
}
li a {
  display: block;
  padding: 8px;
  color: cornsilk;
  font-size: 13px;
}
@media (max-width: 800px) {
  ul {
    width: 50%;
  }
}
</style>
