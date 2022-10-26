import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css"

export default function Home() {

    return (
        <Layout title={"Home"}>
            <Navbar />
            <section className={styles.section}>
                <h1>Home Page</h1>
            </section>
        </Layout>
    )
}