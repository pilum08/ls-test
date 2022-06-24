<template>
<div class="popup">
  <div class="popup__content" @click.stop>
        <div class="popup__title">Изменить количество</div>
        <div  class="popup__count">
            <span class="popup__price">{{popUpPrice}}</span>
            <button class="popup__minus">-</button>
            <input type="text" :value="popUpValue">
            <button class="popup__plus">+</button>
            <span class="popup__sum">{{popUpSum}}</span>
            <div class="popUpBtns">
                <a href="#" class="popup__save">сохранить</a>
                <a href="#" @click="closePopUp" class="popup__cancel">отменить</a>
            </div>
        </div>
    </div>
    <div class="popup__backdoor" @click="closePopUp"></div>
</div>
</template>
<script>
export default {
  props: [
    'popUpPrice',
    'popUpValue',
    'popUpSum'
  ],
  methods: {
    closePopUp () {
      this.$emit('close')
    }
  }
}
</script>

<style src="./popUp.scss" lang="scss" scoped>

</style>
