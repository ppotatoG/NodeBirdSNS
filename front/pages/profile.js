import AppLayout from "../components/AppLayout";
import Head from 'next/head';

const profile = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"></meta>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <div>내 프로필</div>
            </AppLayout>
        </>
    );
}

export default profile;