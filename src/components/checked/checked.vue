<template>
    <div class="checked">
        <div class="checked__amount">
            <div class="checked__amount-text">Выделено</div>
            <div class="checked__amount-num">{{this.$store.state.checked}}</div>
        </div>
    </div>
    <div class="checked__delete">
       <button class="checked__btn">Удалить отмеченные</button>
    </div>
</template>
<style lang="scss" src="./checked.scss" scoped>

</style>
<script>
export default {
  props: ['num']
}

</script>
