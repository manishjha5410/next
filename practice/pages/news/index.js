let NewsArticleList = ({ articles }) => {
    return (
        <>
            <h1>List of News articles</h1>
            {
                articles.map(article=> {
                    return (
                        <div key={articles.id}>
                            <h2>
                                {article.id} {article.title} | {article.category}
                            </h2>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default NewsArticleList;

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:4000/news`);
    const data = await res.json();

    console.log('Pre Rendering News Article List');

    return {
        props: {
            articles: data
        }
    }
}