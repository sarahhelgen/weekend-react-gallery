
function GalleryList({galleryList}) {



    return (
        <>
            <p>Gallery goes here</p>
            {galleryList.map(galleryListItem => (<p>{galleryListItem.path} {galleryListItem.description}</p>))}
        </>


    )//end return
}//end GalleryList

export default GalleryList;