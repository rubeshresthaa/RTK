import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";


const Register = () => {
  const nav=useNavigate()
  return (
    <div className=" p-4 w-80 max-w-screen-lg sm:w-96 mx-auto">
    <Card color="transparent" shadow={false}>
    <Typography variant="h4" color="blue-gray">
      Sign Up
    </Typography>
  
    <form className="mt-4 mb-2 ">
      <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Enter Your Name
        </Typography>
        <Input
          size="lg"
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Enter Your Email
        </Typography>
        <Input
          size="lg"
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Enter Your Password
        </Typography>
        <Input
          type="password"
          size="lg"
          placeholder="********"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      <Button className="mt-6" fullWidth>
        Sign Up
      </Button>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Alreadt have an account?{" "}
        <buttton type="submit"  onClick={()=>nav(-1)} className='font-normal text-blue-gray-900 cursor-pointer'>Sign in</buttton>
      </Typography>
    </form>
  </Card>
  </div>
  )
}
export default Register