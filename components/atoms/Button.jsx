const themeClass = {
  primary: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 text-white cursor-pointer'
}

export default function Button ({
  theme = 'primary',
  as,
  className,
  children,
  isLoading = false,
  ...rest
}) {
  const AsElm = as || 'button'
  return (
    <AsElm
      className={[
        'inline-block px-3 py-1.5 rounded shadow font-medium text-white transition',
        themeClass[theme],
        'disabled:bg-slate-300 disabled:hover:bg-slate-400 disabled:active:bg-slate-400 disabled:focus:outline-none disabled:focus:ring-0 disabled:text-slate-800 disabled:cursor-not-allowed',
        isLoading ? 'animate-pulse' : 'animate-none'
      ].join(' ')}
      {...rest}
    >
      {children}
    </AsElm>
  )
}
