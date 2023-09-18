import React, { useState } from 'react';
import { SBackdrop, SCard } from './style';
import InputFile from '../../InputFile/InputFile';
import { api } from '../../../services/api';

const CreatePost: React.FC = () => {
    const [description, setDescription] = useState('');
    const [imgs, setImgs] = useState<FileList | null>();
    const [loading,setLoading] = useState(false);
    const Submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!imgs) return;

        const formData = new FormData();
        for (let i = 0; i < imgs.length; i++) {
            formData.append('images', imgs[i]);
        }
        formData.append('description', description);

        try {
            setLoading(true);
            const newPost = await api.post('/posts', formData, {
                headers: {
                    authorization: "Bearer " + localStorage.getItem('@MANIME:TOKEN'),
                    "Content-Type": "multipart/form-data"
                }
            });

        } catch (error) {
            console.error('Erro ao enviar o post:', error);
        }finally{
            setLoading(false);
            window.location.reload();
        }
    };

    return (
        <SBackdrop>
            <SCard encType='multipart/form-data' onSubmit={Submit}>
                <textarea
                    className='Description'
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Digite tudo que quiser!'
                />
                <InputFile setData={setImgs} />
                <input type="submit" className='submitPost' value={loading? "publicando" :"publicar"} disabled={loading} />
            </SCard>
        </SBackdrop>
    );
};

export default CreatePost;
