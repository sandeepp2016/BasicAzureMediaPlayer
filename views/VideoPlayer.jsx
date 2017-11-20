
/* globals amp */

import React, { Component } from 'react';

export default class VideoPlayer extends Component {

	constructor (props){
     super(props);

		 // this.play = this.play.bind(this);
		 this.state = {
         myPlayer:null
      }
}
componentDidMount() {
	var that = this;
   console.log("this.props.id",this.props.id);
	if(!this.state.myPlayer) {
	var myPlayer=amp(''+this.props.id ,{ /* Options */
		        logo: { "enabled": false },
		        techOrder: ["azureHtml5JS", "flashSS", "html5FairPlayHLS","silverlightSS", "html5"],
		        "nativeControlsForTouch": false,
		        autoplay: false,
		        controls: true,
		        width: "350",
		        height: "300",
		        poster: ""
		    }, function() {
		        console.log('Good to go!');
						//this.muted(true);
		        this.addEventListener('ended', function() {
		            console.log('Finished!');
		        });
		     }
		  );
			myPlayer.src([{
				 src:  that.props.url,
				 type: "application/vnd.ms-sstr+xml"
		 }]);
			 myPlayer.pause();
       this.state.myPlayer = myPlayer;
     }
			else {
        this.state.myPlayer.pause();
      }

 }

// play () {
//   var that = this;
// 	console.log(this.props.id);
// 	var myPlayer = this.state.myPlayer;
//
// 	myPlayer.ready(function(){
// 			 var myPlayer = this;
// 			 myPlayer.play();
// 	 });
//
// 	}

	render () {
		return (
			<div>
			<video id={this.props.id} controls className="amp-big-play-centered azuremediaplayer amp-default-skin player ">
        <p className="amp-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video</p>
		  </video>

      </div>
		)
	}
}
