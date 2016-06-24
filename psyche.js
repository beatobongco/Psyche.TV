/**
  Goals:
    - Track user behavior via localforage
      - use this to grey out videos that are viewed past 90% threshold
      - resume a video where you left off.
  TODO:
    - get duration upon play
*/

var videosData = [] //this is my state
var currentVideo = { id: videos[0].id, type: videos[0].type, watched: false }
var player_container = null
var p = null

function $(s) {
  return document.querySelector(s)
}

function sortVideosData() {
  videosData.sort(function(a, b) {
    if (a.watched && b.watched) {
      return 0
    }

    if (a.watched && !b.watched) {
      return -1
    }

    if (!a.watched && b.watched) {
      return 1
    }
  }).reverse()
}

function retrieveLastVideo() {
  //retrieves last video played and instantiates plyr
  localforage.getItem("lastVideo").then(function(data) {
    if (data) {
      currentVideo.id = data.id
      currentVideo.type = data.type
      currentVideo.watched = data.watched
    }

    $(".psyche-machine").setAttribute("data-type", currentVideo.type)
    $(".psyche-machine").setAttribute("data-video-id", currentVideo.id)

    setupPlyr()
  })
}

function setupPlyr() {
  player_container = plyr.setup('.psyche-machine')[0]
  p = player_container.plyr

  player_container.addEventListener('ready', function(event) {
    console.log("READY: Loading", currentVideo.id)
    localforage.getItem(currentVideo.id).then(function(value) {
      if (value) {
        p.seek(value.currentPosition)
      }
      p.play()
    })
  })

  player_container.addEventListener('ended', function(event) {
    var duration = p.media.duration
    var metadata = {currentPosition: duration, duration: duration, watched: true}
    localforage.setItem(currentVideo.id, metadata)
    var cv = _.find(videosData, { id: currentVideo.id })
    cv.currentPosition = duration
    cv.duration = duration
    cv.watched = true
    sortVideosData()
  })

  player_container.addEventListener('timeupdate', function(event) {
    var ct = Math.floor(p.media.currentTime)
    var duration = p.media.duration
    var cv = _.find(videosData, { id: currentVideo.id })
    cv.currentPosition = ct
    cv.duration = duration
    cv.watched = cv.watched ? true : false
    var metadata = {
      currentPosition: ct,
      duration: duration,
      watched: cv.watched
    }
    localforage.setItem(currentVideo.id, metadata)
  })

  player_container.addEventListener('play', function(event) {
    console.log("SET LAST", currentVideo)
    localforage.setItem("lastVideo", currentVideo)
  })
}

function setupVue() {
  new Vue({
    el: '.video-list',
    data: {
      currentVideo: currentVideo,
      items: videosData
    },
    methods: {
      loadVideo: function (item) {
        currentVideo.id = item.id
        currentVideo.type = item.type
        p.source({
          type: 'video',
          title: item.title,
          sources: [{
            src: item.id,
            type: item.type
          }]
        })
      }
    },
  })

  new Vue({
    el: '.psyche-meter',
    data: {
      items: videosData
    },
    computed: {
      psychePercent: function() {
        var total = 0
        var consumed = 0
        _.forEach(this.items, function(value) {
          if (value.watched) {
            consumed++
          }
          total++
        })
        return Math.round(consumed/total * 100)
      }
    }
  })
}

function loadVideoList() {
  for (var x = 0; x < videos.length; x++) {
    localforage.getItem(videos[x].id).then(function(video, savedData) {
      var humanizedDuration = null
      var currentPosition = 0
      var duration = null
      var watched = false
      if (savedData) {
        humanizedDuration = moment.duration(savedData.duration, "seconds").humanize()
        duration = savedData.duration
        currentPosition = savedData.currentPosition
        watched = savedData.watched
      }
      videosData.push({
        id: video.id,
        type: video.type,
        title: video.title,
        description: video.description,
        duration: duration,
        humanizedDuration: humanizedDuration,
        currentPosition: currentPosition,
        watched: watched
      })
      sortVideosData()
    }.bind(this, videos[x]))
  }
}

function init() {
  retrieveLastVideo()
  loadVideoList()
  setupVue()
}

init()
