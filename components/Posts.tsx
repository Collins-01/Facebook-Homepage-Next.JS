import Post from "./Post";
import {useCollection} from 'react-firebase-hooks/firestore';
import {query, collection} from 'firebase/firestore';
import { db } from "../firebase_app";



const Posts = ()=>{
    // TODO: useCollections Hook
    const postsQuery =  query(collection(db, "Posts"));
    const  [posts, loading, error] = useCollection(postsQuery)
    return (
        <div>
           {
            posts?.docs.map((e)=>{
                const data = e.data();
                return ( <Post email='' image={data['image']} message={data['message']} name={data['name']} postImage={data['postImage']} time={1000000000}/>)
            })
           }
        </div>
    );
}

export default Posts;