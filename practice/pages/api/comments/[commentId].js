import { comments } from "../../../data/comments";
import fs from 'fs';
import path from 'path'

export default function handler(req, res)
{
    const { commentId } = req.query;

    if(req.method === "GET")
    {
        const comment = comments.find((comment) => comment.id === parseInt(commentId));
        res.status(200).json(comment);
    }
    else if(req.method === "DELETE")
    {
        const deletedComment = comments.find((comment) => comment.id === parseInt(commentId));
        const index = comments.findIndex(comment => comment.id === parseInt(commentId));
        comments.splice(index, 1);
        res.status(200).json(deletedComment);
    }
    else if(req.method === "PATCH")
    {
        const postsDirectory = path.join(process.cwd(), 'data')
        const filenames = fs.readdirSync(postsDirectory)

        const posts = filenames.map(filename => {
          const filePath = path.join(postsDirectory, filename)
          const fileContents = fs.readFileSync(filePath, 'utf8').replace( /[\r\n]+/gm, "" );

          const firstPart = fileContents.split('=')[0];
          const secondPart = fileContents.split('=')[1];


        //   console.log(eval(fileContents));
        console.log(firstPart,secondPart);

          return {
            filename,
            content: fileContents,
          }
        })

        const comment = req.body.comment;
        const updatedComment = comments.find((comment) => comment.id === parseInt(commentId));
        const index = comments.findIndex(comment => comment.id === parseInt(commentId));
        comments[index].text = comment;
        res.status(200).json(updatedComment);
    }
}

