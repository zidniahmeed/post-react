import { Link } from "react-router-dom"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <header className={styles.wrap}>
                <img width={40} height={100} src="/logo192.png" alt="logo react" />
                <nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/post"}>Post</Link>
                </nav>
        </header>
    )
}