import axios from "axios";

const getListaFiguras = async (token) => {
    const data = await axios({
        method:'GET',
        url:'/groupfigure',
        baseURL:'https://java.bocetos.co/gamered-0.0.1-SNAPSHOT',
        headers: {"Authorization":token}
        
    })

    return data.data
}

export default getListaFiguras