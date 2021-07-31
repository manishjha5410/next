import { useRouter } from 'next/router'

let Product = ({ product }) => {

    const router = useRouter();

    if(router.isFallback)
    {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h2>
                {product.id} {product.title} {product.price}
            </h2>
            <p>{product.description}</p>
        </>
    )
}

export default Product;

export async function getStaticPaths() {


    return {
        paths: [
            {
                params: {
                    productId: '1'
                },
            },
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {

    const { params } = context;

    const res = await fetch(`http://localhost:4000/products/${params.productId}`);
    const data = await res.json();

    console.log(`Regenrating product ${params.productId}`)

    return {
        props: {
            product: data
        },
        revalidate: 10
    }

}