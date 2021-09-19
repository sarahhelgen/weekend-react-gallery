import {useState} from 'react';

function GalleryItem({ galleryItem , likePhotos }) {

    const [viewPhoto, setViewPhoto ] = useState(true);
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
        
            

        



            <div><img src={galleryItem.path}></img></div>
            <button onClick={() => handleLike(galleryItem.id)}>Like!</button>
            {/* <button onClick={() => handlePhotoToggle() }>Description</button>
            {viewPhoto ? (<img src={galleryItem.path} />) : ( <p>{galleryItem.description}</p>)} */}
            <div>Likes: {likes} </div>


        </>

    )//end return


}//end GalleryItem

export default GalleryItem;