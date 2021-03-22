import { useDrop } from 'react-dnd'
import { draggableType } from './DraggableBox'

export function DropZone({ dropped }) {
  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: draggableType,
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver()
    })
  })

  return (
    <div ref={dropRef} className='drop-here'>
      {dropped ? 'Yeah!' : 'Drop here'}
    </div>
  )
}
