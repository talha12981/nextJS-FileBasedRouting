import Link from 'next/link'
const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link href="/blog/1">Blog</Link>
                </li>
                <li>
                    <Link href="/bills">Bills</Link>
                </li><li>
                    <Link href="/about">About</Link>
                </li></ul>
        </div>
    )
}

export default HomePage
