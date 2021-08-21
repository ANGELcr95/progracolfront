import axios from "axios";

const getData = async (token) => {
   


    const data = await axios({
        method:'GET',
        url:'/figure',
        baseURL:'https://java.bocetos.co/gamered-0.0.1-SNAPSHOT',
        headers: {"Authorization":token}
    })

    return data.data
}

export default getData