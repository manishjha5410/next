import User from "../components/user";

let UserList = (props) => {
    return (
        <>
            <h1>List Of Users</h1>
            {
                props.users.map(user=>{
                    return (
                        <div key={user.id}>
                            <User user={user} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default UserList;

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            users: data,
        }
    }
}