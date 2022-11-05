import Link from "next/link";
const Links = [
  { label: "home", route: "/" },
  { label: "about", route: "/about" },
  { label: "posts", route: "/posts" },
];

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h3>
          <Link href={Links[0].route} className={styles.a}>
            LogoHome
          </Link>
        </h3>
        <ul className={styles.ul}>
          {Links.map((dato, index) => (
            <li key={index}>
              <Link className={styles.a} href={dato.route}>
                {dato.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
