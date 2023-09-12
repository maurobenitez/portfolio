import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./Header.module.css"
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className={styles.header}>
            <div className={styles.title}>My Website</div>
            {/* <div className={styles.links}>
                <a href="#" className={styles.link}>Projects</a>
                <a href="#" className={styles.link}>Contact</a>
            </div> */}
        </header>);
    {/* <div className={styles.header}>

            <h1>Mauro Benitez</h1>
            <ul className={styles.links}>
                <li>projectos</li>
                <li>contacto</li>
            </ul>
            <Link
                to="final-section"
                smooth={true}
                duration={500}
            >
                link a la seccion final
            </Link>
        </div> */}
}


export default Header;