import React from 'react'
import LightboxModal from '../Components/LightBoxModal';
const _mock={
    
    cover: (index) => `https://minimal-assets-api.vercel.app/assets/images/covers/cover_${index + 1}.jpg`,
    feed: (index) => `https://minimal-assets-api.vercel.app/assets/images/feeds/feed_${index + 1}.jpg`,
    product: (index) => `https://minimal-assets-api.vercel.app/assets/images/products/product_${index + 1}.jpg`,
    avatar: (index) => `https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_${index + 1}.jpg`,
}
const imagesLightbox = [...Array(8)].map((_, index) => _mock.feed(index + 1));

const PostDetails = ({ open, onClose, postDetails }) => {
    // const imagesLightbox =postDetails?.media?.map((_image) => _image.path);
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [openLightbox, setOpenLightbox] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(0);
  
    const handleOpenLightbox = (url) => {
      const selectedImage = imagesLightbox.findIndex((index) => index === url);
      setOpenLightbox(true);
      setSelectedImage(selectedImage);
    };
    return (
        <>
            <LightboxModal
                images={imagesLightbox}
                mainSrc={imagesLightbox[selectedImage]}
                photoIndex={selectedImage}
                setPhotoIndex={setPhotoIndex}
                isOpen={open}
                onCloseRequest={onClose}
            />
            {/* <LightboxModal
                images={imagesLightbox}
                mainSrc={imagesLightbox[selectedImage]}
                photoIndex={selectedImage}
                setPhotoIndex={setSelectedImage}
                isOpen={openLightbox}
                onCloseRequest={() => setOpenLightbox(false)}
            /> */}
        </>
    )
}

export default PostDetails

