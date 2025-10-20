import axios from "axios";
import { Post } from "../types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";
import { useUser } from "../providers/UserProvider";
import { toast } from "sonner";
dayjs.extend(relativeTime);

export const PostCard = ({ post }: { post: Post }) => {
    const [text, setText] = useState("");
    const [comments, setComments] = useState(post.comments);
    const { token } = useUser();

    const handleSubmitComment = async () => {
        const response = await axios.post(
            `http://localhost:5500/posts/${post._id}/comments`,
            { text },
            { headers: { Authorization: "Bearer " + token } }
        );

        if (response.status === 200) {
            setText("");
            setComments([...comments, response.data]);
        } else {
            toast.error("Алдаа гарлаа");
        }
    };

    return (
        <div key={post._id} className="mb-4 border-b py-4">
            <div className="flex justify-between">
                <div className="font-bold">{post.createdBy.username}</div>
                <div className="font-bold">{dayjs(post.createdAt).fromNow()}</div>
            </div>
            <img src={post.imageUrl} alt="" />
            <b>{post.createdBy.username}</b> {post.description}
            {comments.map((comment) => (
                <div key={comment._id}>
                    <b>{comment.createdBy.username}: </b>
                    {comment.text}
                    <div className="font-bold text-[pixel] ">{dayjs(comment.createdAt).fromNow()}</div>
                </div>
            ))}
            <div className="relative">
                <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a comment" className="w-full resize-none" rows={1} />
                {text.length > 0 && (
                    <div onClick={handleSubmitComment} className="absolute hover:underline cursor-pointer right-0 top-0 font-bold">
                        Post
                    </div>
                )}
            </div>
        </div>
    );
};