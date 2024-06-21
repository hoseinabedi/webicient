import styles from "./page.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles.Hero}>
                <div className={styles.contents}>
                    <h1>Lorem ipsum dolor sit amet, consec</h1>
                    <p>Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique erat in ligula consequat malesuada. Praesent posuere vestibulum neque ac posuere.</p>
                </div>
            </div>
            <div className={styles.content}>Hossein Abedi</div>
        </div>
    );
}
