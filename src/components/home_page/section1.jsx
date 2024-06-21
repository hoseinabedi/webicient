import styles from '../../app/page.module.css'
import Image from 'next/image';

const Section1 = () => {
    <div className={styles.section1}>
        <div>
            <span className={styles.diamond}>
                <Image src="../../public/diamond.png" alt="diamond-icon" />
            </span>
        </div>
        <div></div>
    </div>
}

export default Section1;