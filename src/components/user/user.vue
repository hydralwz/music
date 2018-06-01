<template>
  <scroll class="user-center">
    <div class="title">我喜欢的</div>
    <div class="list-wrapper" ref="listWrapper">
      <scroll ref="favoriteList" class="list-scroll" v-if="currentIndex===0" :data="favoriteList">
        <div class="list-inner">
          <song-list :songs="favoriteList" @select="selectSong"></song-list>
        </div>
      </scroll>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
import {mapGetters, mapActions} from 'vuex'
import Song from 'common/js/song'
import songList from 'base/song-list/song-list'
import Scroll from 'base/scroll/scroll'

export default{
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    ...mapGetters([
      'favoriteList'
    ])
  },
  methods: {
    selectSong(song) {
      this.insertSong(new Song(song))
    },
    ...mapActions([
      'insertSong'
    ])
  },
  components: {
    songList,
    Scroll
  }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .user-center
    position: fixed
    width: 100%
    top: 75px
    bottom: 0
    .title
      margin-top 15px
      text-align center
      font-size $font-size-large
      color $color-theme
    .list-wrapper
      position: absolute
      top: 50px
      bottom 50px
      bottom: 0
      width: auto
      .list-scroll
        height: 100%
        overflow: hidden
        .list-inner
          padding: 0px 30px
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>