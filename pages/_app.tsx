import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component,  pageProps: {  ...pageProps }, }: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp

// Secret ==== 61e37fb3b2dcfb85e2ec65fbeb3817f5
// app Id ==== 481361357250343