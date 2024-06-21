import Section1 from "../components/home_page/section1";
import styles from "./page.module.css";

const Home = () => {
    return (
        <div>
            <div className={styles.Hero}>
                <div className={styles.contents}>
                    <h1>Lorem ipsum dolor sit amet, consec</h1>
                    <p>Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique erat in ligula consequat malesuada. Praesent posuere vestibulum neque ac posuere.</p>
                </div>
            </div>
            <Section1 />
            <div className={styles.content}>Hossein Abedi</div>
        </div>
    );
}

export default Home;