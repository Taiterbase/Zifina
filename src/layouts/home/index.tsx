import BackgroundSplash from "components/background-splash";
import HomeHeader from "components/home-header";
import { getLayout as getRootLayout } from "layouts/root";
import { ReactNode } from "react";

export function HomeLayout(props: { children: ReactNode; }) {
    const { children } = props;

    return (
        <div className="min-h-full min-w-full bg-blue-150">
            <HomeHeader title="My Website" />
            <main className="pl-28 overflow-y-auto p-6 pt-20 min-h-screen min-w-full flex justify-center flex-grow">
                {children}
            </main>
            <BackgroundSplash />
        </div>
    )
}

export default function getLayout(page: ReactNode) {
    return getRootLayout(<HomeLayout>{page}</HomeLayout>)
}