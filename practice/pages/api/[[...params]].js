export default function handler(req, res)
{
    const params = req.query.params;
    console.log(params);
    if(params)
        res.status(200).json(params);
    else
        res.status(200).json({
            "text":"Home Api"
        })
}