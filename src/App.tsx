import { Field, Form } from 'react-final-form'
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import AutoCompleteSelect from './components/select/AutoCompleteSelect'
import Input from './components/input/Input'
import SelectInput from './components/select/SelectInput'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchContactsRequest } from './store/person/actions'
import { RootState } from './store'
import { Contacts } from './models/IContacts'

const Container = styled(Box)({
  backgroundColor: '#9f9f9f',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

interface IValues {
  taxpayer_number: string
  name: string
  email: string
  gender: string
}

function App() {
  const [taxpayerNumber, setTaxpayerNumber] = useState('')
  const [initialValues, setInitialValues] = useState<Contacts | object>({} as Contacts)
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.contacts)

  useEffect(() => {
    dispatch(fetchContactsRequest())
  }, [])

  useEffect(() => {
    const contact = items.find((item) => item.taxpayer_number === taxpayerNumber)
    const item = {
      taxpayer_number: contact?.taxpayer_number,
      name: contact?.name,
      email: contact?.email,
      gender: contact?.gender === 'f'
        ? { id: 1, name: 'Feminino', value: 'f' }
        : contact?.gender === 'm'
          ? { id: 2, name: 'Masculino', value: 'm' }
          : undefined
    }
    contact && setInitialValues(item ?? {})
  }, [taxpayerNumber])

  const submitForm = (values: IValues) => {
    console.log('values', values)
  }

  const genderOptions = [
    { id: 1, name: 'Feminino', value: 'f' },
    { id: 2, name: 'Masculino', value: 'm' }
  ]

  return (
    <Container>
      <Typography
        component='h1'
        sx={{
          fontSize: '28px',
          fontWeight: 700,
          marginBottom: '24px'
        }}
      >
        Formulário
      </Typography>
      <Box sx={{ background: '#e6e6e6', borderRadius: '8px', maxWidth: '500px', padding: '32px 16px', width: '100%' }}>
        <Form
          initialValues={initialValues}
          onSubmit={submitForm}
          render={({ handleSubmit, values }) => {
            console.log('values', values)
            return (
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                >
                  <Box>
                    <Typography>CPF:</Typography>
                    <Field
                      name='taxpayer_number'
                      component={AutoCompleteSelect}
                      options={items.map((option) => option.taxpayer_number)}
                      placeholder='Digite seu CPF...'
                      disableClearable
                      setTaxpayerNumber={setTaxpayerNumber}
                    />
                  </Box>

                  <Box>
                    <Typography>Nome:</Typography>
                    <Field
                      name='name'
                      type='text'
                      component={Input}
                      placeholder='Digite seu nome...'
                    />
                  </Box>

                  <Box>
                    <Typography>E-mail:</Typography>
                    <Field
                      name='email'
                      type='email'
                      component={Input}
                      placeholder='Digite seu e-mail...'
                    />
                  </Box>

                  <Box>
                    <Typography>Sexo:</Typography>
                    <Field
                      name='gender'
                      component={SelectInput}
                      placeholder='Sexo...'
                      options={genderOptions}
                      isClearable
                    />
                  </Box>

                  <Box sx={{ marginTop: '16px' }}>
                    <Button
                      type='submit'
                      variant='contained'
                       sx={{
                        width: '100%'
                       }}
                    >
                      Enviar
                    </Button>
                  </Box>
                </Box>
              </form>
            )
          }}
        />
      </Box>
    </Container>
  )
}

export default App
