import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  let [galleryList, setGalleryList] = useState([]);

  const getPhotos = () => {
    console.log('in getPhotos');
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) => {
      console.log('Response.data is', response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('Error with GET!', error);
      alert('Error making GET request.');
    });
  }//end getPhotos

  const likePhotos = (galleryId) => {
    console.log('in likePhotos');
    
    console.log('galleryId is', galleryId);
    axios({
      method: 'PUT',
      url: `/gallery/like/${galleryId}`,
    }).then(function (response) {
      console.log('Liking photo!');
      getPhotos();
    }).catch(function (error) {
      console.log('error with PUT', error );
      alert('you have an error with PUT!');
    });


  }//end likePhotos

  useEffect(() => {
    getPhotos();
  }, []);

  return (

    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList galleryList={galleryList} likePhotos={likePhotos}/>

    </div>

  );
}

export default App;
