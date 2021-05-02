import Link from 'next/link';
import { useRouter } from 'next/router';
const Bills = () => {

    const router = useRouter();
    const clickHandler = () => {
        router.push('/bills/4');
        // router.replace('/bills/4'); ypu cannot go back
    }
    return (
        <div>
            <h1>Bills Page</h1>
            <ul>
                <li>
                    <Link href="/bills/1">Bill No 1</Link>
                </li>
                <li>
                    <Link href={{
                        pathname: '/bills/[billId]',
                        query: { billId: '2' }
                    }}>Bill No 2</Link>
                </li>
                <li>
                    <Link href="/bills/3">Bill No 3</Link>
                </li>
            </ul>
            <button onClick={clickHandler}>Bill No 4</button>
        </div>
    )
}
export default Bills;