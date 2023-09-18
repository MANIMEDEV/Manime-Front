import React, { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext';


const NewComment: React.FC = () => {

    const { user } = useContext(UserContext);

    return (
        <div className="">
            <input className="inputComment" type='text' placeholder='adicione um novo comentario!' />
            <button type="button" className="sendComment">Postar</button>
        </div>
    );
}

export default NewComment;