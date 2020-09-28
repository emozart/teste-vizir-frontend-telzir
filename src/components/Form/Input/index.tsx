import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

// import { Container } from './styles';

interface Props {
  name: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const { fieldName, registerField } = useField(name)
  const inputRef = useRef(null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return <input ref={inputRef} {...rest} />
}

export default Input
