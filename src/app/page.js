import styles from "./page.module.css";
import Section1 from "../components/home_page/section1";
import Section2 from "@/components/home_page/section2";
import Section3 from "@/components/home_page/section3";
import Section4 from "@/components/home_page/section4";

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
            <Section2 />
            <Section3 />
            <Section4 />
            {/* <div className={styles.content}>Hossein Abedi</div> */}
        </div>
    );
}

export default Home;