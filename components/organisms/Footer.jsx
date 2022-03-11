import Link from 'next/link'

export default function Header () {
  return (
    <footer id='footer' className='w-full py-4 px-12 bg-blue-500 border-t-4 border-blue-300 text-white'>
      <div className='flex flex-row flex-wrap mb-3 justify-center divide-x divide-white text-sm'>
        <div className='px-3'>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>

        <div className='px-3'>
          <Link href='/register'>
            <a>Register</a>
          </Link>
        </div>

        <div className='px-3'>
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </div>
      </div>

      <div className='text-center text-xs space-y-1.5'>
        <p>Copyright &copy; 2022 - <a href='https://linkedin.com/in/alanmsmxyz'>Mochamad Syarief Maulana</a></p>
        <p>This site is intended for limited usage only. Developed as test-case submission for application at S.T.</p>
      </div>

    </footer>
  )
}
