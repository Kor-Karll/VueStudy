<template>
    <div>
        mixin
        <div>
            <img :src="this.brandi.imgSrc">
        </div>
        <div>
            <span>{{this.brandi.titleData}}</span>
        </div>
        <div>
            <span>{{this.brandi.text}}</span>
        </div>
    </div>
</template>

<script>
import Mixin from '../mixin/mixin'
export default {
    name: 'mixin-component',
    mixins: [Mixin],
    mounted() {
        this.cardClick()
    }
}
</script>