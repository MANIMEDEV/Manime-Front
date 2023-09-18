import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useContext } from 'react';
import { SPost } from './styled';
import Slider from "react-slick";
import HeartLike from "../../HeartLike/HeartLike";
import { LiaCommentDots } from "react-icons/lia";
import { PiShareNetworkBold } from "react-icons/pi";
import NewComment from "../Comments/NewComment";
import CommentPost from "../Comments/Comments";
import { IUser, UserContext } from "../../../providers/UserContext";
import { api } from "../../../services/api";
import { TPost } from "../../../interfaces/post.interfaces";
import { v4 as uuidv4 } from 'uuid';


const hostUrl: string | undefined = import.meta.env.VITE_HOST_URL;
const Post: React.FC<TPost> = (post: TPost) => {
    const settingsSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const { user } = useContext(UserContext);
    const [comments, setComments] = useState([1, 2]);
    const [commentsIsOpen, setCommentsIsOpen] = useState(false);
    const [isLiked, setisLiked] = useState(false);
    const [numLikes, setNumLikes] = useState(post.numLikes);

    useEffect(() => {
        if (post.likes) {
            post.likes.forEach(userLike => {
                if (userLike.user.id == user.id) {
                    setisLiked(true);
                }
            })
        }

    }, []);

    const like = async () => {

        if (!isLiked) {
            setNumLikes(numLikes + 1);
            setisLiked(true);
            const like = await api.post('/posts/' + post.id + "/like", {}, {
                headers: {
                    authorization: "Bearer " + localStorage.getItem('@MANIME:TOKEN')
                }
            });
        } else {
            setNumLikes(numLikes - 1);
            setisLiked(false);
            const deslike = await api.post('/posts/' + post.id + "/like", {}, {
                headers: {
                    authorization: "Bearer " + localStorage.getItem('@MANIME:TOKEN')
                }
            });
        }
    }

    return (
        <SPost>
            <div className='postUserInfos'>
                <img src={post.user.profileImg} alt="" />
                <h3>{post.user.nickname}</h3>
            </div>
            <div className="postBody">
                <p className="descripton">
                    {post.description}
                </p>
                <Slider className="postImgs" {...settingsSlider}>
                    {typeof (post.imgs) == "string" ? <div className='' key={uuidv4() + "imgPost" + post.user.nickname}>
                        <img src={"http://" + hostUrl + ":3000/imgsUploads/" + post.imgs} alt="" />
                    </div> : post.imgs.map((img) =>
                        <div className='' key={uuidv4() + "imgPost" + post.user.nickname}>
                            <img src={"http://" + hostUrl + ":3000/imgsUploads/" + img} alt="" />
                        </div>
                    )}
                </Slider>
            </div>

            <div className="postFooter">
                <HeartLike cbLike={like} isLiked={isLiked} /> <span className="numLikes">{numLikes}</span>
                <button className="" onClick={() => {
                    setCommentsIsOpen(!commentsIsOpen);
                }}>
                    <LiaCommentDots className="postFooterIcon" />
                </button>
                <span className="numComments">0</span>
                <button>
                    <PiShareNetworkBold className="postFooterIcon" />
                </button>
            </div>
            <NewComment />

            {
                commentsIsOpen ?
                    comments.map(comment => <CommentPost user={{ id: 1, nickname: "userTeste", userProfileImg: "https://pm1.aminoapps.com/6377/40e07b8abe0a0f1c6db5d0e5ca501f712251ff13_hq.jpg" }} ></CommentPost>)
                    : null
            }


        </SPost >
    );
}

export default Post;