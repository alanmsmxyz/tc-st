import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'

import PageMeta from 'components/utilities/PageMeta'

export default function CenterPage ({ title, children }) {
  return (
    <>
      <PageMeta title={title} />
      <div className='bg-gradient-to-tr from-cyan-500/10 via-teal-500/10 to-blue-500/10'>
        <Header />

        <div className='flex justify-center items-center min-h-[calc(100vh-10.5rem)] p-6 md:p-12'>
          <div className='w-full lg:w-[50ch] p-12 rounded bg-white border border-slate-100 shadow-sm'>
            <div className='mb-3'>
              <h1 className='text-3xl font-bold'>{title}</h1>
            </div>
            <div>
              {children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
