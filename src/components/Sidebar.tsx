import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <Avatar source="https://github.com/maykbrito.png"/>

                <strong>Gregolly franca</strong>
                <span>Web developer/ UX designer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}