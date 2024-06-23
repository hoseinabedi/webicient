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
                <video controls poster="/video.png">
                    <source src="https://www.youtube.com/watch?v=LXb3EKWsInQ" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <figure >
                    <iframe width="853" height="480" src="https://www.youtube.com/watch?v=LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <figcaption>A mordern lighting design</figcaption>
                </figure> */}
                {/* <Image src="/video.png" width={1042} height={545} alt='video' />
                <Image src="/play.png" width={126} height={126} alt='play' style={{position: "absolute"}} /> */}
            </div>
        </div>
    )
}

export default Section1;