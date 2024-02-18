import axios from "axios";



export default axios.create({
    baseURL: 'https://api.giphy.com/v1',
    params:{
        key: import.meta.env.VITE_GIPHY_KEY
    }
})