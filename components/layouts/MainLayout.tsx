import Head from "next/head";
import React, { FC, ReactComponentElement } from "react";
import Nav from "../Nav";
import styles from "./MainLayout.module.css";

interface input {
    children: React.ReactNode;
    title: string;
}

export const MainLayout: FC<input> = ({ children, title }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />

            <main className={styles.main}>{children}</main>
        </div>
    );
};
