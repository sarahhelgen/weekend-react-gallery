import GalleryItem from '../GalleryItem/GalleryItem.jsx';


function GalleryList({ galleryList }, { likePhotos }) {



    return (
        <>
            <p>Gallery goes here</p>
            {galleryList.map(galleryItem => (
                <GalleryItem key={galleryList.id} galleryItem={galleryItem} likePhotos={likePhotos} />
            ))}
        </>


    )//end return 
}//end GalleryList

export default GalleryList;