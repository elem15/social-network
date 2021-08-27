import axios, {AxiosResponse} from "axios";
import {ProfileType} from "../Types/Types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '75852ffb-adc3-4383-ad7d-adeade81f55b'},
})

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`, {})
    },
    getFollow(userId: number) {
        return instance.get(`follow/${userId}`)
    }
}


export const profileAPI = {
    getProfile(userId: number = 17889) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    updateProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
    },
    uploadPhoto(photo: any) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}
type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LoginMeResponseType = {
    data: {
        userId:number
    }
    resultCode: ResultCodeEnum | ResultCodeForCaptcha
    messages: Array<string>
}
export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe=false, captcha: string | null = null) {
        return instance.post<LoginMeResponseType>(`auth/login`, 
        {email, password, rememberMe, captcha}).then(res => res.data)
    },
    exit() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    captcha() {
        return instance.get(`security/get-captcha-url`)
    }
}