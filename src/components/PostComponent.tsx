import React, {useState} from 'react';
import {useCreatePostMutation, useDeletePostMutation, useFetchAllPostsQuery} from '../services/PostService';
import {PostItem} from "./PostItem";
import {IPost} from "../models/IPost";

// 'rsc' keyboard combination for fast creating a component
export const PostComponent = () => {
    const [limit, setLimit] = useState<number>(100);

    //refetch - possibility in RTK Query again load a new data, because useFetchAllPostsQuery cases a data in out app
    // even if we use this data in another place or component

    // pollingInterval - execute load data avery 1 sec in our example for updating data
    // const { data: posts, refetch } = useFetchAllPostsQuery(limit, {
    //     pollingInterval: 1000
    // });

    const { data: posts, refetch } = useFetchAllPostsQuery(limit);
    const [createPost, {}] = useCreatePostMutation();

    const handleCreate = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost);
    }

    return (
        <div>
            <button onClick={handleCreate} style={{marginRight: '25px'}}>Add new Post</button>
            <button onClick={() => refetch()} style={{alignContent: 'center'}}>REFETCH</button>
            {posts && posts.map(post =>
            <PostItem key={post.id} post={post}/>)}
        </div>
    );
};