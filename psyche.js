var videosData = []
var currentVideo = { id: videos[0].id, type: videos[0].type, title: videos[0].title, watched: false }
var player_container = null
var p = null
var psycheVue = null

function $(s) {
  return document.querySelector(s)
}

function humanizeDuration(d) {
  return moment.duration(d, "seconds").humanize()
}

function sortVideosData() {
  //save a snap of initial state
  var order = []
  for (var x = 0; x < videosData.length; x++) {
    order.push(videosData[x].id)
  }

  videosData.sort(function(a, b) {
    if (a.watched && b.watched) {
      // 1 if a is greater, -1 if b. Same as conditionals below
      return a.title.toUpperCase().localeCompare(b.title.toUpperCase())
    }

    if (a.watched && !b.watched) {
      return 1
    }

    if (!a.watched && b.watched) {
      return -1
    }

    //We need to do this or weird stuff happens
    if (order.indexOf(a.id) > order.indexOf(b.id)) {
      return 1
    }
    else {
      return -1
    }

    return 0
  })
}

function showOnLoad() {
  var els = document.querySelectorAll(".show-onload")
  for (var x = 0; x < els.length; x++) {
    els[x].style = "display: block"
  }
}

function setCurrentVideo(vid) {
  currentVideo.id = vid.id
  currentVideo.title = vid.title
  currentVideo.type = vid.type
  currentVideo.watched = vid.watched

  $(".psyche-machine").setAttribute("data-type", currentVideo.type)
  $(".psyche-machine").setAttribute("data-video-id", currentVideo.id)
}

function retrieveLastVideo() {
  //first check if hash exists
  var hash = window.location.hash
  if (hash) {
    setCurrentVideo(_.find(videos, {id: hash.split("#")[1] }))
    setupVue()
    showOnLoad()
    setupPlyr()
    return
  }

  //retrieves last video played and instantiates vue and plyr
  localforage.getItem("lastVideo").then(function(data) {
    if (data) {
      setCurrentVideo(data)
    }
    setupVue()
    showOnLoad()
    setupPlyr()
  })
}

function setupPlyr() {
  player_container = plyr.setup('.psyche-machine')[0]
  p = player_container.plyr

  player_container.addEventListener('ready', function(event) {
    localforage.getItem(currentVideo.id).then(function(value) {
      var cv = _.find(videosData, { id: currentVideo.id })
      cv.duration = p.media.duration
      cv.humanizedDuration = humanizeDuration(p.media.duration)
      if (value) {
        p.seek(value.currentPosition)
        if (!isMobile.any) {
          p.play()
        }
      }
    })
  })

  player_container.addEventListener('ended', function(event) {
    var duration = p.media.duration
    var metadata = {
      currentPosition: duration,
      duration: duration,
      watched: true
    }
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
    localforage.setItem("lastVideo", currentVideo)
  })

  player_container.addEventListener('dblclick', function(event) {
    p.toggleFullscreen()
  })

  document.body.onkeyup = function(e) {
    if(e.keyCode == 32){
      p.togglePlay()
      if (e.target == document.body) {
        e.preventDefault()
        return false
      }
    }
  }
}

function setupVue() {
  psycheVue = new Vue({
    el: '#vue',
    data: {
      currentVideo: currentVideo,
      items: videosData
    },
    methods: {
      loadVideo: function (item) {
        currentVideo.id = item.id
        currentVideo.type = item.type
        currentVideo.title = item.title
        currentVideo.watched = item.watched
        p.source({
          type: 'video',
          title: item.title,
          sources: [{
            src: item.id,
            type: item.type
          }]
        })
        window.scrollTo(0, 0);
      }
    },
    computed: {
      title: function() {
        return _.find(videos, { id: currentVideo.id }).title
      },
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
  var sorted = false
  for (var x = 0; x < videos.length; x++) {
    localforage.getItem(videos[x].id).then(function(index, savedData) {
      var video = videos[index]
      var humanizedDuration = null
      var currentPosition = 0
      var duration = null
      var watched = false
      var thumbnail = ""

      if (savedData) {
        humanizedDuration = humanizeDuration(savedData.duration)
        duration = savedData.duration
        currentPosition = savedData.currentPosition
        watched = savedData.watched
      }
      if (video.type === "youtube") {
        thumbnail = "http://img.youtube.com/vi/" + video.id + "/0.jpg"
      }
      else if (video.type === "vimeo") {
        superagent
          .get("http://vimeo.com/api/v2/video/" + video.id + ".json")
          .end(function(videoID, err, res) {
            _.find(videosData, { id: videoID }).thumbnail = res.body[0].thumbnail_medium
          }.bind(this, video.id))
      }
      videosData.push({
        id: video.id,
        type: video.type,
        title: video.title,
        description: video.description,
        duration: duration,
        humanizedDuration: humanizedDuration,
        currentPosition: currentPosition,
        watched: watched,
        thumbnail: thumbnail
      })
      if (videosData.length === videos.length && !sorted) {
        sorted = true
        sortVideosData()
      }
    }.bind(this, x))
  }
}

function init() {
  retrieveLastVideo()
  loadVideoList()
}

init()
