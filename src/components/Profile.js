import React from 'react'

// MATERIAL UI comp
import {  Paper , Grid , Typography , Button , Link } from '@material-ui/core'
// styles
import useStyles from '../Styles/Styles'
// contextData
import { ContextData } from '../context/contextData'

const Profile = () => {
    const classes = useStyles();
    const { user } = React.useContext(ContextData)
    const { name , avatar_url , login , company , location , blog , html_url } = user

    return (
        <Grid item lg={5} sm={6} xs={12}>
        <Paper className = {classes.Profile} style={{padding: '1rem' , minHeight:"300px"}}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <img src={avatar_url} style={{width:"100px", height:"100px" , borderRadius: '100%'}} alt='Profile Picture'/>
                </Grid>
                <Grid item xs>
                    <Typography variant="h6">  {name} </Typography>
                    <Typography variant="h6" style={{color:'gray' , fontSize : '1rem'}}>  @{login} </Typography>
                </Grid>
                <Grid item xs>
                        <Button
                            component = {Link}
                            variant="contained"
                            color="primary"
                            className={classes.follow}
                            spacing = {3}
                            endIcon={  <i class="fas fa-user-plus"></i>  }
                        > <a href={html_url} target="_blank" style={{color: 'white' , textDecoration: "none"}}>FOLLOW</a></Button>
                </Grid>
            </Grid>
        
               <Grid container className = {classes.info}>
                    {company ? <i class="fas fa-building" style={{fontSize: '1rem' , marginTop: '3px' , marginRight: '10px'}}></i> : ""}
                    {company ? <Typography> {company} </Typography> : ""}
               </Grid>                                                                                      

               <Grid container className = {classes.info}>
                    {location ? <i class="fas fa-map-marker-alt" style={{fontSize: '1rem' , marginTop: '3px' , marginRight: '10px'}}></i> : ""}
                    {location ? <Typography> {location} </Typography> : ""}
               </Grid>     

               <Grid container className = {classes.info} id="info">
                    { blog ? <i class="fas fa-link" style={{fontSize: '1rem' , marginTop: '3px' , marginRight: '10px'}}></i> : ""}
                    { blog ? <Typography> <a href= {blog} > {blog} </a> </Typography> : ""}
               </Grid>                                                
        </Paper>
</Grid>        
    )
}

export default Profile