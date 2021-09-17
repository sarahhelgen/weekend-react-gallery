
function GalleryList({galleryList}) {



    return (
        <>
            <p>Gallery goes here</p>
            {galleryList.map(galleryListItem => (<div><img src={galleryListItem.path}></img><button>Like!</button></div>
            
            ))}
        </>


    )//end return <
}//end GalleryList

export default GalleryList;