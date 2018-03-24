angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  controller: function(youTube){
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.inputVal = '';
    this.selectVideo = (c) => {
      this.currentVideo = this.videos[c];
    }
    this.searchResults = (result) => {
      this.videos = result;
      this.currentVideo = this.videos[0];
    }
    this.result = (input) => {
      youTube.search(input, this.searchResults)
    }
    youTube.search('cats', this.searchResults)
  }
});
