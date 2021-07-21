<template>
  <div>
    <header>
      <slot name="endHeader">안녕하십니까 고객님</slot>
    </header>
    <section>
      <slot name="endSection"></slot>
    </section>
    <footer>
      <slot name="endFooter">찾아주셔서 감사합니다.</slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: "endslot-component",
}
</script>
