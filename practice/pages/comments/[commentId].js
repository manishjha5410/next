import React from 'react'

import {comments} from '../../data/comments'

let commentDetails = ({comment}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [update,setUpdate] = React.useState(``);

    let submitComment = async (commentId) => {
        let comment = update;
        const res = await fetch(`/api/comments/${commentId}`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify( { comment } )
        })
        const data = await res.json();
    }

    let deleteComment = async (commentId) => {
        const res = await fetch(`/api/comments/${commentId}`,{
            method: 'DELETE'
        })
        const data = await res.json();
    }


    return (
        <>
            <h1>
                {comment.id}
            </h1>
            <p>{comment.text}</p>
            <button onClick={() =>{ deleteComment(comment.id) }}>Delete</button>
            <p>Change Content</p>
            <input type="text" value={update} onChange={e=>setUpdate(e.target.value)} />
            <button onClick={() =>{ submitComment(comment.id) }}>Submit Comment</button>
        </>
    )
}

export default commentDetails

export async function getStaticPaths()
{
    return {
        paths: [
            {
                params: {
                    commentId: '1'
                }
            },
            {
                params: {
                    commentId: '2'
                }
            },
            {
                params: {
                    commentId: '3'
                }
            },
            {
                params: {
                    commentId: '4'
                }
            }
        ],
        fallback:false
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    const {commentId} = params;

    const comment = comments.find(comment=>comment.id===parseInt(commentId));

    return {
        props: {
            comment,
        }
    }
}

/*
export async function getServerSideProps(context)
{
    const {params} = context;
    const {commentId} = params;

    const res = await fetch(`http://localhost:3000/api/comments/${commentId}`);
    const data = await res.json();


    return {
        props: {
            comment: data
        }
    }
}
*/