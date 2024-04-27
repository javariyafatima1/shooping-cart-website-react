import React from 'react'
import {    useNavigate,} from "react-router-dom";
import Swal from "sweetalert2"
import {
  FormControl,FormLabel,FormErrorMessage,Box,Input,Button,} from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const Login = () => {
    const navigate = useNavigate();
    const LoginSchema = Yup.object().shape({
      email: Yup.string().email("invalid email").required(),
      password: Yup.string().min(6, "too short").max(10, "too long").required(),
      })
  const formik = useFormik({
      initialValues: {
          email: "",
          password: ""
      },
      onSubmit: (values) => {
        const signupDetails = JSON.parse(localStorage.getItem('signupDetails'));

        if (signupDetails && signupDetails.email === formik.values.email && signupDetails.password === formik.values.password) {
        Swal.fire({
          title: "sucess",
          icon: 'sucess',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
 })

    navigate("/dashboard",{ state: { username: signupDetails.username } })
    } else{
          Swal.fire({
            title: "Error",
            text: "Invalid email or password",
            icon: 'error',
            confirmButtonColor: '#3085d6',
          });
        }    
       
      },
      validationSchema: LoginSchema
  })

  return (
      <>
     
         <Box style={{ textAlign: 'center', marginTop: '50px' }}>
    <form onSubmit={formik.handleSubmit} style={{ width: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
       
        <FormControl isInvalid={formik.touched.email && formik.errors.email} style={{ marginBottom: '20px' }}>
            <FormLabel>Email address</FormLabel>
            <Input
                type='text'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                style={{ width: '100%', padding: '10px', borderRadius: '3px', border: '1px solid #ccc' }}
            />
            <FormErrorMessage  id="color">{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.password && formik.errors.password} style={{ marginBottom: '20px' }}>
            <FormLabel>Password</FormLabel>
            <Input
                type='password'
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                style={{ width: '100%', padding: '10px', borderRadius: '3px', border: '1px solid #ccc' }}
            />
            <FormErrorMessage  id="color">{formik.errors.password}</FormErrorMessage>
        </FormControl>
        
        <Button type='submit' style={{ width: '100%', padding: '10px', backgroundColor: '#3e91b1', color: '#fff', borderRadius: '3px', border: 'none', cursor: 'pointer' }}>Login</Button>
    </form>
</Box>
        </>
  )

}

export default Login;