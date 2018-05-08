<template>
  <div id="app" @touchmove.prevent>
    <nav-header></nav-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
import NavHeader from 'components/nav-header/nav-header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'

export default {
  components: {
    NavHeader,
    Tab,
    Player
  }
}
</script>