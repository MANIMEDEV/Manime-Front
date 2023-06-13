import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ColorButton, CssTextField, SFormLogin } from './styles';
import { UserContext } from '../../providers/UserContext';


const schema = yup
    .object({
        login: yup.string().required('Email ou Nickname obrigatorio'),
        password: yup.string().required('Senha é obrigatoria'),
    })
    .required();
type FormData = yup.InferType<typeof schema>;

const LoginForm: React.FC = () => {
    const { userLogin } = useContext(UserContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data: FormData) => {
        userLogin(data);
    };

    return (
        <SFormLogin onSubmit={handleSubmit(onSubmit)}>
            <CssTextField required id="login"  {...register('login')} />
            <CssTextField required id="password"   type='password' {...register('password')} />
            <ColorButton type='submit'>Entrar</ColorButton>
            <a href="/">esqueceu a senha?</a>
        </SFormLogin>
    );
}

export default LoginForm;