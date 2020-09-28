import React, { useRef, useEffect } from 'react'
import { useField } from '@unform/core'

interface Props {
  name: string
}

type SelectProps = JSX.IntrinsicElements['select'] & Props

const Select: React.FC<SelectProps> = ({ name, ...rest }) => {
  const selectRef = useRef(null)
  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return <select ref={selectRef} {...rest} />
}

export default Select
