import * as Yup from 'yup'

import Form from 'components/molecules/Form'

export default function LoginForm () {
  const formInitialValues = {
    email: '',
    password: ''
  }

  const formValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email, make sure you enter correct email address!').required('You must enter a valid email address!'),
    password: Yup.string().required('You must enter your password!')
  })

  const formFields = [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Input email here...'
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Input password here...'
    }
  ]

  const handleSubmit = (values, action) => {
    console.log('submitting')

    setTimeout(() => {
      alert('Login berhasil! Cek console untuk output form.')
      console.log(JSON.stringify(values))

      action.setSubmitting(false)
    }, 3000)
  }

  return (
    <div>
      <Form
        initialValues={formInitialValues}
        validationSchema={formValidationSchema}
        onSubmit={handleSubmit}
        fields={formFields}
        submitButtonText='Login'
      />
    </div>
  )
}
