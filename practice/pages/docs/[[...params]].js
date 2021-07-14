import {useRouter} from 'next/router'

let Docs = () => {

    const router = useRouter();
    const {params = []} = router.query;

    console.log(params);

    if(params.length ===2)
        return (
            <h1>
                Viewing Docs for feature {params[0]} and concept {params[1]}
            </h1>
        )
    else if (params.length ===1)
        return (
            <h1>
                Viewing Docs for feature {params[0]}
            </h1>
        )
    else if (params.length === 3)
        return (
            <h1>
                Viewing Docs for feature {params[0]} and concept {params[1]} and example {params[2]}
            </h1>
        )


    return (
        <h1>
            Docs
        </h1>
    )
}

export default Docs;