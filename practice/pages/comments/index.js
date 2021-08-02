import React from "react";

function CommentsPage() {

    const [comments,setComments] = React.useState([]);
    const [comment,setComment] = React.useState(``);

    let fetchComments = async () => {

        const results = await fetch(`/api/comments`);
        const data = await results.json();

        setComments(data);
    }

    let submitComment = async () => {
        const res = await fetch(`/api/comments`,{
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();

        console.log(data);
    }

    return (
        <>
            <input type="text" value={comment} onChange={e=>setComment(e.target.value)} />
            <button onClick={submitComment}>Submit Comment</button>
            <button onClick={fetchComments}>Load comments</button>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <h1>{comment.id}</h1>
                            <p>{comment.text}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default CommentsPage
