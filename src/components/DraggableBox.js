import { useDrag } from 'react-dnd'

export const draggableType = 'BOX'

export function DraggableBox({ dropped, setDropped = () => {} }) {
  const [, /*collectedProps*/ dragSourceRef] = useDrag({
    type: draggableType,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()

      if (item && dropResult) {
        setDropped(true)
      }
    }
  })

  return (
    <div
      className='drag-me'
      ref={dragSourceRef}
      style={{ backgroundColor: dropped ? 'lightsalmon' : 'salmon' }}
    >
      {dropped ? 'Yeah!' : 'Drag me'}
    </div>
  )
}
