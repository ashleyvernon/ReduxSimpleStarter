import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAyEhg41STgz3gFlaSzIrAunGOag47DIGE';

//Creat a new component. This component should produce some HTML

class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
			//ES6: this.setState({ videos: videos })
			this.setState({ videos });
		});
	}

	render(){
		return (
		  <div>
		  	<SearchBar />
		  	<VideoList videos={this.state.videos} />
		  </div>
		);
	}
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));