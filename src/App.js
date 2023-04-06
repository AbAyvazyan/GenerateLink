import './App.css';


import GetLink from "./Components/GetLink";
import GetLinkDetails from "./Components/GetLinkDetails";
import ShowLinks from "./Components/ShowLinks";

import {useState} from "react";



const App = () =>{

    const [ownedLink,setOwnedLink] = useState(false)
    const [showPart,setShowPart] = useState(false)
    const [link,setLink] = useState('')

    const GetLinkHandler = (url) => {
        setLink(url)
        setOwnedLink(true)
    }

    const openShowModalHandler = () =>{
        setShowPart(true)
    }

    console.log(link)

  return(
      <>
          {showPart ? <ShowLinks/> : (!ownedLink?<GetLink continueButtonHandler={GetLinkHandler}/>:<GetLinkDetails openSHowModal={openShowModalHandler}/>)}
      </>
  )
}

export default App;
