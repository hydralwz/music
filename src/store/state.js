import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  playlist: [],
  sequenceList: [],
  fullScreen: false,
  mode: playMode.loop,
  currentIndex: -1
}

export default state