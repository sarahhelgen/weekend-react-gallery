import { useState } from 'react';
import Box from '@mui/material/Box';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { makeStyles } from '@mui/styles';

function GalleryItem({ galleryItem, likePhotos }) { //passing props down to galleryItem

    const [togglePhoto, setTogglePhoto] = useState(true); //creating state for toggling photo and description
    const [likes, setLikes] = useState(0); //creating state for liking photos

    //this function pulls the id of the photo and on click of the like button updates the like count on the DOM
    const handleLike = (galleryId) => {
        console.log('in handleLike');
        likePhotos(galleryId);
        setLikes(likes + 1);
    }//end handleLike

    const useStyles = makeStyles({
        likeButton: {
            color: '#C9A959',
            display: 'inline-flex'
        }
    })

    const classes = useStyles();

    return (
        <Box p={1} sx={{ display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div className="container">
                {/* using ternary operator to toggle between photo and photo description after a user clicks on the photo. */}
                {togglePhoto ? (<img className="gallery-item" src={galleryItem.path} onClick={() => setTogglePhoto(false)} />) :
                    (<p onClick={() => setTogglePhoto(true)}> {galleryItem.description}</p>)}
                <div> <ThumbUpIcon className={classes.likeButton} onClick={() => handleLike(galleryItem.id)} />
                    Likes: {likes}
                </div>

            </div>
        </Box>
    )//end return
}//end GalleryItem

export default GalleryItem;