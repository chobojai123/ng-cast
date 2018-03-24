angular.module('video-player')
.component('videoList', {
  // TODO
  bindings:{
    onClick: '<',
    videos: '<'
  },
  templateUrl: 'src/templates/videoList.html'
});
