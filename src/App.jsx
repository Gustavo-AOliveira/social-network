import { Header } from "./components/header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import './global.css'
import styles from './app.module.css'


export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}> 
        <Sidebar/>
        <main>
            <Post 
            author="Gustavo Aquino" 
            content="ghdjiopwaeoksrjikelowpéokrjltkrle" 
          />
          <Post
            author="Oliveira"
            content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaa" 
          />
        </main>
      </div>

    </div>
    
  )
}
