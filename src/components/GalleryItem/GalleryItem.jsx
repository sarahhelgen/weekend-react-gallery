import {useState} from 'react';

function GalleryItem({ galleryItem , likePhotos }) {

    const [togglePhoto, setTogglePhoto ] = useState(true);
    const [likes, setLikes ] = useState(0);

    const handleLike = (galleryId) => {
        console.log('in handleLike');
        likePhotos(galleryId);
        setLikes(likes + 1);
    }//end handleLike

    const handlePhotoToggle = () => {
        console.log('in handlePhotoToggle');
        // setViewPhoto(viewPhoto);
    }//end handlePhotoToggle


    return (
        <>
        
            {togglePhoto ? (<img src={galleryItem.path} onClick={() => setTogglePhoto(false)}/>) : 
            (<p onClick={() => setTogglePhoto(true)}> {galleryItem.description}</p>)}
             <button onClick={() => handleLike(galleryItem.id)}>Like!</button>
            <div>Likes: {likes} </div>


        </>

    )//end return


}//end GalleryItem

export default GalleryItem;