import { useState, useEffect, useRef } from 'react'

export function Box() {
  const [position, setPosition] = useState({ x: 20, y: 20 })
  const [startDraggingPoint, setStartDraggingPoint] = useState()
  const [isDragging, setIsDragging] = useState(false)

  function handlePointerUp(e) {
    setIsDragging(false)
    console.log('pointer up')
  }
  function handlePointerDown(e) {
    setIsDragging(true)
    setStartDraggingPoint({
      x: e.clientX,
      y: e.clientY
    })
  }
  function handlePointerMove(e) {
    if (isDragging && startDraggingPoint) {
      const deltaX = -startDraggingPoint.x + e.clientX
      const deltaY = -startDraggingPoint.y + e.clientY
      setPosition((position) => ({
        x: position.x + deltaX,
        y: position.y + deltaY
      }))
      setStartDraggingPoint({
        x: e.clientX,
        y: e.clientY
      })
    }
  }
  function handlePointerLeave(e) {
    setIsDragging(false)
  }

  return (
    <div
      className='box'
      style={{ top: position.y, left: position.x }}
      onPointerUp={handlePointerUp}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      Box
    </div>
  )
}
