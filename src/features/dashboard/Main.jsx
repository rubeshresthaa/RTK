import { useGetAllProductsQuery } from "../products/productApi";
import ProductCard from "../products/ProductCard";


const Main = () => {
  const { isLoading, data } = useGetAllProductsQuery();
  if (isLoading) {
    return <h1>Loading...</h1>  
  }
 

  return (
    <div className="grid grid-cols-4 gap-6 p-5">
      {data && data?.map((product) => {
          return <ProductCard key={product._id} product={product}/>
        })}
    </div>
  );
};

export default Main;
