import styles from "./Navbar.module.css"

export default function NavBar() {
    return(
        <>
        <ul className={styles.navbar}>
            <li className={styles.item}>Home</li>
            <li className={styles.item}>Sobre</li>
            <li className={styles.item}>Consulta</li>
        </ul>
        </>
    )
}