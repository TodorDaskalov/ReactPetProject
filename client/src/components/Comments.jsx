import { useState, useEffect } from "react";
import {
    getAllComments,
    postComment,
    deleteComment,
    updateComment,
} from "../../services/commentsService";
import styles from "./Comments.module.css";

import Comment from "./Comment";

export default function Comments({ petId }) {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const addComment = async () => {
        if (comment.trim() !== "") {
            try {
                const newComment = await postComment(petId, "user123", comment);
                setComments([...comments, newComment]);
                setComment("");
            } catch (error) {
                console.error("Error posting comment:", error);
            }
        }
    };

    const deleteCommentHandler = async (commentId) => {
        try {
            await deleteComment(commentId);
            setComments((comments) =>
                comments.filter((comment) => comment._id !== commentId)
            );
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    const editCommentHandler = async (commentId, newContent) => {
        try {
            await updateComment(commentId, newContent);
            
            setComments((prevComments) =>
                prevComments.map((comment) =>
                    comment._id === commentId
                        ? { ...comment, content: newContent }
                        : comment
                )
            );
        } catch (error) {
            console.error("Error editing comment:", error);
        }
    };

    useEffect(() => {
        getAllComments()
            .then((commentsData) => setComments(commentsData))
            .catch((error) => console.error("Error fetching comments:", error));
    }, []);

    return (
        <div className={styles.commentsSection}>
            <h2>Comments/Questions:</h2>
            <ul className={styles.commentsList}>
                {Object.values(comments).map((comment) => (
                    <Comment
                        key={comment._id}
                        comment={comment}
                        onDelete={deleteCommentHandler}
                        onEdit={editCommentHandler}
                    />
                ))}
            </ul>
            <div className={styles.commentInputContainer}>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment/question..."
                    className={styles.commentInput}
                />
                <button
                    onClick={addComment}
                    className={styles.addCommentButton}
                >
                    Add Comment / Question
                </button>
            </div>
        </div>
    );
}
