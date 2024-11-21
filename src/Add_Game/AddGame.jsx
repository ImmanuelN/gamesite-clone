import React, { Component } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../config/firebase'; 
import './AddGame.css';
import { categories } from '../assets/categories';
import '../assets/loader/loader.css';
import loader from '../assets/loader/loader.svg';
import botImg from '../components/images/bot2.svg'

class AddGame extends Component {
  API_URL = "http://localhost:5038";

  state = {
    gameName: '',
    gameDescription: '',
    thumbnailFileName: 'No file chosen',
    gameFileName: 'No file chosen',
    thumbnailFile: null,
    gameFile: null,
    uploading: false, // Track upload status
    selectedCategory: '',
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

  // Function to handle uploading files to Firebase
  uploadFileToFirebase = async (file, filePath) => {
    const fileRef = ref(storage, filePath);
    await uploadBytes(fileRef, file);  // Upload the file
    return await getDownloadURL(fileRef);  // Return the download URL
  };

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };

  addClick = async () => {
    const { gameName, gameDescription,selectedCategory, thumbnailFile, gameFile } = this.state;

    this.setState({ uploading: true });

    try { 
      // Upload thumbnail and game file to Firebase Storage
      const thumbnailUrl = await this.uploadFileToFirebase(thumbnailFile, `thumbnails/${thumbnailFile.name}`);
      const gameFileUrl = await this.uploadFileToFirebase(gameFile, `games/${gameFile.name}`);
  
      const data = {
        gameName,
        gameDescription,
        selectedCategory,
        thumbnailUrl,  // Firebase storage URL for thumbnail
        gameFileUrl,   // Firebase storage URL for game file
      };

      console.log("Game Data:", data);

      // Send data to API
      const response = await fetch(`${this.API_URL}/api/gamehub/addGame`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Game Successfully Added", result);
    } catch (error) {
      console.error("Error adding game:", error);
    } finally {
      this.setState({ uploading: false });
    }
  };

  render() {
    const { uploading } = this.state;

    return (
      <div className='main-page'>
        <div className='input-container'>
          <div className='mid-section'>
            <div className='add-section'>
              <img src={botImg} alt='bot' className='botImg'/>
              <h1>Upload Your Game </h1>
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

              <label>Category</label>
              <select
                className='inputFields1'
                value={this.state.selectedCategory}
                onChange={this.handleCategoryChange}
              >
                <option value="">Select a Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>

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

              <button className='custom-button-sbmit' onClick={this.addClick} disabled={uploading}>
                Submit
              </button>

              {uploading && (
                <div className="loader-overlay">
                  <img src={loader} alt="Loading..." style={{ width: '30px', height: '30px' }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddGame;