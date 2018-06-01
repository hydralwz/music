<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box @query="onQueryChange"></search-box>
    </div>
    <div class="search-result">
      <suggest :query="query"></suggest>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import SearchBox from 'base/search-box/search-box'
import Suggest from 'components/suggest/suggest'

export default {
  data() {
    return {
      query: ''
    }
  },
  methods: {
    onQueryChange(query) {
      this.query = query
    }
  },
  components: {
    SearchBox,
    Suggest
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .search
    .search-box-wrapper
      margin: 20px
    .shortcut-wrapper
      position: fixed
      top: 155px
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 20px 20px 20px
          .title
            margin-bottom: 20px
            font-size: $font-size-medium
            color: $color-text-l
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-d
    .search-result
      position: fixed
      width: 100%
      top: 155px
      bottom: 0
</style>