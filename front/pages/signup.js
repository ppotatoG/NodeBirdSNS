import AppLayout from "../components/AppLayout";
import Head from 'next/head';

const signup = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"></meta>
                <title>회원가입 | NodeBird</title>
            </Head>
            <AppLayout>
                <div>회원가입 페이지</div>
            </AppLayout>
        </>
    );
}

export default signup;