<template>
  <div class="loading">
    <img src="./loading.gif" alt="load" width="50" height="50">
    <p class="desc">正在加载...</p>
  </div>
</template>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .loading
    width: 100%
    text-align: center
    .desc
      line-height: 20px
      font-size: $font-size-small
      color: $color-text-l
</style>