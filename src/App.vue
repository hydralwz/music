<template>
  <div id="app" @touchmove.prevent>
    <nav-header></nav-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import NavHeader from 'components/nav-header/nav-header'
import Tab from 'components/tab/tab'

export default {
  components: {
    NavHeader,
    Tab
  }
}
</script>