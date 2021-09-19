# Project Name

React Photo Gallery

## Description

Created a photo gallery using React to display photos on the DOM. This app has three different components and passes props down from App.jsx to GalleryList.jsx to GalleryItem.jsx. In addition, when you click on a photo, the image will toggle back and forth between the image and a description of the image. Users can also "like" a photo by clicking the like button and the number of likes will appear on screen. 

I created the following to do list to make this app:

- [x] npm install

- [x] find some pictures
    - [x] add properties to photos and resize after added to gallery.data.js

[x] create two components:
-  [x] GalleryList
    - [x] pass this component the data stored in App.jsx with props 
    - [x] loop over/map the gallery data items 
- [x] GalleryItem
    - [x] images should be displayed in this component 
    - [x] use conditional rendering to swap the image with the description on the page 
    - [x] append a like button for each image 
    - [x] on click of like button, use axios put to update the like count `/gallery/like/:id` [
    - [x] display the likes on the page 

- [x] axios GET request
- goes in App.jsx


- [x] axios PUT request
- goes in App.jsx

- [x] update readme

- [x] make sure to add code comments to describe what you're doing!

Stretch Goals if time:

- [] move gallery data into a database
- [] use material UI for CSS 
