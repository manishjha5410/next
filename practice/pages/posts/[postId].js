import { useRouter } from 'next/router'

let Post = ({post}) => {

    const router = useRouter();

    if(router.isFallback)
    {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h2>
                {post.id} {post.title}
            </h2>
            <p>{post.body}</p>
        </>
    )
}

export default Post;

export async function getStaticPaths() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    // const paths = data.map(post => {
    //     return {
    //         params: {
    //             postId: `${post.id}`
    //         }
    //     }
    // })

    return {
        paths: [
            {
                params: {
                    postId: '1'
                },
            },
            {
                params: {
                    postId: '2'
                },
            },
            {
                params: {
                    postId: '3'
                },
            },
            {
                params: {
                    postId: '4'
                },
            }
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {

    const { params } = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();

    if(!data.id) {
        return {
            notFound: true,
        }
    }

    console.log(`Genrating page for /posts/${params.postId}`)

    return {
        props: {
            post: data
        }
    }

}