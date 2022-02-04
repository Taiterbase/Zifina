import { useRouter } from 'next/router'

export default function HomeHeader(props: { title: string }) {
    const { title } = props;
    const router = useRouter();

    return (
        <div>
            <div className="ml-12 fixed h-16 max-h-16 min-w-full z-20 flex justify-between border-b-2 border-gray-400 border-opacity-20">
                <div className="flex w-full place-items-center justify-evenly backdrop-filter backdrop-blur-lg">
                    <p className="text-3xl text-slate-600">{title}</p>
                </div>
            </div>
            <div key="header" className="z-30 fixed overflow-x-hidden h-full w-20 flex-col justify-around list-content backdrop-filter backdrop-blur-3xl">
                <div className="h-full">
                    <button title="Home" onClick={() => { router.push("/") }} className="w-20 h-16 bg-green-600 bg-opacity-20 hover:bg-green-600 hover:bg-opacity-30">
                        <p>Link 1</p>
                    </button>
                    <button title="Placeholder" onClick={() => { router.push("/") }} className="w-20 h-16 bg-green-600 bg-opacity-20 hover:bg-green-600 hover:bg-opacity-30">
                        <p>Link 2</p>
                    </button>
                </div>
            </div>
        </div>
    );
}