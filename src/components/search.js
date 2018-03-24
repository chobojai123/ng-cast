angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    result: '<'
  },
  controller: function(youTube){
    youTube.search(youTube)
  },
  templateUrl: 'src/templates/search.html'
});
