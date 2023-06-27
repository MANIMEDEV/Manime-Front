import React, {useState} from 'react';
import { SPost } from './styled';

// import { Container } from './styles';
interface IPost {
    userName: string;
    description: string;
    userProfileImg: string;
    imgPost: string[];
    children: any;

}


const Post: React.FC<IPost> = (post:IPost) => {
    return (
    <SPost>
        <div className='postUserInfos'>
            <img src={post.userProfileImg} alt="" />
            <h3>{post.children}</h3>
        </div>
        <div className="postBody">
            <p className="descripton">
                {post.description}
            </p>
            {post.imgPost.map((img,i) =>  <img key={i+"imgPost"+post.userName} src={img} alt="" />)}
        </div>
    </SPost>
    );
}

export default Post;