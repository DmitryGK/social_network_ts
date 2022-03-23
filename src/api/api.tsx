import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': 'bc61d54e-088d-4029-8f1a-813822712ef2' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = {

    getUser(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        )
            .then(response => {
                return response.data
            })
    }
}

export const followAPI = {
    follow(id = 1) {
       return instance.delete(`follow/${id}`, {})
       .then(response => {
           return response.data
       })
    },
    unfollow(id = 1) {
        return instance.delete(`follow/${id}`, {})
       .then(response => {
           return response.data
       })
    }
}
