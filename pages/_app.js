import '@/styles/globals.css'

//Laout
import Layout from '@/components/Layout/Layout'
import { SessionProvider } from 'next-auth/react'
export default function App({ Component, pageProps }) {
  return(
    <Layout>
      <SessionProvider session={pageProps}>
      <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  )
}
