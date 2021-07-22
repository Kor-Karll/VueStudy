<template>
  <div>
    nexttick
    <br>
    height: {{ boxHeight }}, width: {{ boxWidth }}
    <input type="button" value="텍스트 추가하기" v-on:click="createRandomTextBox">
    <input type="button" value="상자크기 자겨오기" v-on:click="getBoxSize">
    <div id="randomBox" :style="{width: boxWidth,height: boxHeight}">
      <div v-for="(box,i) in boxList">
        random str = {{ box.text }}<input type="button" value="제거" @click="deleteBox(i)">{{ i }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nexttick-component',
  data: function () {
    return {
      boxList: [],
      boxHeight: 10,
      boxWidth: 10,
      optionListDrop: false,
    }
  },
  methods: {
    createRandomTextBox() {
      var randomLength = Math.random() * 15
      var text = Math.random().toString(36).substr(2, randomLength)
      this.boxList.push({text: text})
      this.getBoxSize()
    },
    getBoxSize() {
      this.$nextTick(function () {
        this.boxHeight = parseInt($('#randomBox').css('height'), 10)
        this.boxWidth = parseInt($('#randomBox').css('width'), 10)
      })
    },
    deleteBox(i) {
      if (this.boxList.length <= 1) {
        this.boxList = []
        return
      }
      this.$delete(this.boxList, i)
      this.getBoxSize()
    }
  },
  mounted() {

  },
}
</script>