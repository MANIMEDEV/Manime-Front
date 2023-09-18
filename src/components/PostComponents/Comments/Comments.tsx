import { userInfo } from 'os';
import React, { useState } from 'react';
import HeartLike from '../../HeartLike/HeartLike';
import { LiaCommentDots } from "react-icons/lia"
import { SComment } from './styled';
import NewComment from './NewComment';

// import { Container } from './styles';
interface Icomment {
    user: {
        id: number | string;
        nickname: string;
        userProfileImg: string;
    }
}
const CommentPost: React.FC<Icomment> = ({ user }: Icomment) => {
    const [responseIsOpen,setResponseIsOpen] = useState(false);
    return <SComment>
        <div className="card">
            <div className="card-body">
                <div className='CommentUserInfos'>
                    <img src={user.userProfileImg} alt="" />
                    <h3>{user.nickname}</h3>
                </div>

                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>

                <div className="cardInteractions">
                    <HeartLike /> <span className="numLikes">0</span>
                    <button className="" onClick={()=>{
                        setResponseIsOpen(!responseIsOpen)
                    }}>
                        <LiaCommentDots className="postFooterIcon" />
                    </button>
                    <span className="numComments">0</span>
                </div>
            </div>
            {responseIsOpen == true ? <NewComment/> : null}
            
        </div>

    </SComment>;
}

export default CommentPost;