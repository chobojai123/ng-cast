angular.module('video-player')
.service('youTube', function($http){
  this.search = function(query, callback){
    options = {
      q: query,
      maxResults: 5,
      key: window.YOUTUBE_API_KEY,
      embeddable: true,
      part: 'snippet',
      type: 'video'
    },
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: options
    }).then(function success(params){
        callback(params.items)
      }, function error (params){
          console.log("Error", params)
         });
  }
  // TODO

});
