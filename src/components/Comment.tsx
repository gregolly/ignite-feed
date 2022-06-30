import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        // setLikeCount((state) => {
        //     return state + 1
        // });
        // sempre que for atualizar uma informacao, que dependa do valor anterior usar
        // essa maneira para atualizar o closure

        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/gregolly.png" 
                alt="" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gregolly Franca</strong>
                            <time title="11 de Maio as 08:13h" dateTime="2022-06-2022 01:08:30">Publicado ha 2h</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{ likeCount }</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}