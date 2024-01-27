import axios from 'axios'

const authUser = localStorage.getItem("authUser")

export default axios.create({
    baseURL:"http://localhost:8080/api/v1",
    headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${authUser?JSON.parse(authUser).token:"" }`
    }
})