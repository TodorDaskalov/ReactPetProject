import { useState, useContext } from "react";
import styles from "./Comment.module.css";
import AuthContext from "../contexts/AuthContext";

export default function Comment({ comment, onEdit, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(comment.content);

    const { userId } = useContext(AuthContext);

    const isOwner = userId === comment._ownerId;

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEdit(comment._id, editedContent);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditedContent(comment.content);
    };

    const handleDeleteClick = () => {
        onDelete(comment._id);
    };

    const handleContentChange = (e) => {
        setEditedContent(e.target.value);
    };

    return (
        <li key={comment._id} className={styles.commentItem}>
            <div>{comment.owner.email}</div>
            <div className={styles.commentBox}>
                {isEditing ? (
                    <>
                        <textarea
                            value={editedContent}
                            onChange={handleContentChange}
                            className={`${styles.commentInput} ${
                                isEditing ? styles.editing : ""
                            }`}
                        />
                        <div className={styles.commentButtons}>
                            <button
                                className={styles.saveButton}
                                onClick={handleSaveClick}
                            >
                                Save
                            </button>
                            <button
                                className={styles.cancelButton}
                                onClick={handleCancelClick}
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <p>{comment.content}</p>
                        {isOwner && (
                            <div className={styles.commentButtons}>
                                <button
                                    className={styles.editButton}
                                    onClick={handleEditClick}
                                >
                                    Edit
                                </button>
                                <button
                                    className={styles.deleteButton}
                                    onClick={handleDeleteClick}
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </li>
    );
}
