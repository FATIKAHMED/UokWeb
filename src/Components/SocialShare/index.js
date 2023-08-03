import {
    FacebookShareButton,
    TwitterShareButton,
    PinterestShareButton,
    RedditShareButton,
    TelegramShareButton,
} from 'react-share'
import { BsFacebook, BsTwitter, BsPinterest, BsTelegram, BsReddit } from "react-icons/bs";


const styles = {
    twitter:{
        color:"#1D9BF0",
        fontSize:'2rem'
    },
    facebook:{
        color:"#0F90F3",
        fontSize:'2rem'
    },
    telegram:{
        color:"#279ED9",
        fontSize:'2rem'
    },
    reddit:{
        color:"#FF4500",
        fontSize:'2rem'
    },
    pinterest:{
        color:"#CC0000",
        fontSize:'2rem'
    },
};
export default function SocialShare({ post }) {
    return (
        <>
            <TwitterShareButton
                title={post?.find}
                url={post?.media[0]?.path}
                hashtags={post?.tags}
                style={styles.twitter}
            >
                <span className="span">
                    <BsTwitter />
                </span>
            </TwitterShareButton>
            <FacebookShareButton
                url={"https://magnet-fishing.vercel.app/gallery"}
                quote={post?.location?.address}
                hashtags={post?.tags}
                // description={"Do check my recent find"}
                title={post?.find}
                style={styles.facebook}
            >
                <span className="span">
                    <BsFacebook />
                </span>
            </FacebookShareButton>
            <PinterestShareButton
                media={post?.media[0]?.path}
                url={"https://magnet-fishing.vercel.app/gallery"}
                quote={post?.location?.address}
                hashtags={post?.tags}
                // description={"Do check my recent find"}
                title={post?.find}
                style={styles.pinterest}
            >
                <span className="span">
                    <BsPinterest />
                </span>
            </PinterestShareButton>
            <RedditShareButton
                title={post?.find}
                url={"https://magnet-fishing.vercel.app/gallery"}
                style={styles.reddit}
                // media={post?.media[0]?.path}
                // quote={post?.location?.address}
                // hashtags={post?.tags}
                // description={"Do check my recent find"}
            >
                <span className="span">
                    <BsReddit />
                </span>
            </RedditShareButton>
            <TelegramShareButton
                 title={post?.find}
                 url={"https://magnet-fishing.vercel.app/gallery"}
                 style={styles.telegram}
                 // media={post?.media[0]?.path}
                 // quote={post?.location?.address}
                 // hashtags={post?.tags}
                 // description={"Do check my recent find"}
            >
                <span className="span">
                    <BsTelegram />
                </span>
            </TelegramShareButton>

        </>
    )
}