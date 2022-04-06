import React from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";
import ActiveLink from "./ActiveLink";

const menuItems = [
    {
        text: "Home",
        href: "/",
    },
    {
        text: "About",
        href: "/about",
    },
    {
        text: "Contact",
        href: "/contact",
    },
    {
        text: "Pricing",
        href: "/pricing",
    },
];

function Nav() {
    return (
        <nav className={styles["menu-container"]}>
            {menuItems.map((el) => (
                <ActiveLink key={el.href} href={el.href} text={el.text} />
            ))}
            {/* <ActiveLink href="/" text="Home" />
            <ActiveLink href="/about" text="About" />
            <ActiveLink href="/contact" text="Contact" /> */}
        </nav>
    );
}

export default Nav;
