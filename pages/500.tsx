import Link from 'next/link';
import {getLayout} from '../components/Layout/BaseLayout/BaseLayout';
import styles from 'styles/500.module.scss';

const Custom500 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>500</h1>
            <p className={styles.description}>Something went wrong on the server.</p>
            <Link href="/" className={styles.homeLink}>
                Return to Homepage
            </Link>
        </div>
    );
};


Custom500.getLayout = getLayout
export default Custom500;