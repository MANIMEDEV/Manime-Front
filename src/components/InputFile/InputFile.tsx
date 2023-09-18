import React, { useState } from 'react';
import { Container, Header, FileInput } from './style';


interface IInputFile {
    setData: React.Dispatch<React.SetStateAction<FileList>>
}
const InputFile = ({setData}:IInputFile) => {
    const [imgs, setImgs] = useState([]);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        const urls = [];

        for (let i = 0; i < files.length; i++) {
            urls.push(URL.createObjectURL(files[i]));
        }

        setImgs(urls);
        setData(files);
    };
    return (
        <Container>
            {imgs.length > 0 ? <Header>
                {imgs.map(img => <img src={img}></img>)}

            </Header> : null}

            <label htmlFor='images' className='labelInputFile'>Selecinar fotos/gifs</label>
            <FileInput id="images" multiple type="file" accept={"image/png, image/jpg, image/jpeg, image/gif"} onChange={handleFileChange} />
        </Container>
    );
};

export default InputFile;