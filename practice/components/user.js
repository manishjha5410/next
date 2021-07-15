function User({user}) {

    return (
        <>
            <p>{user.email}</p>
            <p>{user.name}</p>
        </>
    )
}

export default User;