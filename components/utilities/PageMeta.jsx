import Head from 'next/head'

export default function PageMeta ({ title }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
