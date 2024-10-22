import React, { Component } from 'react';
import { BrowseBar, FilterOptions, GamesSection } from "../components/index";
import Loader from '../assets/loader.svg';
import '../assets/loader.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      loading: false, // Track loading state
    };
  }

  API_URL = "http://localhost:5038";

  async componentDidMount() {
    await this.getGames();
  }

  async getGames() {
    this.setState({ loading: true }); // Set loading to true before fetching data
    try {
      const response = await fetch(`${this.API_URL}/api/gamehub/getGames`);
      const data = await response.json();
      this.setState({ games: data });
    } catch (error) {
      console.error("Error fetching games:", error);
    } finally {
      this.setState({ loading: false}); // Set loading to false after fetching data
    }
  }

  render() {
    const { games, loading } = this.state;
    return (
      <div>
        <BrowseBar />
        <FilterOptions />
        
        {loading && (
          <div className="loader">
            <img src={Loader} alt="Loading..." style={{ width: '70px', height: '70px' }} />
          </div>
        )}
        
        {!loading && <GamesSection games={games} />}
      </div>
    );
  }
}

export default Home;