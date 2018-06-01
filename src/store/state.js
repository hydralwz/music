import {playMode} from 'common/js/config'
import {loadFavorite} from '../common/js/cache'

const state = {
  singer: {},
  playing: false,
  playlist: [],
  sequenceList: [],
  fullScreen: false,
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  favoriteList: loadFavorite()
}

export default state