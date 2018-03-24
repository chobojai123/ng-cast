angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  controller: function(){
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = function(clicked){
      console.log('hi');
      this.currentVideo = clicked;
    }
    this.searchResults = function(){
    }
    this.selectVideo = this.selectVideo.bind(this);
  }
  
});
