import {useState} from 'react';

function GalleryItem({ galleryItem , likePhotos }) { //passing props down to galleryItem

    const [togglePhoto, setTogglePhoto ] = useState(true); //creating state for toggling photo and description
    const [likes, setLikes ] = useState(0); //creating state for liking photos

    //this function pulls the id of the photo and on click of the like button updates the like count on the DOM
    const handleLike = (galleryId) => {
        console.log('in handleLike');
        likePhotos(galleryId);
        setLikes(likes + 1);
    }//end handleLike


    return (
        <div className="photo-info">
            {/* using ternary operator to toggle between photo and photo description after a user clicks on the photo. */}
            {togglePhoto ? (<img src={galleryItem.path} onClick={() => setTogglePhoto(false)}/>) : 
            (<p onClick={() => setTogglePhoto(true)}> {galleryItem.description}</p>)}
            <button onClick={() => handleLike(galleryItem.id)}>Like!</button>
            <div>Likes: {likes} </div>
        
        </div>
    )//end return
}//end GalleryItem

export default GalleryItem;