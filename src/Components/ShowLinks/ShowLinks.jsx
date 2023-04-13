import './ShowLinks.css'
import TextAnimation from "../TextAnimation";

const ShowLinks = () =>{
    return(

        <div className={'link_generator_part'}>

            <div className={'show_link_info info_text'} >
                <TextAnimation text={'Here you go. We assure you if user will open this links in \n' +
                    'mobile browser and the application will be installed your page\n' +
                    'will be opened in application'}/>
            </div>

            <div className={'helpful_link'}>
                <TextAnimation text={'Link For IOS'} delay={2500}/>
            </div>

            <a className={'your_link'}  style={{top: '53%'}}>
                <TextAnimation text={'fb://profile/100008373994021'} delay={2800}/>
            </a>

            <div className={'helpful_link'} style={{top: '68%'}}>
                <TextAnimation text={'Link For Android'} delay={3300}/>
            </div>

            <a className={'your_link'}  style={{top: '83%'}}>
                <TextAnimation text={'fb://profile/100008373994021'} delay={3500}/>
            </a>




            <div className={'very_large_line'}></div>
            <div className={'light_circle'}></div>
            <div className={'light_circle_little'} style={{top:'40%'}}></div>
            <div className={'light_circle_little'} style={{top:'55%'}}></div>
            <div className={'light_circle_little'} style={{top: '70%'}}></div>
            <div className={'light_circle_little'} style={{top: '85%'}}></div>
        </div>
    )
}

export default ShowLinks