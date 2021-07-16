<template>
    <div>
        watch
        <select v-model="selectedPlatform">
            <option v-for="platform in platformList" :value="platform.value" :selected=platform.selected>{{platform.text}}</option>
        </select>
        <div>
            <img :src="selectedImage">
        </div>
        <div>
            <span>{{selectedTitle}}</span>
        </div>
        <div>
            <span>{{selectedText}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'watch-component',
    data: function() {
        return {
            platformList: [
                {text: 'brandi', value: 'brandi'},
                {text: 'hiver', value: 'hiver'},
                {text: 'helpi', value: 'helpi'},
            ],
            platformListData: {
                brandi: {
                    imgSrc: "https://platum.kr/wp-content/uploads/2019/11/image.png",
                    titleData: "MZ세대를 겨냥한 여성 쇼핑 플랫폼 입니다. ",
                    text: "www.brandi.co.kr"
                },
                hiver: {
                    imgSrc: "https://www.venturesquare.net/wp-content/uploads/2019/03/hiver.jpg",
                    titleData: "하이버 - 예쁜 남자옷 모음",
                    text: "www.hiver.co.kr"
                },
                helpi: {
                    imgSrc: "https://platum.kr/wp-content/uploads/2018/09/helpi.jpg",
                    titleData: "온라인 의류 판매자를 위한 쉬운 쇼핑몰 운영 서비스",
                    text: "www.helpi.co.kr"
                }
            },
            selectedPlatform: 'brandi',
            selectedImage: "https://platum.kr/wp-content/uploads/2019/11/image.png",
            selectedTitle: "MZ세대를 겨냥한 여성 쇼핑 플랫폼 입니다. ",
            selectedText: "www.brandi.co.kr"
        }
    },
    watch: {
        selectedPlatform() {
            this.selectedImage = this.platformListData[this.selectedPlatform].imgSrc
            this.selectedTitle = this.platformListData[this.selectedPlatform].titleData
            this.selectedText = this.platformListData[this.selectedPlatform].text
        }
    }
}
</script>