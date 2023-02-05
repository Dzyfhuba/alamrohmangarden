import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

export default function Home({ locale }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(locale);
  
  return (
    <>
      dashboard
    </>
  )
}

export const getStaticProps: GetStaticProps = ({ locale }) => {
  return {
    props: {
      locale
    }
  }
}