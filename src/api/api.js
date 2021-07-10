import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'fc80d18e-ccad-4cf3-bd62-026f50314b83'},
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
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