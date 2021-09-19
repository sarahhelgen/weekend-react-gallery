import {useState} from 'react';

function GalleryItem({ galleryItem }, { likePhotos }) {

    const [viewPhoto, setViewPhoto ] = useState(true);

    const handleLike = (galleryId) => {
        console.log('in handleLike');
        likePhotos(galleryId);
    }//end handleLike

    const handlePhotoToggle = () => {
        console.log('in handlePhotoToggle');
        setViewPhoto(!viewPhoto);
    }//end handlePhotoToggle


    return (
        <>
        
            

        



            <div><img src={galleryItem.path}></img></div>
            <button onClick={() => handleLike(galleryItem.id)}>Like!</button>
            <button onClick={() => handlePhotoToggle() }>Description</button>
            {viewPhoto ? (<img src={galleryItem.path} />) : ( <p>{galleryItem.description}</p>)}
            Likes:


        </>

    )//end return


}//end GalleryItem

export default GalleryItem;