import React, { Component } from 'react';
import './AddGame.css';

class AddGame extends Component {
  API_URL = "http://localhost:5038";

  state = {
    gameName: '',
    gameDescription: '',
    thumbnailFileName: 'No file chosen',
    gameFileName: 'No file chosen',
    thumbnailFile: null,
    gameFile: null
  };

  handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      if (type === 'thumbnail') {
        this.setState({ thumbnailFileName: file.name, thumbnailFile: file });
      } else if (type === 'game') {
        this.setState({ gameFileName: file.name, gameFile: file });
      }
    }
  };

  addClick = async () => {
    const { gameName, gameDescription, thumbnailFile, gameFile } = this.state;

    const data = new FormData();
    data.append("newGame", gameName);
    data.append("description", gameDescription);
    if (thumbnailFile) data.append("thumbnail", thumbnailFile);
    if (gameFile) data.append("gameFile", gameFile);

    try {
      const response = await fetch(`${this.API_URL}/api/gamehub/addGame`, {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      console.log("Game Successfully Added", result);
    } catch (error) {
      console.error("Error adding game:", error);
    }
  };

  render() {
    return (
      <div className='main-page'>
        <div className='input-container'>
          <div className='mid-section'>
            <div className='add-section'>
              <h1>Add a Game</h1>

              <label>Name</label>
              <input
                className='inputFields'
                placeholder='Enter the Game Name'
                type="text"
                value={this.state.gameName}
                onChange={(e) => this.setState({ gameName: e.target.value })}
              />

              <label>Description</label>
              <input
                className='inputFields'
                placeholder='Enter a Game Description'
                type="text"
                value={this.state.gameDescription}
                onChange={(e) => this.setState({ gameDescription: e.target.value })}
              />

              <label>Upload Game Thumbnail</label>
              <div className="file-upload-wrapper">
                <input
                  id="thumbnail-upload"
                  type="file"
                  accept='.png, .jpeg, .gif'
                  onChange={(e) => this.handleFileChange(e, 'thumbnail')}
                  style={{ display: 'none' }}
                />
                <label htmlFor="thumbnail-upload" className="custom-button">
                  Choose file
                </label>
                <span className="file-name">{this.state.thumbnailFileName}</span>
              </div>

              <label>Upload Game File</label>
              <div className="file-upload-wrapper">
                <input
                  id="game-file-upload"
                  type="file"
                  accept='.zip'
                  onChange={(e) => this.handleFileChange(e, 'game')}
                  style={{ display: 'none' }}
                />
                <label htmlFor="game-file-upload" className="custom-button">
                  Choose file
                </label>
                <span className="file-name">{this.state.gameFileName}</span>
              </div>

              <button className='custom-button' onClick={this.addClick}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddGame;