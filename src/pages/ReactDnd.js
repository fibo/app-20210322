import { HTML5Backend } from 'react-dnd-html5-backend'
import { DraggableBox } from '../components/DraggableBox'
import { DropZone } from '../components/DropZone'
import { useState } from 'react'
import { DndProvider } from 'react-dnd'

import './ReactDnd.css'

export function ReactDndPage() {
  const [dropped, setDropped] = useState(false)
  return (
    <DndProvider backend={HTML5Backend}>
      <DraggableBox dropped={dropped} setDropped={setDropped} />
      <DropZone dropped={dropped} />
    </DndProvider>
  )
}
