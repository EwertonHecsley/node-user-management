import { z } from 'zod';

export const loginSchema = z.object({
    usernameOrEmail: z.string({
        required_error: 'Campo username/email é obrigatório.'
    }),
    password: z.string({
        required_error: 'Campo password é obrigatório.'
    }).min(4, {
        message: 'Tamanho da senha mínimo de 4 caracteres.'
    })
});