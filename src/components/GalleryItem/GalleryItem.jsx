

function GalleryItem ({galleryItem}) {


    return(
        <>
        <div><img src={galleryItem.path}></img><button>Like!</button></div>
            
        
        </>

    )//end return


}//end GalleryItem

export default GalleryItem;