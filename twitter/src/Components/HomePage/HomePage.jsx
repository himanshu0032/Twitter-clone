import { Grid } from '@mui/material'
import React from 'react'
import Navigtaion from '../Navigation/Navigtaion'
import HomeSection from '../HomeSection/HomeSection'
import RightPart from '../RightPart/RightPart'

const HomePage = () => {
  return (
    <Grid container xs={12} className='px-5 lg:px-36 justify-between'>
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
        <Navigtaion/>
        </Grid>

        <Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
         <p className='text-center'> <HomeSection/></p>
        </Grid>

        <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
         <p className='text-center'> <RightPart/> </p>
        </Grid>

    </Grid>
  )
}

export default HomePage