import React from 'react'

// Material UI components
import { Grid } from '@material-ui/core'
// context
import {ContextData} from '../context/contextData'
// props
import AccountStatsProps from '../props/AccountStatsProps'

const AccountStats = () => {
    const {user } = React.useContext(ContextData)
    const { id , public_repos , followers, following , public_gists }  = user

    return (
        <>
                        <Grid container spacing={2} style={{marginTop: '1rem' }} key={id}>
                            <AccountStatsProps icon = "fa fa-suitcase" number = {public_repos} writings = "Repos" color="rgb(255,165,0.5)" backgroundColor="rgb(255,165,0,0.2)" />
                            <AccountStatsProps icon = "fa fa-users" number = {followers} writings = "Followers" color="rgb(63,81,181,0.5)" backgroundColor="rgb(63,81,181,0.2)"/>
                            <AccountStatsProps icon = "fa fa-user-plus" number = {following} writings = "Following" color="rgb(238,17, 41, 0.5)" backgroundColor="rgb(238,17, 41,0.2)" />
                            <AccountStatsProps icon = "fa fa-code" number={public_gists} writings = "Gists" color="rgb(62, 201, 196,0.5)"  backgroundColor="rgb(62, 201, 196,0.2)"/>                                               
                        </Grid>                             
        </>
    )
}


export default AccountStats