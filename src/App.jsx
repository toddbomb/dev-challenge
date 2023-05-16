import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import axios from 'axios';

function App() {
  const [nasaImages, setNasaImages] = useState([]);
  const [unsplashImages, setUnsplashImages] = useState([]);

  const handleSearch = async (searchTerm) => {
    // Perform search functionality with the search term
    setNasaImages(await fetchNasaImages(searchTerm));
    setUnsplashImages(await fetchUnsplashImages(searchTerm));

    console.log('Search term:', searchTerm);
  };

  const fetchNasaImages = async (searchTerm) => {
    try {
      const response = await axios.get('https://images-api.nasa.gov/search', {
        params: {
          q: searchTerm,
          page_size: 20,
          media_type: "image"
        }
      });
      const data = response.data.collection.items.map((image) => {
        return image.links[0].href; 
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const fetchUnsplashImages = async (searchTerm, api_key) => {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          client_id: "Unsplash API key from email",
          query: searchTerm,
          per_page: 20
        }
      });
      const data = response.data.results.map((image) => {
        return image.urls.small;
      })
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    };
  }

  return (
    <>
      <h1>NASA Image Comparing</h1>
      <p>This is a very simple tool that lets a user query both the NASA image database and the Unsplash image database at the same time to compare images.</p>
      <div>
        <Search onSearch={handleSearch} />
      </div>
      <div className='main'>
        <h2>NASA Images</h2>
        <div className='images-container'>
          {
            nasaImages.map((imageLink) => {
              return (
                <img key={imageLink} src={imageLink}></img>
              )
            })
          }
        </div>
        <br></br>
        <h2>Unsplash Images</h2>
        <div className="images-container">
          {
            unsplashImages.map((imageLink) => {
              return (
                <img key={imageLink} src={imageLink}></img>
              )
            })
          }
        </div>
      </div>
      <div>
        <footer>
          <p> made by Tushar Aggarwal</p>
        </footer>
      </div>
    </>
  )
}

export default App
