<template>
    <div id="app">
        {{message}}
        <routing-component></routing-component>
        <router-view></router-view>
        <div>
            <button class="go-back" @click="$router.go(-1)">Back</button>
            <router-link to="/">home</router-link>
		    <button class="go-front" @click="$router.go(1)">Next</button>
        </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            message: "Hello Brandi!"
        }
    }
}
</script>