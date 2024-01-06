import "@/styles/globals.css"

import type { AppProps } from "next/app"
import { FunctionComponent, ReactElement, createContext, useState } from "react"

export const PageContext = createContext<{
  page: string
  setPage: (page: string) => void
}>({
  page: "home",
  setPage: () => {},
})

const PageContextProvider: FunctionComponent<{ children: ReactElement }> = ({
  children,
}) => {
  const [page, setPage] = useState<string>("home")

  const updatePage = (page: string) => {
    setPage(page)
  }

  return (
    <PageContext.Provider value={{ page, setPage: updatePage }}>
      {children}
    </PageContext.Provider>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageContextProvider>
      <Component {...pageProps} />
    </PageContextProvider>
  )
}
