import useSWR from 'swr'

function DashboardSwr() {

    const fetcher = async()=>{
        const res = await fetch('http://localhost:4000/dashboard');
        const data = await res.json();
        return data;
    }

    const {data,error} =  useSWR('dashboard',fetcher);

    if(error)
        return <h1>Error has occur</h1>
    if(!data)
        return <h1>Loading...</h1>
    if(data)
        return (
            <div>
                <h2>Dashboard</h2>
                <h2>Post - {data.posts}</h2>
                <h2>Likes - {data.likes}</h2>
                <h2>Followers - {data.followers}</h2>
                <h2>Following - {data.following}</h2>
            </div>
        )
}

export default DashboardSwr;
