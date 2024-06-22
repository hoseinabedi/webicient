import styles from '@/app/page.module.css'

const Section3 = () => {
    return(
        <div>
            <div className={styles.section3}>
                <div className={styles.imageSide}></div>
                <div className={styles.contentSide}>
                    <p className={styles.heading}>Usce arcu turpis, vehicula in elementum tincidunt, faucibus at ligula.</p>
                    <p className={styles.subHeading}>Proin pharetra lectus non felis vulputate, nec commodo quam mattis. Donec fermentum diam eget sem placerat vestibulum. Donec consectetur ut leo quis feugiat.</p>
                    <p className={styles.description}>Phasellus quis dignissim lectus. Maecenas dolor ex, pulvinar in vestibulum eu, condimentum sit amet lacus. Fusce ex augue, facilisis ut ligula vitae, fringilla dictum sem. Donec tempus blandit nulla vel auctor. Donec non vestibulum tellus, sit amet condimentum felis. Maecenas scelerisque elit a lectus consequat tincidunt.</p>
                    <button className={styles.button}>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default Section3;