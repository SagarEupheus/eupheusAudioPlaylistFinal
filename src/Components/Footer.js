import React, {  useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
import "./footer.css";

const Footer = () => {
  const selector =useSelector((state)=> state.audio.currentAudio)
  const [url, setUrl] = useState(selector[0].fileUrl)
// console.log(selector);
  // let url = JSON.parse(JSON.stringify(selector))


  return (
    <div className=' h-[12vh] absolute bottom-0 w-full footermain  ' >

      <div className="h-[12vh] lg:h-[12vh] lg:relative footer  relative z-30  md:relative songs">
        <div className="playlist">
          <AudioPlayer
            style={{ padding:"0px 15px", height: "12vh" }}
            src={selector[0].fileUrl}
            // showSkipControls={true}

          />
        </div>
      </div>
    </div>
  )
}

export default Footer


