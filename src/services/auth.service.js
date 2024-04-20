import api from './API.js'

/**
 * 
 * @param { string } username 
 * @param { string } password 
 * @returns Promise<AxiosResponse>
 */
export async function loginRequest(username, password) {
    return await api.post({
        username,
        password
    })
}

/**
 * 
 * @param { string } username
 * @param { string } teamName 
 * @param { string } email 
 * @param { string } password 
 * @returns Promise<AxiosResponse>
 */
export async function registerRequest(username, teamName, email, password) {
    return await api.post({
        username,
        teamName,
        email,
        password
    })
}

export async function logoutRequest() {
    return await api.post()
}