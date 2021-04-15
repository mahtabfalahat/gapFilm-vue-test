<template>
  <div id="app">
    <div id="header">
      <SearchBar />
      <MenuBar />
    </div>

    <div id="bodyContainer">
      <div id="sideMenu">
        <SidebarMenu />
      </div>
      <div id="bodyItems">
        <div id="axContainer" v-for="value in banerInfo" :key="value.id">
          <BannerCard
            
            v-bind:Title="value.Title"
            v-bind:LandscapeImage="value.LandscapeImage"
          />
        </div>
        <b-container class="bv-example-row">
          <b-row cols="1" cols-sm="1" cols-md="2">
            <b-col v-for="value in middleCardsInfo" :key="value.id">
              <MiddleCard
                v-bind:Title="value.Title"
                v-bind:ThumbImage="value.ThumbImage"
              />
            </b-col>
          </b-row>
        </b-container>
        <div class="ml-auto">
          <b-container class="bv-example-row">
            <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4" cols-xl="4">
              <b-col v-for="value in info" :key="value.id">
                <CardVideo
                  v-bind:Title="value.Title"
                  v-bind:Summary="value.Summary"
                  v-bind:ThumbImage="value.ThumbImage"
                />
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from "./components/Header/MenuBar";
import SearchBar from "./components/Header/SearchBar";
import CardVideo from "./components/Card/CardVideo";
import SidebarMenu from "./components/Body/SideBarMenu";
import BannerCard from "./components/Card/BanerCard";
import MiddleCard from "./components/Card/MiddleCard";
//import axios from "axios";
import { moviesInfo } from "./api/endpoints";
export default {
  name: "App",
  components: {
    MenuBar,
    SearchBar,
    CardVideo,
    SidebarMenu,
    BannerCard,
    MiddleCard,
  },

  data() {
    return {
      info: [],
      banerInfo: [],
      middleCardsInfo: [],
    };
  },
  async mounted() {
    try {
      const response = await moviesInfo();
      this.info = response.data.result[2].list;
      this.banerInfo = response.data.result[0].list;
      this.middleCardsInfo = response.data.result[1].list;
      //or we can write api like thie: 
       /*axios.get("http://apitest.tek-nic.com/movie/FirstPage").then((response) => {
      this.info = response.data.result[2].list;
    });*/
    } catch {
      console.log("error");
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  width:100%;
  overflow:hidden; 
  padding: 0px;
  margin: 0px;
  background-color: #333333;
}
#header{
  width: 100%;
  margin: auto;
}
#bodyContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  width: 90%;
}
#sideMenu {
  width: 13%;
  background-color: #232323;
  color: #ccc;
}
#bodyItems {
  width: 84%;
}
#card {
  max-height: 500px;
  margin: 20px 0px;
  text-align: justify;
  font-size: 14px;
}
@media (max-width: 600px) {
  #sideMenu {
    width: 20%;
  }
}
</style>
