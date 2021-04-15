<template>
  <nav id="sidebarNav">
    <ul>
      <li><a>ACTORS</a></li>
      <li><a>ACTRESS</a></li>
      <li><a>AUTHORS</a></li>
      <li><a>DIRECTORS</a></li>
      <li><a>HAITI</a></li>
      <li><a>MODELS</a></li>
      <li><a>MUSICS GROUP</a></li>
      <li><a>NBA TEAMS</a></li>
      <li><a>NHL TEAMS</a></li>
      <li><a>NFL TEAMS</a></li>
      <li><a>SINGERS</a></li>
      <li><a>TV SHOWS</a></li>
      <li><a>WRESTLERS</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
    name:'SidebarMenu'
};
</script>

<style scoped>
#sidebarNav ul {
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#sidebarNav ul li {
  text-align: left;
  padding: 15px 7px;
  border-bottom: 0.2px solid #ccc;
  font-size: 12px;
}
</style>
