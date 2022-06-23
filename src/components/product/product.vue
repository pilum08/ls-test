<template>
    <div class="product">
        <div class="product__col">
            <input class="product__checkbox" type="checkbox">
            <span class="product__number">{{number}}</span>
        </div>
        <div class="product__col">
            <div class="product__img">
                <img :src="pic" class="product__pic" alt="">
            </div>
        </div>
       <div class="product__col">
        <div class="product__desc">{{desc}}</div>
       </div>
       <div class="product__col">
        <div class="product__price">
            <div class="product__price-value">
                <span class="product__price-num">{{price}}</span>
                <span class="product__currency">р</span>
            </div>
            <input type="text" class="product__price-amount" :value="ammount">
            <div class="product__price-sum">
                <span class="prouct__sum">{{sum}}</span>
            <span class="product__pcurrency">р</span>
            </div>
        </div>
       </div>
    </div>
</template>
<script>
export default {
  props: [
    'number',
    'pic',
    'desc',
    'price',
    'ammount',
    'sum'
  ]

}
</script>
<style lang="scss" scoped src="./product.scss">

</style>
