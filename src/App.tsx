import cn from 'classnames'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import KanbanCard from './components/KanbanCard.tsx'

import styles from './App.module.scss'

const App = () => {

  return (
    <>
      <div className={cn(styles.kanbanWrapper)}>
        <ul className={cn(styles.kanbanList)}>
          <li><KanbanCard /></li>
          <li><KanbanCard /></li>
          <li><KanbanCard /></li>
          <li><KanbanCard /></li>
        </ul>

        <ul className={cn(styles.kanbanList)}>
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
