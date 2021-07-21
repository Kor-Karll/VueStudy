<template>
  <div>
    end
    <div v-model="exhibitionList" v-for="(item) in exhibitionList">
      <img style="width:50%;height: 100px" :src="item.image_url">
      <endslot-component>
        <template v-slot:endHeader></template>
        <template v-slot:endSection>{{item.id}} 기획전은 이미 종료되었습니다.</template>
        <template v-slot:endFooter></template>
      </endslot-component>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import EndSlot from '~/components/EndSlot'

export default {
  name: 'end-component',
  components: {
    'endslot-component': EndSlot
  },
  data() {
    return {
      exhibitionList: [],
    }
  },
  methods: {
    getApiConfig: function () {
      return {
        headers: {
          Authorization: "test"
        }
      }
    },
    getExhibitionDone: async function () {
      var config = this.getApiConfig()
      await Axios.get("https://sapic.brandi.me/v1/web/events?&is-progress=false&limit=30", config).then(res => {
        this.exhibitionList = res.data.data.map(v => ({...v, like: false}))
        // console.log(res)
      })
    },
  },
  mounted() {
    this.getExhibitionDone()
  }
}
</script>