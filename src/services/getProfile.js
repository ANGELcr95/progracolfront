import axios from "axios";

const getProfile = async (token) => {
    const data = await axios({
        method:'GET',
        url:'/myprofile',
        baseURL:'https://java.bocetos.co/userred-0.0.1-SNAPSHOT',
        headers: {"Authorization":token}
    })
    return data.data
}

export default getProfile