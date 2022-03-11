import Link from 'next/link'

import Button from 'components/atoms/Button'

export default function Header () {
  return (
    <header id='header' className='flex justify-between items-center w-full h-20 px-6 md:px-12 py-3  bg-white border-b-1 border-slate-200 shadow-sm'>
      <div>
        <Link href='/'>
          <a className='block'>
            <img
              className='h-12 w-12 rounded shadow-sm'
              src='/images/logo.png'
              alt='logo'
            />
          </a>
        </Link>
      </div>

      <div className='space-x-4'>
        <Link href='/login' passHref>
          <Button as='a'>Login</Button>
        </Link>

        <Link href='/register' passHref>
          <Button as='a'>Register
          </Button>
        </Link>
      </div>
    </header>
  )
}
