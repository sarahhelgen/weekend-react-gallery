import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  let [galleryList, setGalleryList] = useState([]); //putting list of photos in state

  //creating a function with an axios get request to request photos from server and put on DOM
  const getPhotos = () => {
    console.log('in getPhotos');
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) => {
      console.log('Response.data is', response.data);
      setGalleryList(response.data); //using the setGalleryList function from useState to the response from the server
    }).catch((error) => { //catch any errors
      console.log('Error with GET!', error);
      alert('Error making GET request.');
    });
  }//end getPhotos

  // creating a function with an axios put request to update/like a photo after it is clicked and display on DOM
  const likePhotos = (galleryId) => {
    console.log('in likePhotos');
    console.log('galleryId is', galleryId);
    //axios PUT request updated the like on the DOM by id
    axios({
      method: 'PUT',
      url: `/gallery/like/${galleryId}`,
    }).then(function (response) {
      console.log('Liking photo!');
      getPhotos(); //calling the photos again to rerender on DOM
    }).catch(function (error) { //catch any errors
      console.log('error with PUT', error);
      alert('you have an error with PUT!');
    });
  }//end likePhotos

  //get photos on page load
  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      {/* passing props down to GalleryList */}
      <GalleryList key={galleryList.id} galleryList={galleryList} likePhotos={likePhotos} /> 
    </div>
  );
}

export default App;
