<template>
    <div class="checked">
        <div class="checked__amount">
            <div class="checked__amount-text">Выделено</div>
            <div class="checked__amount-num">{{num}}</div>
        </div>
    </div>
    <div class="checked__delete">
       <button class="checked__btn"></button>
    </div>
</template>
<script>
export default {
  props: ['num']
}

</script>
