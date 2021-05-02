import { useRouter } from "next/router"

const Blog = () => {
    const router = useRouter();
    console.log('Advanced Dynamic Route that can handle all routes');
    console.log(router.query);
    return (
        <div>
            <h1>Blog</h1>
        </div>
    )
}

export default Blog
