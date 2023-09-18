
import React, { useEffect, useState } from 'react';
import { SContainer, SContent } from './style';
import Post from '../../components/PostComponents/Post/Post';
import { api } from '../../services/api';
import { TPosts } from '../../interfaces/post.interfaces';
import { v4 as uuidv4 } from 'uuid';
const IndexPage: React.FC = () => {
    const [screenSize, setScreenSize] = useState({ width: 0 });
    const [posts, setPosts] = useState<TPosts>([])

    useEffect(() => {
        setScreenSize({ width: window.innerWidth });
        const handleResize = () => {
            setScreenSize({ width: window.innerWidth });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        const getPosts = async () => {
            const data = await api.get(`/posts`, {
                headers: {
                    Authorization: "bear " + localStorage.getItem('@MANIME:TOKEN')
                }
            });
            console.log(data.data);
            setPosts(data.data);

        }
        getPosts();
    }, []);

    return (<>
        <SContainer>
            <SContent>
                {posts.map(post => <Post description={post.description}
                    id={post.id}
                    imgs={post.imgs}
                    numComments={post.numComments}
                    numLikes={post.numLikes}
                    user={post.user}
                    likes={post.likes}
                    key={uuidv4() + "post"}
                />)}

            </SContent>
        </SContainer>



    </>);
}

export default IndexPage;