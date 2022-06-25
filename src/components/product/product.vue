<template>
    <div class="product">
        <div class="product__col">
            <input class="product__checkbox" type="checkbox" v-model="check" @click="checkInc">
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
            <input type="text" class="product__price-amount" @click="toggleModal" :value="ammount">
            <popUp
             v-show="isShowModal"
      @close="toggleModal"/>
            <div class="product__price-sum">
                <span class="prouct__sum">{{sum}}</span>
            <span class="product__pcurrency">р</span>
            </div>
        </div>
       </div>
    </div>
</template>
<script>
import { popUp } from '../popUp'
export default {
  components: { popUp },
  props: [
    'number',
    'pic',
    'desc',
    'price',
    'ammount',
    'sum'
  ],
  data: () => ({
    isShowModal: false,
    check: false
  }),
  methods: {
    toggleModal () {
      this.isShowModal = !this.isShowModal
    },
    checkInc () {
      if (this.check) {
        this.$store.commit('CHECKED_DEC')
      } else {
        this.$store.commit('CHECKED_INC')
      }
    }
  }
}
</script>
<style lang="scss" scoped src="./product.scss">

</style>
