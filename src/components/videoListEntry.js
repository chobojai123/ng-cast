angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    selectVideo: '<',
    video: '<',
    index: '<'
  },
  
  templateUrl: 'src/templates/videoListEntry.html'
});
