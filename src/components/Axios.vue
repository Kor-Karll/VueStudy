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
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'axios-component',
  data() {
    return {
      productList: []
    }
  },
  methods: {
    getProductList: async function () {
      await Axios.get('public/data.json').then(res => {
        this.productList = res.data
      })
    },
    getExhibition: async function () {
      var config = {
        headers: {
          Authorization: "test"
        }
      }
      await Axios.get("https://sapic.brandi.me/v1/web/events?&is-progress=true&limit=30", config).then(res => {
        console.log(res)
      })
    }
  },
  mounted() {
    this.getProductList()
    this.getExhibition()
  }
}
</script>