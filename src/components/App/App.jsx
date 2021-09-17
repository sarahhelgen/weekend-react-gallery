import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import axios from 'axios';
import {useState, useEffect } from 'react';

function App() {

  let [galleryList, setGalleryList] = useState([]);

  const getPhotos = () => {
    console.log('in getPhotos');
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) =>{
      console.log('Response.data is', response.data );
      setGalleryList(response.data);
    }).catch((error) =>{
      console.log('Error with GET!', error );
      alert('Error making GET request.');
    });
  }//end getPhotos

  useEffect(() => {
    getPhotos();
  }, []);

    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList = {galleryList}/>
        
      </div>
      
    );
}

export default App;
