'use client'

import Image from 'next/image'
import {NextPageWithLayout} from 'pages/_app'
import {PageWrapper} from 'components/PageWrapper/PageWrapper'

const Home: NextPageWithLayout = () => (
    <PageWrapper>
        <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
        />
    </PageWrapper>
)

export default Home
