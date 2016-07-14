var videosData = []
var currentVideo = { id: videos[0].id, type: videos[0].type, title: videos[0].title, watched: false }
var player_container = null
var p = null
var psycheVue = null

function $(s) {
  return document.querySelector(s)
}

function mobileCheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
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

function retrieveLastVideo() {
  //retrieves last video played and instantiates vue and plyr
  localforage.getItem("lastVideo").then(function(data) {
    if (data) {
      currentVideo.id = data.id
      currentVideo.title = data.title
      currentVideo.type = data.type
      currentVideo.watched = data.watched
    }

    $(".psyche-machine").setAttribute("data-type", currentVideo.type)
    $(".psyche-machine").setAttribute("data-video-id", currentVideo.id)
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
        //only play if on desktop
        if (!mobileCheck) {
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
        $('.plyr').scrollIntoView({behavior: "smooth"})
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
