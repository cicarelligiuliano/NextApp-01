import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
    color: "#0070f3",
    textDecoration: "underline",
    
};

interface input {
    text: string;
    href: string;
}

const ActiveLink: FC<input> = ({ text, href }) => {
    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <a style={asPath === href ? style : undefined}>{text}</a>
        </Link>
    );
};

export default ActiveLink;
