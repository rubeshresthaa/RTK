import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { useRegisterUserMutation } from "./userApi";
import { toast } from "react-toastify";


const registerSchema=Yup.object({
  fullname:Yup.string().min(5).max(50).required(),
  email:Yup.string().email().required(),
  password:Yup.string().required()
})



const Register = () => {
  const nav=useNavigate()
   const [registerUser,{isLoading}]=useRegisterUserMutation()
  const {handleChange,handleSubmit,touched,values,data,errors} =useFormik({
    initialValues:{
      fullname:'',
      email:'',
      password:''
    },
    onSubmit:async(val)=>{
      try {
        const response=await registerUser(val).unwrap();
        toast.success('Successfully Registered')
        nav(-1)

        
      } catch (err) {
        toast.error(err.data?.message)
        
      }

    },
    validationSchema:registerSchema
    

  })
  
  return (
    <div className=" p-4 w-80 max-w-screen-lg sm:w-96 mx-auto">
    <Card color="transparent" shadow={false}>
    <Typography variant="h4" color="blue-gray">
      Sign Up
    </Typography>
  
    <form className="mt-4 mb-2 " onSubmit={handleSubmit}>
      <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Enter Your FullName
        </Typography>
        <Input
        name="fullname"
        onChange={handleChange}
        value={values.fullname}
          size="lg"
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        {errors.fullname && touched.fullname && <h1 className="text-red-700">{errors.fullname}</h1>}
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
          onChange={handleChange}
          value={values.password}
          size="lg"
          placeholder="********"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        {errors.password && touched.password && <h1 className="text-red-700">{errors.password}</h1>}
      </div>
      <Button  loading={isLoading} type='submit' className="mt-6" fullWidth>
        Sign Up
      </Button>
      <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account ?{" "}
            <button type="button" onClick={() => nav(-1)} className="font-medium text-gray-900">Sign In</button>

          </Typography>
    </form>
  </Card>
  </div>
  )
}
export default Register