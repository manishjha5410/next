let ProductList = ({ products }) => {
    return (
        <>
            <h1>List Of Products</h1>
            {
                products.map(product => {
                    return (
                        <div key={product.id}>
                            <h2>
                                {product.id} {product.title} {product.price}
                            </h2>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProductList

export async function getStaticProps()
{
    console.log('Generating | Regenerating Product List')
    const res = await fetch('http://localhost:4000/products');
    const data = await res.json();

    return {
        props: {
            products: data
        },
        revalidate: 30,
    }
}