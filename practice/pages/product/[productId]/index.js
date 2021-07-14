import {useRouter} from "next/router"

let ProductDetails = () => {

    const router = useRouter();
    let id = router.query.productId;

    return (
        <h1>Product Details of {id}</h1>
    )
}

export default ProductDetails;