
import type { AppProps } from 'next/app'
import { NextPage } from 'next';
import { Provider } from 'react-redux'
import { ReactElement, ReactNode } from 'react'
import { appWithTranslation } from 'next-i18next';
import { PersistGate } from 'redux-persist/integration/react'
import config from './redux/configStore';
import '../styles/_app.scss'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <Provider store={config().store}>
      <PersistGate loading={null} persistor={config().persistor}>
        {getLayout(<Component {...pageProps} />)}
      </PersistGate>
    </Provider>
  )


}
export default appWithTranslation(MyApp);

