import { useState, useEffect, useContext } from "react";
import {
    getAllComments,
    postComment,
    deleteComment,
    updateComment,
} from "../../services/commentsService";
import styles from "./Comments.module.css";
import AuthContext from "../contexts/AuthContext";
import Comment from "./Comment";

export default function Comments({ pet, petId, email }) {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const { userId } = useContext(AuthContext);
    const isOwner = pet._ownerId === userId;

    const addCommentHandler = async () => {
        if (comment.trim() !== "") {
            try {
                const newComment = await postComment(petId, comment);
                setComments((comments) => [
                    ...comments,
                    { ...newComment, owner: { email: email } },
                ]);
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
        getAllComments(petId)
            .then((commentsData) => setComments(commentsData))
            .catch((error) => console.error("Error fetching comments:", error));
    }, []);

    return (
        <div className={styles.commentsSection}>
            <h2>Comments/Questions:</h2>
            {comments.length > 0 ? (
                <ul className={styles.commentsList}>
                    {comments.map((comment) => (
                        <Comment
                            key={comment._id}
                            comment={comment}
                            onDelete={deleteCommentHandler}
                            onEdit={editCommentHandler}
                        />
                    ))}
                </ul>
            ) : (
                <p>No comments or questions at the moment.</p>
            )}
            {isOwner && (
                <div className={styles.commentInputContainer}>
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment/question..."
                        className={styles.commentInput}
                    />
                    <button
                        onClick={addCommentHandler}
                        className={styles.addCommentButton}
                    >
                        Add Comment / Question
                    </button>
                </div>
            )}
        </div>
    );
}
