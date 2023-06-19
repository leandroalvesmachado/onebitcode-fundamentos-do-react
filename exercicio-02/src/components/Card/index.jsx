import Button from '../Button'
import styles from './styles.module.css'

// export default function Card(props)
export default function Card({title, poster}) {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={poster} alt={title} />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>Um pôster decorativo épico do filme do Star Wars, com moldura de MDF e tamanha A3.</p>
        <Button text="Comprar agora" />
      </div>
    </div>
  )
}