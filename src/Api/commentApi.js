import axios from "axios";
import { getCookie } from "../helpers/cockies";

export const fetchComments = async()=>{

    const {data} = await axios.get("http://localhost:3030/auth/comments")
    return data
}

export const NewComment = async(values)=>{
    const token = getCookie('token');
    console.log(token);
    const config ={
        headers:{
            Authorization : token
        }
    }

    const {data} = await axios.post("http://localhost:3030/auth/create" ,  {...values},config )
      return data
}


// new answer for a post 
export const NewAnswer = async(values, id)=>{
    const token = getCookie('token');
    console.log(id);
    const config ={
        headers:{
            Authorization : token
        }
    }

    const {data} = await axios.post(`http://localhost:3030/auth/addAnswer` ,  {...values, ...id},config )
      return data
}