import { SWRConfig } from "swr";

export function RootLayout(props) {
    const { children } = props;
    return (
        <SWRConfig
            value={{
                revalidateOnFocus: true,
                revalidateOnReconnect: true,
                revalidateOnMount: true,
                refreshWhenHidden: false,
                refreshWhenOffline: false,
                refreshInterval: 0,
            }}
        >
            {children}
        </SWRConfig>
    )
}

export function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}