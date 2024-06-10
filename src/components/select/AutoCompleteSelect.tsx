import React from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FieldRenderProps } from 'react-final-form'

const AutocompleteStyled = styled(Autocomplete)({
  background: '#ffffff',
  height: '40px',

  '& .MuiInputBase-root': {
    height: '40px'
  }
})

type AutoCompleteSelectProps = FieldRenderProps<string, HTMLElement>

const AutoCompleteSelect: React.FC<AutoCompleteSelectProps> = ({
  input,
  options,
  placeholder,
  disableClearable,
  setTaxpayerNumber
}) => {

  // eslint-disable-next-line
  const handleInputChange = (event: any, newValue: any) => {
    input.onChange(newValue)
    setTaxpayerNumber(newValue)
  }

  return (
    <>
      <AutocompleteStyled
        {...input}
        freeSolo
        id='taxpayer_number'
        disableClearable={disableClearable}
        value={input.value}
        onChange={handleInputChange}
        inputValue={input.value}
        onInputChange={handleInputChange}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </>
  )
}

export default AutoCompleteSelect