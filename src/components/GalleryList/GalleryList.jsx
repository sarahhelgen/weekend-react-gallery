import GalleryItem from '../GalleryItem/GalleryItem.jsx';


function GalleryList({ galleryList, likePhotos}) {



    return (
        <>
            <p>Gallery goes here</p>
            {/* Mapping each galleryItem on to the DOM, like running a for loop in React */}
            {galleryList.map(galleryItem => (
                // Passing props down to galleryItem
                <GalleryItem key={galleryList.id} galleryItem={galleryItem} likePhotos={likePhotos} />
            ))}
        </>


    )//end return 
}//end GalleryList

export default GalleryList;