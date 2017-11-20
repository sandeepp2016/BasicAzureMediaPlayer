import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './VideoPlayer';
class Demo extends React.Component {
   constructor(props){
     super(props);
     this.state = { src :"https://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest"}
   }
 render(){
     return (
      <VideoPlayer id={Date.now()} url={this.state.src}/>
     );


   }
 }
ReactDOM.render(<Demo/>, document.getElementById('content'));
