import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          key={1}
          productId={1232}
          name={"macbook"}
          price={45}
          stock={455}
          handler={addToCartHandler}
          photo={"https://m.media-amazon.com/images/I/61RHsomZZTS.__AC_SY445_SX342_QL70_ML2_.jpg"}
        />
      </main>
    </div>
  )
}

export default Home