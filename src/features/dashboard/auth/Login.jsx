import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { useLoginUserMutation } from "./userApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";

const loginSchema=Yup.object({
  email:Yup.string().email().required(),
  password:Yup.string().required()
})
const Login = () => {
  const dispatch=useDispatch()

  const [loginUser, {isLoading}]=useLoginUserMutation()
  const nav=useNavigate();

  const {handleChange,handleSubmit,touched,errors,values}=useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:async (val)=>{
      try {
        const response=await loginUser(val).unwrap(); //unwrap immediate success ra error response dekhuana ko lagi 
        dispatch(addUser(response))
        nav(-1);

        toast.success('Successfully Logged In')
        
      } catch (err) {
         toast.error(err.data?.message)
      }
     

    },
    validationSchema:loginSchema,
  })
  return (
    <div className=" p-4 w-80 max-w-screen-lg sm:w-96 mx-auto">
      <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
    
      <form className="mt-4 mb-2" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Enter Your Email
          </Typography>
          <Input
          name="email"
          onChange={handleChange}
          value={values.email}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.email && touched.email && <h1 className="text-red-700">{errors.email}</h1>}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Enter Your Password
          </Typography>
          <Input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.password && touched.password && <h1 className="text-red-700">{errors.password}</h1>}
        </div>
        <Button type="submit"  loading={isLoading} className="mt-6" fullWidth>
          Sign In
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account ?{" "}
            <button type="button" onClick={() => nav('/register')} className="font-medium text-gray-900"> Sign Up</button>

          </Typography>
      </form>
    </Card>
    </div>
  )
}
export default Login