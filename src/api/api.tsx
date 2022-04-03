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
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    }
}

export const authAPI = {

    me() {
        return instance.get(`auth/me`)
    }
}

