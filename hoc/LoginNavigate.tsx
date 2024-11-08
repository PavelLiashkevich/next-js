import {useRouter} from 'next/router';
import {FC, PropsWithChildren} from 'react';

export const LoginNavigate: FC<PropsWithChildren<{}>> = ({children}) => {
    const router = useRouter()

    const isLogin = false // test
    if (!isLogin) router.push('/')

    return <>{children})</>
}