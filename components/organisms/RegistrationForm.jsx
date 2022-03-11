import { useState } from 'react'

import * as Yup from 'yup'

import Form from 'components/molecules/Form'

const provinces = [
  { text: 'West Java', value: 'west-java' },
  { text: 'Special Capital of Jakarta', value: 'jakarta' }
]

const cities = {
  'west-java': [
    { text: 'Bandung Regency', value: 'bandung-regency' },
    { text: 'Bekasi Regency', value: 'bekasi-regency' },
    { text: 'Bogor Regency', value: 'bogor-regency' },
    { text: 'Ciamis', value: 'ciamis' },
    { text: 'Cianjur', value: 'cianjur' },
    { text: 'Cirebon Regency', value: 'cirebon-regency' },
    { text: 'Garut', value: 'garut' },
    { text: 'Indramayu', value: 'indramayu' },
    { text: 'Karawang', value: 'karawang' },
    { text: 'Kuningan', value: 'kuningan' },
    { text: 'Majalengka', value: 'majalengka' },
    { text: 'Pangandaran', value: 'pangandaran' },
    { text: 'Purwakarta', value: 'purwakarta' },
    { text: 'Subang', value: 'subang' },
    { text: 'Sukabumi Regency', value: 'sukabumi-regency' },
    { text: 'Sumedang', value: 'sumedang' },
    { text: 'Tasikmalaya Regency', value: 'tasikmalaya-regency' },
    { text: 'West Bandung', value: 'west-bandung' },
    { text: 'Bandung', value: 'bandung' },
    { text: 'Banjar', value: 'banjar' },
    { text: 'Bekasi', value: 'bekasi' },
    { text: 'Bogor', value: 'bogor' },
    { text: 'Cimahi', value: 'cimahi' },
    { text: 'Cirebon', value: 'cirebon' },
    { text: 'Depok', value: 'depok' },
    { text: 'Sukabumi', value: 'sukabumi' },
    { text: 'Tasikmalaya', value: 'tasikmalaya' }
  ],
  jakarta: [
    { text: 'Thousand Islands', value: 'thousand-islands' },
    { text: 'Central Jakarta', value: 'central-jakarta' },
    { text: 'East Jakarta', value: 'east-jakarta' },
    { text: 'North Jakarta', value: 'north-jakarta' },
    { text: 'South Jakarta', value: 'south-jakarta' },
    { text: 'West Jakarta', value: 'west-jakarta' }
  ]
}

export default function RegistrationForm () {
  const [citySelection, setCitySelection] = useState([])

  const formInitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    province: '',
    city: ''
  }

  const formValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('You must enter your first name!'),
    lastName: Yup.string().required('You must enter your last name!'),
    email: Yup.string().email('Invalid email, make sure you enter correct email address!').required('You must enter a valid email address!'),
    password: Yup.string().required('You must enter your password!'),
    gender: Yup.string().required('Please select your gender!'),
    province: Yup.string().required('Please select your province!'),
    city: Yup.string().required('Please select your city!')
  })

  const formFields = [
    {
      label: 'First Name',
      name: 'firstName',
      type: 'text',
      placeholder: 'Input first name here...'
    },
    {
      label: 'Last Name',
      name: 'lastName',
      type: 'text',
      placeholder: 'Input last name here...'
    },
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
    },
    {
      label: 'Gender',
      name: 'gender',
      type: 'select',
      options: [
        { text: 'Male', value: 'm' },
        { text: 'Female', value: 'f' },
        { text: 'Others', value: 'nb' }
      ]
    },
    {
      label: 'Province',
      name: 'province',
      type: 'select',
      options: provinces
    },
    {
      label: 'City',
      name: 'city',
      type: 'select',
      options: citySelection
    }
  ]

  /** Callback to update city selection upon values change */
  const handleAfterChange = (values) => {
    if (values.province in cities) {
      setCitySelection(cities[values.province])
    }
  }

  const handleSubmit = (values, action) => {
    console.log('submitting')

    setTimeout(() => {
      alert('Registrasi berhasil! Cek console untuk output form.')
      console.log(JSON.stringify(values))

      action.setSubmitting(false)
    }, 3000)
  }

  return (
    <div>
      <Form
        initialValues={formInitialValues}
        validationSchema={formValidationSchema}
        onAfterChange={handleAfterChange}
        onSubmit={handleSubmit}
        fields={formFields}
        submitButtonText='Register Now!'
      />
    </div>
  )
}
