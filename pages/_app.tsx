import '../styles/nprogress.css'
import { ReactElement, ReactNode, useState } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { useLoader } from '../assets/hooks/useLoader'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 60 * 1000,
					},
				},
			})
	)

	useLoader()

	const getLayout = Component.getLayout ?? (page => page)

	return getLayout(
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydrateState}>
				<Component {...pageProps} />
			</Hydrate>
		</QueryClientProvider>
	)
}
