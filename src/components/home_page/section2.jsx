import styles from '@/app/page.module.css'

const Section2 = () => {
    return(
        <div style={{paddingTop: "5rem"}}>
            <div className={styles.section2}>
                <div className={styles.bg}></div>
                <div className={styles.partContainer}>
                    <div className={styles.part}>
                        <span>+</span>
                        <div className={styles.content}>
                            <h3>Financial statements</h3>
                            <p>Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi purus libero, Morbi purus libero, elementum nec</p>
                        </div>
                    </div>
                    <div className={styles.part}>
                        <span>+</span>
                        <div className={styles.content}>
                            <h3>Press releases</h3>
                            <p>Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi purus libero, Morbi purus libero, elementum nec</p>
                        </div>
                    </div>
                    <div className={styles.part}>
                        <span>+</span>
                        <div className={styles.content}>
                            <h3>Webcast links</h3>
                            <p>Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi purus libero, Morbi purus libero, elementum nec</p>
                        </div>
                    </div>
                    <div className={styles.part}>
                        <span>+</span>
                        <div className={styles.content}>
                            <h3>Corporate governance</h3>
                            <p>Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi purus libero, Morbi purus libero, elementum nec</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2;