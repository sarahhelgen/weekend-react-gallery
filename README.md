# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

To Do List:

[x] NPM install

[x] find some pictures
- add properties to photos after added to gallery.data.js

[x]create HTML skeleton

[x] create two components:
- GalleryList
    - pass this component the data stored in App.jsx with props
    - loop over/map the gallery data items
- GalleryItem
    - images should be displayed in this component
    - use conditional rendering to swap the image with the description on the page
    - append a like button for each image
    - on click of like button, use axios put to update the like count `/gallery/like/:id`
    - display the likes on the page

[] GET axios
- goes in App.jsx

[x] GET route
- goes in gallery.router.js

[] PUT axios
- this will go in GalleryItem.jsx (I think)

[x] PUT route
- goes in gallery.router.js

[ ] make sure to add code comments to describe what you're doing!

Stretch Goals if time:

[] move gallery data into a database
[] use material UI for CSS 
