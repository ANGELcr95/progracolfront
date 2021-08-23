import axios from 'axios';

const postTetris = async (info,token) => {
    console.log(info)
    const promise = await axios({
        method:'POST',
        url:'/figure',
        baseURL:'https://java.bocetos.co/gamered-0.0.1-SNAPSHOT',
        data: info,
        headers: {"Authorization":token}
    })

    return promise
}

export default postTetris

