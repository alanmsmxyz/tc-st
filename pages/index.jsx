import Link from 'next/link'

import CenterPage from 'components/templates/CenterPage'

import Button from 'components/atoms/Button'

export default function IndexPage () {
  return (
    <CenterPage title='Hello!'>
      <div className='mb-3'>
        <p>Silahkan pilih halaman demo berikut:</p>
      </div>
      <div className='flex flex-row flex-wrap space-x-4'>
        <div>
          <Link href='/register' passHref>
            <Button as='a'>Register
            </Button>
          </Link>
        </div>

        <div>
          <Link href='/login' passHref>
            <Button as='a'>Login</Button>
          </Link>
        </div>

      </div>
    </CenterPage>
  )
}
