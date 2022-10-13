import React, {  useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { audioActions } from '../Redux/Features/audioSlice';
import "./footer.css";

const Footer = () => {
  const dispatch = useDispatch()
  const selector =useSelector((state)=> state.audio.currentAudio)
  const AllAudios =useSelector((state)=> state.audio.audios)
  // const [url, setUrl] = useState(selector[0].fileUrl)

  // const [index, setIndex] =useState(0)
  const [current, setCurrent] = useState(selector[0])

  const sendAudio = (id) => {
    const i = AllAudios.find((song) => id == song.id);
    // console.log(i);

    dispatch(audioActions(i));
  };

  console.log(current);
  // const Selectedsongs=current.fileUrl
  // console.log(selector[ind);
// console.log(selector);
  // let url = JSON.parse(JSON.stringify(selector))

  // previous songs button 

  // const previoussongsbtn = document.getElementsByClassName("button.rhap_button-clear.rhap_main-controls-button.rhap_skip-button")

const ended =()=>{
  // console.log("helleo")
  // setIndex(index + 1)
  const nextAudio = AllAudios.find(audio => Number(audio.id) === Number(selector[0].id) + 1)
  sendAudio(nextAudio.id)
  
}

// previoussongsbtn.onclick = function() {alert("Hello!");};
  return (
    <div className=' h-[12vh] absolute bottom-0 w-full footermain  ' >

      <div className="h-[12vh] lg:h-[12vh] lg:relative footer  relative z-30  md:relative songs">
        <div className="playlist">
          <AudioPlayer
            style={{ padding:"0px 15px", height: "12vh" }}
            // src={selector[0].fileUrl}
            src={selector[0].fileUrl}
            onEnded={ended}
            // showSkipControls={true}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer


