import { type AppProps } from 'next/app'

import { NextHead } from '@/components'
import GlobaStyle from '@/theme/GlobalStyle'

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <NextHead />
      <GlobaStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
