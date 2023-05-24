import axios from "axios"

const FetchDataByInput=(inputToFetch)=>{
    axios.get(process.env.REACT_APP_BASE_API_URL+""+inputToFetch).then((response)=>{
        const result=response.data
        return result
    })
}