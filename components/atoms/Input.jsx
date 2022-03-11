export default function Input ({
  className,
  isFullWidth = true,
  isInvalid = false,
  ...rest
}) {
  return (
    <input
      className={[
        isFullWidth ? 'block w-full' : 'inline-block w-max',
        'px-3 py-2 bg-white border border-slate-300 rounded shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 leading-none text-sm placeholder-slate-400',
        'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none',
        isInvalid ? 'invalid:border-rose-500 invalid:rose-pink-600 focus:invalid:border-rose-500 focus:invalid:ring-rose-500' : null
      ].join(' ')}
      {...rest}
    />
  )
}
