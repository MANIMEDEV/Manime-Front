import React, { useContext } from 'react';
import { ColorButton, CssTextField, SFormRegistar } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../providers/UserContext';
// import { Container } from './styles';


const schema = yup
    .object({
        fullName: yup.string().required('Nome completo é obrigatorio'),
        nickname: yup.string().required('Nickname é obrigatorio'),
        email: yup.string().required('Email obrigatorio'),
        password: yup.string().required('Senha é obrigatoria'),
        Cpassword: yup.string().required('Senha é obrigatoria'),
        phone: yup.string().default(null),
    })
    .required();
type FormData = yup.InferType<typeof schema>;

const RegisterForm: React.FC = () => {


    const { userRegister } = useContext(UserContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        userRegister(data);
    };


    return (
        <SFormRegistar onSubmit={handleSubmit(onSubmit)}>
            <CssTextField required id="fullName" {...register('fullName')} type="text" />
            <CssTextField required id="nickname" {...register('nickname')} type="text"/>
            <CssTextField required id="email" {...register('email')} type="email"/>
            <CssTextField required id="password" {...register('password')} type='password'  />
            <CssTextField required id="Cpassword" {...register('Cpassword')} type='password'   />
            <CssTextField id="phone" {...register('phone')}  />
            <ColorButton  type='submit'>Registar</ColorButton>
        </SFormRegistar>
    );
}

export default RegisterForm;