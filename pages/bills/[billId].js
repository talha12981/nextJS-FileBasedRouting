import { useRouter } from 'next/router'
const Bill = () => {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    return (
        <div>
            <h1>Bill</h1>
        </div>
    )
}

export default Bill
