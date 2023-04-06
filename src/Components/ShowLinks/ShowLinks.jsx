import './ShowLinks.css'
import TextAnimation from "../TextAnimation";

const ShowLinks = () =>{
    return(

        <div className={'link_generator_part'}>

            <div className={'info_text'} style={{top:'1%'}}>
                <TextAnimation text={'Here you go. We assure you if user will open this links in \n' +
                    'mobile browser and the application will be installed your page\n' +
                    'will be opened in application'}/>
            </div>

            <div className={'helpful_link'}>
                <TextAnimation text={'Link For IOS'} additional={'&#128279;'}/>
            </div>

            <a className={'your_link'}  style={{top: '53%'}}>
                <TextAnimation text={'fb://profile/100008373994021'} additional={'&#128279;'}/>
            </a>

            <div className={'helpful_link'} style={{top: '68%'}}>
                <TextAnimation text={'Link For Android'} additional={'&#128279;'}/>
            </div>

            <a className={'your_link'}  style={{top: '83%'}}>
                <TextAnimation text={'fb://profile/100008373994021'} additional={'&#128279;'}/>
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