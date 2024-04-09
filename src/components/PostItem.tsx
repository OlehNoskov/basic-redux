import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {useDeletePostMutation} from "../services/PostService";

interface PostItemProps {
    post: IPost;
}
export const PostItem: FC<PostItemProps> = ({post}) => {
    const [deletePost, {}] = useDeletePostMutation();

    const handleDelete = async () => {
        const id = prompt();
        await deletePost({id} as unknown as IPost);
    }

    return (
        <div style={{border: '1px solid green', margin: '20px', padding: '15px'}}>
            {post.id}. {post.title}
            <button onClick={handleDelete} style={{marginLeft: '10px', alignContent: 'end'}}>Delete</button>
        </div>
    );
};