angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    onClick: '<',
    video: '<',
    index: '<'
  },
  
  templateUrl: 'src/templates/videoListEntry.html'
});
