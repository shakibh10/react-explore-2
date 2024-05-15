import { useEffect, useState } from "react"
import './post.css'
export default function Post(){
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])

    return(
        <div className="post">
            <h3>Posts:{posts.length}</h3>
        
        </div>
       
    )
}


/*
we have to do five things for data load
1.create a store to store a data 
2.Create use effect with no dependencies
3.use fetch to load data 

*/