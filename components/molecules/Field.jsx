import { useMemo } from 'react'
import { Field as FormixField } from 'formik'

import Input from 'components/atoms/Input'
import Select from 'components/atoms/Select'

export default function Field ({
  label,
  error,
  ...rest
}) {
  const { type } = rest

  /**
   * Switcher for possible form fields type
   * note that radio and textarea are not implemented
   * because it is not used in this demo
   */
  const FieldElm = useMemo(() => {
    switch (type) {
      case 'select': return Select
      default: return Input
    }
  }, [type])

  return (
    <div className='mb-1.5 space-y-1.5'>
      <label>
        <span className='block mb-1.5 font-medium'>
          {label}
        </span>

        <FormixField
          isInvalid={!!error}
          as={FieldElm}
          {...rest}
        />
      </label>

      <div className='min-h-[1.5em] text-xs text-rose-500'>
        {error}
      </div>
    </div>
  )
}
