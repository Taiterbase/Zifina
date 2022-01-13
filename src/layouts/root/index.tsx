import Head from "next/head";

export function RootLayout(props) {
    const { children } = props;
    return (
        <>
            <Head>
                <title>My Site</title>
                <meta name="og:title" content="Website Title" key="title" />
                <meta name="description" content="Next.js Web Template free to use for monkies only!" key="description" />
            </Head>
            { children }
        </>
    )
}

export function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}