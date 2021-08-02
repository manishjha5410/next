import React from 'react';

let Dashboard = () => {
    const [isLoading,setIsLoading] = React.useState(true);
    const [dashboardData,setDashboardData] = React.useState(null);

    React.useEffect(() => {
        async function fetchDashboardData() {
            const res = await fetch('http://localhost:4000/dashboard');
            const data = await res.json();

            setDashboardData(data);
            setIsLoading(false);
        }

        fetchDashboardData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Post - {dashboardData.posts}</h2>
            <h2>Likes - {dashboardData.likes}</h2>
            <h2>Followers - {dashboardData.followers}</h2>
            <h2>Following - {dashboardData.following}</h2>
        </div>
    )
}

export default Dashboard;