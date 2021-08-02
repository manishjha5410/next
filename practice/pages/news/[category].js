let ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h1>
        Showing News for category <i>{category}</i>
      </h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title}
            </h2>
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params,req,res,query } = context;
  const { category } = params;

  const resp = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await resp.json();

  res.setHeader('Set-Cookie',["name=Manish"])

  console.log('Pre Rendering News Article for Category'+category);

  return {
    props: {
      articles: data,
      category,
    },
  };
}
