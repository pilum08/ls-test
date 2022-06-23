<template>
    <checked :num="45"/>
    <products/>
</template>
<script>
import { checked } from '../checked'
import { products } from '../products'
export default {
  components: {
    checked,
    products

  }
}
</script>
