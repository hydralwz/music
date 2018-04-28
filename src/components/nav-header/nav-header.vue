<template>
  <div class="nav-header">
      <h1 class="title">Music Player</h1>
  </div>
</template>
<style lang="stylus" scoped rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    @import "~common/stylus/mixin"

    .nav-header
        position relative
        height 30px
        text-align center
        font-size 0
        .title
            display: inline-block
            vertical-align top
            line-height 30px
            font-size $font-size-large
            color $color-theme
</style>
