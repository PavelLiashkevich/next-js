import {NextPage} from 'next';
import {BaseLayout} from 'components/BaseLayout/BaseLayout';
import {PropsWithChildren} from 'react';


const Layout: NextPage<PropsWithChildren> = ({children}) => {
    return <BaseLayout>{children}</BaseLayout>
}

export default Layout