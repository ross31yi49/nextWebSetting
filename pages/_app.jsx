import { useState, useMemo } from 'react'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { IntlProvider } from 'react-intl'
import ZH_TW from '@/i18n/zh-tw.json'
import {
  LOCALE_ZH_TW,
} from '@/i18n/locales'
import '../styles/globals.css'
import * as theme from '@/theme'

import { ThemeProvider } from 'styled-components'

export default ({ Component, pageProps }) => {
  // Create a client
  const [queryClient] = useState(() => new QueryClient())

  // Temp locale
  const locale = LOCALE_ZH_TW

  const messages = useMemo(() => {
    return ZH_TW
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <IntlProvider
            locale={locale}
            messages={messages}
            onError={() => null}
          >
            <Component {...pageProps} />
            <div id="modal" />
          </IntlProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
