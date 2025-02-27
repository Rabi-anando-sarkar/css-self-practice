import React from 'react'

const FABButton = ({
    icons,
    onClick,
    className
}) => {
  return (
    <button
        className={`${className}`}
        onClick={onClick}
    >
        {icons}
    </button>
  )
}

export default FABButton