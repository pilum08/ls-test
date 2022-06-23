<template>
    <div class="popup">
        <div class="popup__title">Изменить количество</div>
        <div class="popup__count">
            <span class="popup__price">{{popUpPrice}}</span>
            <button class="popup__minus">-</button>
            <input type="text" :value="popUpValue">
            <button class="popup__plus">+</button>
            <span class="popup__sum">{{popUpSum}}</span>
            <div class="popUpBtns">
                <a href="#" class="popup__save">сохранить</a>
                <a href="#" class="popup__cancel">отменить</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: [
    'popUpPrice',
    'popUpSum'
  ]
}
</script>

<style src="./popUp.scss" lang="scss" scoped>

</style>
