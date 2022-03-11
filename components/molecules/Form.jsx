import { useEffect } from 'react/cjs/react.development'

import { Formik, Form as FormixForm } from 'formik'

import Field from 'components/molecules/Field'

import Button from 'components/atoms/Button'

export default function Form ({
  fields,
  submitButtonText,
  resetButtonText,
  onAfterChange,
  ...rest
}) {
  return (
    <Formik
      /** make sure form is initialized as expected on refresh
          @link https://github.com/jaredpalmer/formik/issues/811 */
      enableReinitialize
      {...rest}
    >
      {({ values, errors, touched, isValidating, isSubmitting, isValid }) => (
        <FormixForm>
          {fields.map((field) => (
            <Field
              key={field.name}
              error={(touched[field.name] && errors[field.name])
                ? errors[field.name]
                : null}
              {...field}
            />
          ))}

          {submitButtonText &&
            <Button
              type='submit'
              disabled={isSubmitting || isValidating || !isValid}
              isLoading={isSubmitting || isValidating}
            >
              {submitButtonText}
            </Button>}

          {resetButtonText &&
            <Button
              type='reset'
              disabled={isSubmitting || isValidating}
            >{resetButtonText}
            </Button>}

          {/**
            * trigger a callback upon value change
            * this is done by using hook on helper component
            */
          onAfterChange &&
            <FormOnAfterChangeCallbackHelper values={values} callback={onAfterChange} />
          }

        </FormixForm>
      )}

    </Formik>

  )
}

/**
 * Helper component to trigger callback after values change
 * accepting both values and callback as props
 * callback is fired upon props change
 */
function FormOnAfterChangeCallbackHelper ({ values, callback }) {
  useEffect(() => {
    callback(values)
  }, [values, callback])

  return null
}
