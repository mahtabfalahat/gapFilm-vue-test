<template>
  <div id="container">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">CELEBRITIES</b-navbar-brand>
      <p id="fanText" >FANZONE</p>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#" class="active-class" active>HOME</b-nav-item>
            <b-nav-item href="#">CELEBRITIES</b-nav-item>
            <b-nav-item href="#">GALLERY</b-nav-item>
            <b-nav-item href="#">NEWS</b-nav-item>
            <b-nav-item href="#">CONTACTS</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
};
</script>
<style scoped>

.active-class{
  color: aquamarine;
}
#fanText {
 font-size: 12px;
 background-color: #e41f43;
 color: black;
 
}
</style>
