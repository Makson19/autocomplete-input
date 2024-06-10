import React from 'react'
import { FieldRenderProps } from 'react-final-form'
import Select from 'react-select'

type GenderType = {
  id: number,
  name: string,
  value: string
}
type SelectInputProps = FieldRenderProps<GenderType, HTMLElement>

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  input,
  placeholder,
  isClearable
}) => {
  return (
    <>
      <Select
        {...input}
        classNamePrefix='select'
        name={input.name}
        options={options}
        value={input.value}
        onChange={input.onChange}
        placeholder={placeholder}
        getOptionValue={(option: GenderType) => option.name}
        getOptionLabel={(option: GenderType) => option.name}
        components={{
          IndicatorSeparator: () => null,
        }}
        loadingMessage={() => 'Carregando...'}
        noOptionsMessage={() => 'Não encontrado'}
        isClearable={isClearable}
      />
    </>
  )
}

export default SelectInput