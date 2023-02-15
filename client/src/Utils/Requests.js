import Api from './Api'

export async function login(user){
    const res = await Api.post(`/auth/login`,user);
    return res.data
}

export async function register(user){
    const res = await Api.post(`/auth/register`,user);
    return res.data
}