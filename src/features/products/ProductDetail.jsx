import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useGetProductByIdQuery } from "./productApi";
import { useParams } from "react-router";
import { imageUrl } from "../../contrants/api_urls";
import AddCart from "../Cart/AddCart";


const ProductDetail = () => {
  const {id}=useParams()
  const {isLoading,data} =useGetProductByIdQuery(id)
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return(
    <div>
    <Card className="w-full max-w-[48rem] flex-row">
    <CardHeader
      shadow={false}
      floated={false}
      className="m-0 w-2/5 shrink-0 rounded-r-none"
    >
      <img
        src={`${imageUrl}${data.image}`}
        alt=""
        className="h-full w-full object-cover"
      />
    </CardHeader>
    <CardBody>
      
      <Typography variant="h4" color="blue-gray" className="mb-2">
        {data.title}
      </Typography>
      <Typography color="gray" className="mb-8 font-normal">
        {data.description}
      </Typography>
      <Typography color="gray" className="mb-8 font-normal">
        {data.price}
      </Typography>
     
        <Button variant="text" className="flex items-center gap-2">
          Buy Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>


    </CardBody>
    
  </Card>
  {data && <AddCart product={data} />}
  </div>
  )

 
};
export default ProductDetail;
