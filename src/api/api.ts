import axios, {AxiosResponse} from "axios";
import {PhotosType, UserType} from "../Types/Types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '75852ffb-adc3-4383-ad7d-adeade81f55b'},
})

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
type UserResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
type FollowResponseType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: {}
}
type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    fullName: string,
    lookingForAJob: true,
    lookingForAJobDescription: string,
    photos: PhotosType,
    userId: number
}
type ContactsType = {
    facebook: string ,
    github: string,
    instagram: string,
    mainLink: string,
    twitter: string,
    vk: string,
    website: string,
    youtube: string,
}
type StatusResponseType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: {}
}
type ProfileResponseType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: {}
}
type PhotoResponseType = {
    data: {photos: PhotosType}
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type CaptchaResponseType = {
    url: string
}
export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 10) {
        return instance.get<UserResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    follow(id: number) {
        return instance.post<FollowResponseType>(`follow/${id}`).then(res => res.data)
    },
    unFollow(id: number) {
        return instance.delete<FollowResponseType>(`follow/${id}`, {}).then(res => res.data)
    },
    getFollow(userId: number) {
        return instance.get<boolean>(`follow/${userId}`).then(res => res.data)
    }
}
export const profileAPI = {
    getProfile(userId: number = 17889) {
        return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data)
    },
    getStatus(userId: number = 17889) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<StatusResponseType>(`profile/status`, {status: status}).then(res => res.data)
    },
    updateProfile(profile: ProfileType) {
        return instance.put<ProfileResponseType>(`profile`, profile).then(res => res.data)
    },
    uploadPhoto(photo: any) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put<PhotoResponseType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    }
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
        return instance.delete<ProfileResponseType>(`auth/login`).then(res => res.data)
    }
}

export const securityAPI = {
    captcha() {
        return instance.get<CaptchaResponseType>(`security/get-captcha-url`).then(res => res.data)
    }
}