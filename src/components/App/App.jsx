import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import Axios from 'axios';
import {useState, useEffect } from 'react';

function App() {

  const getPhotos = () => {
    console.log('in getPhotos');
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) =>{
      console.log('Response.data is', response.data );
    }).catch((error) =>{
      console.log('Error with GET!', error );
      alert('Error making GET request.');
    });
  }//end getPhotos

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
