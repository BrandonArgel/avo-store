import { AppProps } from 'next/app'
import Layout from '@components/Layout/Layout'
import CartProvider from '@store/Cart'

import '../styles/global.scss'
import 'semantic-ui-css/semantic.min.css'

export function reportWebVitals(metric: any) {
  // Analytics -
  // serverAnalytics.log(metric)
  console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  // Providers - Context / Providers, Theme, data
  // Layout
  // props
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
