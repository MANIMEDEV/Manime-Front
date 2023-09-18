import React from 'react';
import { SBody } from './Style';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { Container } from './styles';
import emailSend from "../../../assets/ChatAssets/EmailSend.png"

const schema = yup
    .object({
        message: yup.string().required('Mensagem é obrigatoria').trim(),
    })
    .required();
type FormData = yup.InferType<typeof schema>;
interface IChatInput {
    sendMessage: (newMessage: string) => void
}
const ChatInput: React.FC<IChatInput> = ({ sendMessage }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data: FormData) => {
        sendMessage(data.message);
        reset()
    };

    return (
        <SBody onSubmit={handleSubmit(onSubmit)}>
            <textarea id='message' placeholder='Digite sua mensagem aqui' {...register('message')} />
            <button className="sendMessage" type='submit'><img src={emailSend} alt="" /></button>
        </SBody>
    );
}

export default ChatInput;