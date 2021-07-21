<template>
    <div>
        ref
        <input ref="name" name="name" placeholder="이름">
        <input ref="age" name="age" placeholder="나이">
        <input ref="job" name="job" placeholder="직업">
        <input type="button" v-on:click="go" value="확인">
    </div>
</template>

<script>
export default {
    name: 'ref-component',
    methods: {
        go: function() {
            if (
                this.checkInput(this.$refs.name)&&
                this.checkInput(this.$refs.age) &&
                this.checkInput(this.$refs.job)                 
            ) {
              this.$store.commit('setRefData', {
                name: this.$refs.name.value,
                age: this.$refs.age.value,
                job: this.$refs.job.value,
              })
                alert("모두 입력되었습니다.")
            }
        },
        checkInput: function(ref) {
            if (ref.value.length <= 0) {
                ref.focus()                    
                return false
            }
            return true;
        },
    },
    mounted() {
        this.go()
    }
}
</script>