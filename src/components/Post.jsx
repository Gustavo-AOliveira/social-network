import { Placeholder } from 'phosphor-react'
import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/141279148?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Gustavo Aquino</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='24 de Outubro as 20:24' dateTime='2023-10-24 20:24'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Retornar. O nome do projeto é DoctorCare 🚀</p>
                <p>
                    <a href="#">#NovoProjeto</a>
                    <a href="#">#ReactJS</a>
                </p>
            </div>


            <form className={styles.commentForm}> 
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'/>
                
                <button type='submit'>Comentar</button>
            </form>

        </article>
    )
}