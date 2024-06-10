import React from 'react'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FieldRenderProps } from 'react-final-form'

const TextInputStyled = styled(TextField)({
  background: '#ffffff',
  width: '100%',

  '& .MuiInputBase-root': {
    height: '40px',

    '& .MuiInputBase-input': {
      width: '100%'
    }
  }
})

type InputProps = FieldRenderProps<string, HTMLElement>

const Input: React.FC<InputProps> = ({
  input,
  placeholder
}) => {
  return (
    <>
      <TextInputStyled
        {...input}
        type={input.type}
        name={input.name}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input