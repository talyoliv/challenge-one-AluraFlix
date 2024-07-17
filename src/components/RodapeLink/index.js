import { Link } from 'react-router-dom';
import styles from './RodapeLink.module.css';

function RodapeLink({ url, children}) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default RodapeLink;