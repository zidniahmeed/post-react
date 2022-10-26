import React from 'react'

export default function Button(props) {
    const {className = "bg-yellow-500", children} = props

  return (
    <button {...props} className={`${className} px-4 py-2`} >
        {children}
    </button>
  )
}
