import styles from '@/app/page.module.css'

const Section4 = () => {
    return(
        <div className={styles.section4}>
            <div className={styles.footerBg}></div>
            <div className={styles.contactForm}>
                <p className={styles.smallTxt}>Any questions?</p>
                <p className={styles.title}>Let’s talk today!</p>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Section4;