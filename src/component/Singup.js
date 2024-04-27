import React from 'react'
import {    useNavigate,} from "react-router-dom";
import Swal from 'sweetalert2';
import {
FormControl,FormLabel,FormErrorMessage,Box,Input,Button,} from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const Singup = () => {
    const navigate = useNavigate();
    const SignupSchema = Yup.object().shape({
      username: Yup.string().min(4, "too short").max(6, "too long").required(),
      email: Yup.string().email("invalid email").required(),
      password: Yup.string().min(6, "too short").max(10, "too long").required(),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
 })

  const formik = useFormik({
      initialValues: {
          username: '',
          email: "",
          password: ""
      },
      onSubmit: (values) => {
        localStorage.setItem('signupDetails', JSON.stringify(values));
        Swal.fire({
            title: " singup sucess",
            icon: 'sucess',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
   })
         navigate("/login")
      },
      validationSchema: SignupSchema
  })

  return (
      <>
     
    <Box style={{ textAlign: 'center', marginTop: '50px' }}>
    <form onSubmit={formik.handleSubmit} style={{ width: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <FormControl isInvalid={formik.touched.username && formik.errors.username} style={{ marginBottom: '20px' }}>
            <FormLabel>Username</FormLabel>
            <Input
                type='text'
                name='username'
                onChange={formik.handleChange}
                value={formik.values.username}
                style={{ width: '100%', padding: '10px', borderRadius: '3px', border: '1px solid #ccc' }}
            />
            <FormErrorMessage id="color">{formik.errors.username}</FormErrorMessage>
        </FormControl>
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
        <FormControl isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword} style={{ marginBottom: '20px' }}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
                type='password'
                name='confirmPassword'
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                style={{ width: '100%', padding: '10px', borderRadius: '3px', border: '1px solid #ccc' }}
            />
            <FormErrorMessage id="color">{formik.errors.confirmPassword}</FormErrorMessage>
        </FormControl>
        <Button type='submit' style={{ width: '100%', padding: '10px', backgroundColor: '#3e91b1', color: '#fff', borderRadius: '3px', border: 'none', cursor: 'pointer' }}>Signup</Button>
    </form>
</Box>

    </>
  )

}

export default Singup;

