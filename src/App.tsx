import './App.module.scss'
import KanbanCard from './components/KanbanCard.tsx'
import styles from './App.module.scss'

const App = () => {

  return (
    <>
      <div className={styles.kanbanWrapper}>
        <ul className={styles.kanbanList}>
          <li><KanbanCard /></li>
          <li><KanbanCard /></li>
          <li><KanbanCard /></li>
          <li><KanbanCard /></li>
        </ul>

        <ul className={styles.kanbanList}>
          <li><KanbanCard /></li>
          <li><KanbanCard /></li>
          <li><KanbanCard /></li>
          <li><KanbanCard /></li>
        </ul>
      </div>
    </>
  )
}

export default App
