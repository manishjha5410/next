import {useRouter} from 'next/router'

let Review = () => {
    const router = useRouter();

    let {productId,reviewId} = router.query;
    console.log(router)

    return (
        <h1>
            Review - {reviewId}<br />
            Product - {productId}
        </h1>
    )
}

export default Review;