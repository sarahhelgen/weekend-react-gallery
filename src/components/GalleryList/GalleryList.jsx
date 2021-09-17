
function GalleryList (props) {



    return(
        <>
        {
            props.list.map(galleryItem =>
              (<p>{galleryItem.path} {galleryItem.description}</p>))

        }
        </>


    )//end return
}//end GalleryList

export default GalleryList;