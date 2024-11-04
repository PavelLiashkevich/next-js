import Link from 'next/link';
import {getLayout} from '../components/Layout/BaseLayout/BaseLayout';
import styles from 'styles/404.module.scss';

const Custom404 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.description}>Oops!</p>
            <Link href="/" className={styles.homeLink}>
                Return to Homepage
            </Link>
        </div>
    );
}

Custom404.getLayout = getLayout
export default Custom404;