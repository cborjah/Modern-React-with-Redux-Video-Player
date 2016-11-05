import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { API_KEY } from '../config/credentials';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { // State is reserved for interactivity, data that changes over time.
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('wrc 2016');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => { // Downward Data Flow: The most parent component in an application should be responsible for fetching data. In this case it is the App component.
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); // Equivalent to: this.setState({ videos: videos }). Works when key AND property have the same name.
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); // Useful for throttling user input.

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch }/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
