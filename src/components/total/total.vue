<template>
    <div class="total">
        <span class="total__text">итого:</span>
        <span class="total__num">{{totalNum}}</span>
         <span class="total__currency">р</span>
    </div>
</template>
<script>
export default {
  props: ['totalNum']
}
</script>
<style src="./total.scss" lang="scss" scoped>

</style>
