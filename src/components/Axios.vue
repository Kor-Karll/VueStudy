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
    <div v-model="exhibitionList">
      <img  v-for="item in exhibitionList" :src="item.image_url">
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
    getApiConfig: function() {
      return {
        headers: {
          Authorization: "test"
        }
      }
    },
    getExhibitionIng: async function () {
      var config = this.getApiConfig()
      await Axios.get("https://sapic.brandi.me/v1/web/events?&is-progress=true&limit=30", config).then(res => {
        this.exhibitionList = res.data.data;
        // console.log(res)
      })
    },
    getExhibitionDone: async function () {
      var config = this.getApiConfig()
      await Axios.get("https://sapic.brandi.me/v1/web/events?&is-progress=false&limit=30", config).then(res => {
        this.exhibitionList = res.data.data;
        // console.log(res)
      })
    },
  },
  mounted() {
    this.getProductList()
    this.getExhibitionDone()
  }
}
</script>