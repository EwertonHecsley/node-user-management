import { z } from 'zod';

export const createUserSchema = z.object({
    name: z.string({
        required_error: 'Campo name é obrigatório.'
    }),
    username: z.string({
        required_error: 'Campo username é obrigatório.'
    }),
    email: z.string({
        required_error: 'Campo email é obrigatório.'
    }).email({
        message: 'Formato de email inválido.'
    }),
    password: z.string({
        required_error: 'Campo password é obrigatório.'
    }).min(4, {
        message: 'Tamanho da senha mínimo de 4 caracteres.'
    })
});