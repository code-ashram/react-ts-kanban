import classNames from 'classnames'

import KanbanCard from './components/KanbanCard.tsx'

import styles from './App.module.scss'

const App = () => {

  return (
    <>
      <div className={classNames(styles.kanbanWrapper)}>
        <ul className={classNames(styles.kanbanList)}>
          <li><KanbanCard /></li>
          <li><KanbanCard /></li>
          <li><KanbanCard /></li>
          <li><KanbanCard /></li>
        </ul>

        <ul className={classNames(styles.kanbanList)}>
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
