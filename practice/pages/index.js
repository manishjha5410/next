import Link from 'next/link'
import {useRouter} from 'next/router'

let Home = () => {

    const router = useRouter();

    let handleClick = () => {
        console.log('Placing Your Order');
        router.push('/product');
    }

    return (
        <>
            <h1>Home Page</h1>
            <Link href='/blog'>
                <a>Blog</a>
            </Link><br />
            <Link href='/product'>
                <a>Product Page</a>
            </Link><br />
            <button onClick={handleClick}>
                Place Order
            </button>
        </>
    )
}

let newHome = () => {
    return (
        <>
            <h1>
                Next Js Prerendering
            </h1>
            <Link href="/users">
                <a>Users</a>
            </Link><br/>
            <Link href="/posts">
                <a>Posts</a>
            </Link>
        </>
    )
}

export default newHome;