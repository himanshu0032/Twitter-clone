import { Grid } from '@mui/material'
import React from 'react'
import Navigtaion from '../Navigation/Navigtaion'
import HomeSection from '../HomeSection/HomeSection'

const HomePage = () => {
  return (
    <Grid container xs={12} className='px-5 lg:px-36 justify-between'>
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
        <Navigtaion/>
        </Grid>

        <Grid item xs={12} lg={6} className='hidden lg:block w-full relative'>
         <p className='text-center'> <HomeSection/></p>
        </Grid>

        <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
         <p className='text-center'> right Part </p>
        </Grid>

    </Grid>
  )
}

export default HomePage