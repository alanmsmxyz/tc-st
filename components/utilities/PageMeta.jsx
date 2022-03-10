import Head from 'next/head'

export default function PageMeta ({ props }) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name='description' content={props.description} />
    </Head>
  )
}
