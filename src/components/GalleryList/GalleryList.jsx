import GalleryItem from '../GalleryItem/GalleryItem.jsx';


function GalleryList({galleryList},{likePhotos}) {



    return (
        <>
            <p>Gallery goes here</p>
            {galleryList.map(galleryItem => (
                <GalleryItem galleryItem={galleryItem}/>
            ))}
        </>


    )//end return 
}//end GalleryList

export default GalleryList;