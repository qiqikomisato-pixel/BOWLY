import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        credentials: 'include',
    }),
    tagTypes: ['User', 'Product', 'Order'],
    endpoints: (builder) => ({
        login: builder.mutation({
            queryFn: async (credentials) => {
                await new Promise(r => setTimeout(r, 500))

                const isAdmin = credentials.email === 'admin@gmail.com'
                    && credentials.password === 'admin123'

                if (!credentials.email || !credentials.password) {
                    return { error: { status: 400, data: { error_code: 'validation.required' } } }
                }

                const user = {
                    name: isAdmin ? 'Администратор' : 'Пользователь',
                    email: credentials.email,
                    role: isAdmin ? 'admin' : 'user',
                }

                return { data: { user } }
            },
        }),
        register: builder.mutation({
            queryFn: async (data) => {
                await new Promise(r => setTimeout(r, 500))

                if (!data.name || !data.email || !data.password) {
                    return { error: { status: 400, data: { error_code: 'validation.required' } } }
                }

                if (data.password !== data.confirmPassword) {
                    return { error: { status: 400, data: { error_code: 'auth.passwordMismatch' } } }
                }

                const user = {
                    name: data.name,
                    email: data.email,
                    role: 'user',
                }

                return { data: { user } }
            },
        }),
    }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
} = api