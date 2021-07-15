import React from 'react'

// icons
import Loader from "react-loader-spinner";
// context API
import { ContextData }  from '../context/contextData'


const Loading = () => {
    
	return (
          <>
          <div className="loader">
            <Loader
              type="Bars"
              color="blanchedalmond"
              height={100}
              width={100}
            />        
          </div>
          </>
		)
}



export default Loading