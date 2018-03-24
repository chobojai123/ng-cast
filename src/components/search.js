angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    result: '<'
  },
  controller: function(){
    this.result = function(){
    }
  },
  templateUrl: 'src/templates/search.html'
});
