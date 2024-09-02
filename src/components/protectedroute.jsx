import { useUser } from '@clerk/clerk-react'
import React, { Children } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const {isSignedIn, user, isLoaded} = useUser()   // useUser is like a global context provided by clerk.
    const {pathName} = useLocation()

    if(isLoaded && !isSignedIn && isSignedIn !== undefined) return <Navigate to='/?sign-in=true' />

    // onboarding status i.e if its a candidate or a empoloyee

    // this is user doesnt have any onboaring status (i.e if hes a recruoter or a employer he/she should not be able to go to jobs page)
    if(user!== undefined && !user?.unsafeMetadata?.role && pathName !== '/onboarding'){
        return <Navigate to='/onboarding'/>
    }

  return children
  
}

export default ProtectedRoute