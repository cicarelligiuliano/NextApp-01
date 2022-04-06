import Link from "next/link";
import DarkLayout from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

function about() {
    return (
        <>
            <h1>About Page</h1>
            <h1 className="title">
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className="description">
                Get started by editing <code className="code">pages/about.jsx</code>
            </p>
        </>
    );
}

about.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout title="About Page">
            <DarkLayout>{page}</DarkLayout>
        </MainLayout>
    );
};

export default about;
