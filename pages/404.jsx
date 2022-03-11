import Link from 'next/link'

import CenterPage from 'components/templates/CenterPage'

import Button from 'components/atoms/Button'

export default function IndexPage () {
  return (
    <CenterPage title='404 Not Found'>
      <div className='mb-3'>
        <p>Silahkan kembali ke halaman awal.</p>
      </div>

      <div>
        <Link href='/' passHref>
          <Button as='a'>&larr; Halaman Awal</Button>
        </Link>
      </div>
    </CenterPage>
  )
}
