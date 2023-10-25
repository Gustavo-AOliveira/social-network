import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
    return (
         <aside className={styles.sidebar}>
                <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                <div className={styles.profile}>

                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/141279148?v=4" alt="" />
                    <strong>Gustavo Aquino</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <a href="#"><PencilLine size={20}/> Editar seu perfil</a>
                </footer>
            </aside> 
    );
}