import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '75852ffb-adc3-4383-ad7d-adeade81f55b'},
})

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`, {})
    },
    getFollow(userId) {
        return instance.get(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId = 17889) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    updateProfile(AboutMe = 'AboutMe', FullName = 'FullName',  lookingForAJobDescription = 'Js') {
        return instance.put(`profile`, {AboutMe, FullName, lookingForAJobDescription})
    },
    uploadPhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe=false, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    exit() {
        return instance.delete(`auth/login`)
    },
    captcha() {
        return instance.get(`security/get-captcha-url`)
    }
}