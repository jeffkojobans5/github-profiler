import React from 'react'

// Material UI components
import { InputBase , Paper } from '@material-ui/core'

// icons
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

// context
import {ContextData} from '../context/contextData'

// import styles
import useStyles from '../Styles/Styles'

const Search = () => {
    const classes = useStyles();
    const { handleSearch , handleInput , searchInput} = React.useContext(ContextData)

    return (
        <>
                    <Paper component = "form" onSubmit = {handleSearch} className = {classes.root} style={{width: '100%' , backgroundColor: 'whitesmoke' , marginTop: '2rem'}}>
                        <InputBase placeholder="Enter Github User " className = { classes.textfield } onChange = {handleInput} value = { searchInput } >
                        </InputBase>
                        <IconButton aria-label="menu" onClick={ handleSearch } >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
        </>
    )
}

export default Search