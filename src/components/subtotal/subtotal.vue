<template>
    <div class="subtotal">
        <div class="subtotal__sum">
            <span class="subtotal__sum-text">Промежуточный итог по корзине:</span>
            <span class="subtotal__sum-num">{{subtotalSum}}</span>
            <span class="subtotal__currency">р</span>
        </div>
        <div class="subtotal__tax">
            <span class="subtotal__tax-text">В том числе НДС:</span>
            <span class="subtotal__tax-num">{{subtotalTaxSum}}</span>
            <span class="subtotal__currency">р</span>
        </div>
    </div>
</template>
<script>
export default {
  props: [
    'subtotalSum',
    'subtotalTaxSum'
  ]
}
</script>
<style lang="scss" src="./subtotal.scss" scoped>

</style>
