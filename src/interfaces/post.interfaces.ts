import { postSchemaResponse, postsSchemaResponse } from "../schemas/post.schemas";
import { IBaseUser } from "./users.interfaces";
import {z} from 'zod';

export interface Ipost {
    id: number | null;
    user:IBaseUser;
    numlikes: number;
    numComments: number;
    imgs: string[] | null;
    description: string | null;
}

export interface IpostRegister {
    numlikes: number;
    numComments: number;
    imgs: string[] | null;
    description: string | null;
}

export type TPosts = z.infer<typeof postsSchemaResponse>
export type TPost = z.infer<typeof postSchemaResponse>