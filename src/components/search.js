angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    result: '<',
    inputVal: '<',
    service: '<'
  },

  templateUrl: 'src/templates/search.html'
});
