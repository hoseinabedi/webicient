import styles from '../../app/page.module.css'
import Image from 'next/image';

const Section1 = () => {
    return(
        <div className={styles.section1}>
            <div className={styles.content_part}>
                <span className={styles.diamond}>
                    <Image src="/diamond-icon.png" width={26} height={20} alt="diamond-icon" />
                </span>
                <h2>Aenean vulputate quis est et pulvinar.</h2>
                <p>Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum nec rutrum.Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum nec rutrum.Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum nec</p>
                <button>About us</button>
            </div>
            <div className={styles.video}>
                <Image src="/video.png" width={1042} height={545} alt='video' />
                <Image src="/play.png" width={126} height={126} alt='play' style={{position: "absolute"}} />
            </div>
        </div>
    )
}

export default Section1;