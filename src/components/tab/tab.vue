<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="./recommend">
      <span class="tab-target">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="./singer">
      <span class="tab-target">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="./rank">
      <span class="tab-target">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="./search">
      <span class="tab-target">搜索</span>
    </router-link>
  </div>
</template>
<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display flex
    height 35px
    line-height 35px
    font-size: $font-size-medium
    .tab-item
      flex 1
      text-align center
      .tab-target
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active //激活时改变
        .tab-target
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>
