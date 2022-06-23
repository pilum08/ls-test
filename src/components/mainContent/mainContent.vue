<template>
    <checked :num="45"/>
    <products/>
    <subtotal/>
    <total/>
</template>
<script>
import { checked } from '../checked'
import { products } from '../products'
import { subtotal } from '../subtotal'
import { total } from '../total'
export default {
  components: {
    checked,
    products,
    subtotal,
    total
  }
}
</script>
