import axios from "axios"

const getURl = endPoint => {
    if (process.env.MONGOLAB_URI) return endPoint;
    return `http://localhost:3001${endPoint}`;
};

export default {
    getUsersInfo: (userId) => {
        console.log(userId)
        return axios
            .get(getURl(`/api/users/${userId}`))
            .then(response => {
                return response.data.user
            })
    },

    getBlogInfo:() =>{
        return axios
        .get(getURl(`/api/blogs/`))
            .then(response => {
                console.log(response.data.blogs)
                return response.data.blogs
            })
        }
}