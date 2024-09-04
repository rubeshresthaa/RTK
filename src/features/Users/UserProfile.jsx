import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useUpdateProfileMutation } from "../dashboard/auth/userApi";
import { toast } from "react-toastify";
import { useFormik } from "formik";

import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { addUser } from "../dashboard/auth/userSlice";

const updateSchema = Yup.object({
  email: Yup.string().email().required(),
  fullname: Yup.string().required(),
});

const UserProfile = ({user}) => {
  const [updateUser, { isLoading }] = useUpdateProfileMutation();
  const dispatch = useDispatch();
  const { values, errors, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      email: user?.email,
      fullname: user?.fullname
    },
    onSubmit: async (val) => {
      try {
        const newUser = { ...user, email: val.email, fullname: val.fullname };

        const response = await updateUser(newUser).unwrap();
        dispatch(addUser(newUser))
        toast.success('successfully updated');

      } catch (err) {
        toast.error(err.data?.message);
      }
    },
    validationSchema: updateSchema
  });
  return (
    <div>
        <div className=" p-4 w-80 max-w-screen-lg sm:w-96 mx-auto">
      <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Update Profile
      </Typography>
    
      <form className="mt-4 mb-2" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
            Enter Your Full Name
          </Typography>
          <Input
            type="text"
            name="password"
            value={values.fullname}
            onChange={handleChange}
            size="lg"
         
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
          
        </div>
        <Button type="submit"  loading={isLoading} className="mt-6" fullWidth>
          Update
        </Button>
       
      </form>
    </Card>
    </div>
    </div>
  )
}
export default UserProfile