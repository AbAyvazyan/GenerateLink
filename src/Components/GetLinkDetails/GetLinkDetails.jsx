import TextAnimation from "../TextAnimation";
import {useState} from "react";

import './GetLinkDetails.css'


const GetLinkDetails = ({openSHowModal}) => {

    const [validated,setValidated] = useState(false)
    const [inputValue,setInputValue] = useState('')

    const InputLengthChecker = (e) =>{
        if(e.target.value.length>=7){
            setValidated(true)
            setInputValue(e.target.value)
        }else {
            setValidated(false)
            setInputValue('')
        }
    }

    return(
        <div className={'link_generator_part'}>

            <div className={'info_text'} style={{top:'5%'}}>
                <TextAnimation text={'Please also provide your facebook id for getting more accurate local link'}/>
            </div>

            <a className={'helpful_link'}>
                <TextAnimation text={'If you don’t know how to get it here’s the link'} additional={'&#128279;'}/>
            </a>

            <div className={'get_input_id'}>
                <input type="text" onChange={(e)=>InputLengthChecker(e)} placeholder={'Paste or type link here ...'}/>
            </div>

            {validated && <div className={'continue_button'} onClick={()=>openSHowModal()} style={{top:'69%'}}>Continue &#8594;</div>}


            <div className={validated?'large_line_increased':'large_line'}></div>
            <div className={'light_circle'}></div>
            <div className={'light_circle_little'} style={{top:'40%'}}></div>
            <div className={'light_circle_little'} style={{top:'55%'}}></div>
            {validated && <div className={'toggle_circle'} style={{top: '70%'}}></div>}
        </div>
    )
}

export default GetLinkDetails