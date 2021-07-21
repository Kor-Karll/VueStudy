<template>
    <div>
        vuex
      {{$store.state.ref.name}}
      {{$store.state.ref.age}}
      {{$store.state.ref.job}}
    </div>
</template>

<script>
export default {
    name: 'vuex-component',
}
</script>