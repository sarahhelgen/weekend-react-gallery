
function GalleryList({galleryList}) {



    return (
        <>
            <p>Gallery goes here</p>
            {galleryList.map(galleryListItem => (<img src={galleryListItem.path}></img>))}
        </>


    )//end return <
}//end GalleryList

export default GalleryList;