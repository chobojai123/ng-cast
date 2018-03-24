angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  controller: function(){
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = (c) => {
      this.currentVideo = this.videos[c];
    }
    this.searchResults = (results) => {
      this.videos = results;
      this.currentvideo = this.videos[0];
    }
    // this.selectVideo = this.selectVideo.bind(this);
    // this.searchResults = this.searchResults.bind(this);
    // this.onClick = this.onClick.bind(this);
  }
  
});
