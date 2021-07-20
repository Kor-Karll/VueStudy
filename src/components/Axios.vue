<template>
  <div>
    axios
    <table>
      <tr v-for="product in productList">
        <td>{{ product.no }}</td>
        <td>{{ product.productName }}</td>
        <td>{{ product.price }}</td>
      </tr>
    </table>
    <div v-model="exhibitionList" v-for="(item, i) in exhibitionList">
      <img v-on:click="toggleLike(i)" style="width:50%;height: 100px" :src="item.image_url">
      <img v-if="item.like" style="width:5%;" src="https://www.flaticon.com/svg/static/icons/svg/929/929417.svg">
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'axios-component',
  data() {
    return {
      productList: [],
      exhibitionList: [],
    }
  },
  methods: {
    getProductList: async function () {
      await Axios.get('public/data.json').then(res => {
        this.productList = res.data
      })
    },
    getApiConfig: function () {
      return {
        headers: {
          Authorization: "test"
        }
      }
    },
    getExhibitionIng: async function () {
      var config = this.getApiConfig()
      await Axios.get("https://sapic.brandi.me/v1/web/events?&is-progress=true&limit=30", config).then(res => {
        this.exhibitionList = res.data.data.map(v => ({...v, like: false}))
        // console.log(res)
      })
    },
    getExhibitionDone: async function () {
      var config = this.getApiConfig()
      await Axios.get("https://sapic.brandi.me/v1/web/events?&is-progress=false&limit=30", config).then(res => {
        this.exhibitionList = res.data.data.map(v => ({...v, like: false}))
        // console.log(res)
      })
    },
    toggleLike: function (i) {
      this.exhibitionList[i].like = !!!this.exhibitionList[i].like
      console.log(this.exhibitionList)
    },
  },
  mounted() {
    this.getProductList()
    this.getExhibitionDone()
  }
}
</script>