<template>
    <div>
        <div style="float:left;width:50%;">
            <input v-on:keydown="keyDown">
            <div v-for="item in keyItems">
                {{item}}
            </div>
        </div>
        <div style="float:left;width:50%;">
            <div @mousemove="mouseMove" style="height:200px;border:1px solid black"></div>
            <span>{{pageX}}, {{pageY}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'event-component',
    methods: {
        keyDown: function(e) {
            if (e.keyCode == 8) {
                this.keyItems.pop();
                return;
            }
            this.keyItems.push(e.keyCode);
        },
        mouseMove: function (e) {
            this.pageX = e.pageX
            this.pageY = e.pageY
        }
    },
    data() {
        return {
            keyItems: [],
            pageX: 0,
            pageY: 0,
        }
    }
}
</script>