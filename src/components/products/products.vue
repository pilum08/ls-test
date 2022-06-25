
<template>
   <ul class="products">
    <li class="products__item" v-for="item in items" :key="item.id">
    <product
    :number="getNumber(item.id)"
    :pic="item.img"
    :desc="item.description"
    :price="item.price"
    :ammount="item.ammount"
    :sum="getSum(item.price,item.ammount)"
    />
    </li>
   </ul>
</template>
<script>
import { product } from '../product'
import items from '../../data.json'

export default {
  components: {
    product
  },
  data () {
    return {
      items
    }
  },
  methods: {
    getNumber (num) {
      return num + 1
    },
    getSum (price, ammount) {
      return price * ammount
    }
  }
}
</script>

<style src="./products.scss" lang="scss" scoped>

</style>
