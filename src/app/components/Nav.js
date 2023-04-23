import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";

const Nav = () => {
    return (
        <nav className={styles.navbar}>
           <div className="">
               <ul className={styles.navbarList}>
                  <li className={styles.navbarItem}>
                      <Link href="/" className={styles.navbarItem}>
                        Home
                      </Link>
                  </li>

                  <li className={styles.navbarItem}>
                      <Link href="/about" className={styles.navbarItem}>
                        About
                      </Link>
                  </li>

                  <li className={styles.navbarItem}>
                      <Link href="/movie" className={styles.navbarItem}>
                        Movie
                      </Link>
                  </li>
                  <li className={styles.navbarItem}>
                      <Link href="/contact" className={styles.navbarItem}>
                        Contact
                      </Link>
                  </li>
               </ul>
           </div>
            
        </nav>
    );
};

export default Nav;