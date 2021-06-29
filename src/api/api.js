import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'fc80d18e-ccad-4cf3-bd62-026f50314b83'},
})
let localCurrentPage = 0;
let localPageSize = 5;
function totalCount() {
    return instance.get(`users?page=1&count=1`).then(response => {
         return localCurrentPage = Math.ceil(response.data.totalCount / localPageSize);
    })
}

// Не может работать для стр. 2 (начальной) автоматически, потому что асинхронная функуция, а если ее
// переместить внуть getId, она будет всегда срабатывать независимо от данных из getUsers, которые должны быть в state заранее.
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        localCurrentPage = currentPage;
        localPageSize = pageSize;
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`, {})
    },
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`)
    },
    getCurrentPage() {
        if (localCurrentPage === 0) {
            return totalCount().then((localCurrentPage) => {
                return instance.get(`users?page=${localCurrentPage}&count=${localPageSize}`)
            })
        } else {
            return instance.get(`users?page=${localCurrentPage}&count=${localPageSize}`)
        }
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}