import TextAnimation from "../TextAnimation";
import {useEffect,useState} from "react";

import './GetLink.css'

const GetLink = ({continueButtonHandler}) => {

    const [validated,setValidated] = useState(false)
    const [inputValue,setInputValue] = useState('')
    const [labelFor,setLabelFor] = useState(false)



    const InputLengthChecker = (e) =>{

        if(e.target.value.length>0){
            setLabelFor(true)
        }else{
            setLabelFor(false)
        }

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

            <div className={'info_text'}>
                <TextAnimation text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been '}/>
            </div>

            <div className={'get_link'}>
                <input type="text" id={'get_link'} onChange={(e)=>InputLengthChecker(e)}/>

                <label htmlFor={'get_link'} className={labelFor ? 'disappear' : ''}>
                    <TextAnimation text={'Paste or type link here ...'} delay={1500}/>
                </label>
            </div>

            {validated && <div className={'continue_button'} onClick={()=>continueButtonHandler(inputValue)}>Continue &#8594;</div>}


            <div className={validated?'light_line_increased':'light_line'}></div>
            <div className={'light_circle'}></div>
            <div className={'light_circle_little'} style={{top:'40%'}}></div>
            {validated && <div className={'toggle_circle'} style={{top: '55%'}}></div>}
        </div>
    )
}

export default GetLink