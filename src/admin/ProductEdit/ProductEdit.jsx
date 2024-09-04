import { useParams } from "react-router"
import { useGetProductByIdQuery } from "../../features/products/productApi"
import ProductEditForm from "./ProductEditForm"


const ProductEdit = () => {
  const {id}=useParams()
  const {isLoading,data}=useGetProductByIdQuery(id)
  if(isLoading){
    <h1>Loading...</h1>
  }
  console.log(data)
  return (

    <div>
      <ProductEditForm product={data} />


    </div>
  )
}
export default ProductEdit