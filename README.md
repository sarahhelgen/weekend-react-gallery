# React Photo Gallery



## Description

Created a photo gallery using React to display photos on the DOM. This app has three different components and passes props down from App.jsx to GalleryList.jsx to GalleryItem.jsx. In addition, when you click on a photo, the image will toggle back and forth between the image and a description of the image using conditional rendering. Users can also "like" a photo by clicking the like button and the number of likes will appear on screen. Used a bit of Material UI for styling.

I created and executed the following to do list to make this app:

- npm install

- find some pictures
    - add properties to photos and resize after added to gallery.data.js

- create two components:
-   GalleryList
    -  pass this component the data stored in App.jsx with props 
    - loop over/map the gallery data items 
-  GalleryItem
    - images should be displayed in this component 
    - use conditional rendering to swap the image with the description on the page 
    - append a like button for each image 
    - on click of like button, use axios put to update the like count `/gallery/like/:id` 
    - display the likes on the page 

- axios GET request
    - goes in App.jsx

-  axios PUT request
    - goes in App.jsx

- update readme

- make sure to add code comments to describe what you're doing!




## Screen Shot
![app image](./wireframes/gallery-screenshot.png)

## Built with:

  - React
  - Postgresql
  - Node.js
  - Axios
  - Express
  - PG
  - Material UI

## Acknowledgement

Thanks to my instructors Chris, Liz, Dane, and Kris and everyone at Prime Digital Academy for helping me learn the technical skills to build this!

## Support

If you have feedback or issues with the app, please reach out to me at sarah.helgen@gmail.com


