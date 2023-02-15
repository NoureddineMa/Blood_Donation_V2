import Api from './Api'

export async function login(user){
    const res = await Api.post(`/auth/login`,user);
    return res.data
}