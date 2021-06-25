import * as axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'fc80d18e-ccad-4cf3-bd62-026f50314b83'},
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow (id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unFollow (id) {
        return instance.delete(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },
}