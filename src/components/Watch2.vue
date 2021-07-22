<template>
  <div>
    watch2
    <input type="text" v-on:keyup="onChange" v-model="search" @focus="optionListDrop = true">
    <div id="optionList" v-if="optionListDrop">
      <div v-for="platform in searchOptionList" @click="selectOption(platform)">{{ platform.name }}</div>
    </div>
    <div>
      <img style="width: 50%" :src="selectedPlatform.imgSrc">
    </div>
    <div>
      <span>{{ selectedPlatform.titleData }}</span>
    </div>
    <div>
      <span>{{ selectedPlatform.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'watch2-component',
  data: function () {
    return {
      optionList: [
        {
          name: '브랜디',
          imgSrc: "https://platum.kr/wp-content/uploads/2019/11/image.png",
          titleData: "MZ세대를 겨냥한 여성 쇼핑 플랫폼 입니다. ",
          text: "www.brandi.co.kr"
        },
        {
          name: '하이버',
          imgSrc: "https://www.venturesquare.net/wp-content/uploads/2019/03/hiver.jpg",
          titleData: "하이버 - 예쁜 남자옷 모음",
          text: "www.hiver.co.kr"
        },
        {
          name: '헬피',
          imgSrc: "https://platum.kr/wp-content/uploads/2018/09/helpi.jpg",
          titleData: "온라인 의류 판매자를 위한 쉬운 쇼핑몰 운영 서비스",
          text: "www.helpi.co.kr"
        }
      ],
      selectedPlatform: {
        name: '브랜디',
        imgSrc: "https://platum.kr/wp-content/uploads/2019/11/image.png",
        titleData: "MZ세대를 겨냥한 여성 쇼핑 플랫폼 입니다. ",
        text: "www.brandi.co.kr"
      },
      searchOptionList: [],
      search: "",
      optionListDrop: false,
    }
  },
  methods: {
    onChange(e) {
      if (this.search.length == 0) {
        this.searchOptionList = this.optionList
      } else {
        this.searchOptionList = []
        this.optionList.forEach(
            (platform, i) => {
              if (platform.name.indexOf(this.search) != -1) {
                this.searchOptionList.push(this.optionList[i])
              }
            }
        )
      }
    },
    selectOption(platform) {
      this.selectedPlatform = platform
      this.optionListDrop = false
    },
  },
  mounted() {
    this.searchOptionList = this.optionList
  },
}
</script>