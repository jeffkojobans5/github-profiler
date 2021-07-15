import React from 'react'

// global styles
import './Styles/Styles.css'
// styles
import useStyles from  './Styles/Styles'
// context API
import { ContextData }  from './context/contextData'
// material UI components
import { CssBaseline,  Container,  Paper , Grid } from '@material-ui/core'
//components
import { AccountStats  , FilterRepos , Profile , Repos , ReposChart , Search , FoundUser , Loading , Filter } from './components/index'
    


const App = () => {
    const classes = useStyles();
    const { loading } = React.useContext(ContextData)

    if(loading) {
      return (
        <Loading />
      )
    }

    return (
        <>
            <CssBaseline />
                <Container maxWidth="lg">
                    <Search />
                    <FoundUser />
                    <AccountStats />
                        <Grid container spacing={2} >
                            <Profile />
                            <ReposChart />
                        </Grid>                
                <Paper container className = {classes.repos} > 
                        <Filter />
                        <FilterRepos />                          
                        <Repos />
                </Paper>
                </Container>
        </>
    )
}

export default App

