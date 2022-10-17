import React, {  useEffect, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { audioActions } from '../Redux/Features/audioSlice';
import "./footer.css";

const Footer = () => {
  const dispatch = useDispatch()
  const selector =useSelector((state)=> state.audio.currentAudio)
  // const selectorId =useSelector((state)=> state.audio.currentAudioId)
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

  
//  const button = document.getElementsByClassName("rhap_button-clear rhap_main-controls-button rhap_skip-button")[0]

//  button.onclick = function () {
//   alert('alksjdflk')
//  }

  

const previousSong =()=>{
  const previousSong = AllAudios.find(audio => Number(audio.id) === Number(selector[0].id) - 1)
  sendAudio(previousSong.id)

}

const ended =()=>{
  // console.log("helleo")
  // setIndex(index + 1)
  const nextAudio = AllAudios.find(audio => Number(audio.id) === Number(selector[0].id) + 1)
  sendAudio(nextAudio.id)
}

const onPlayFunc =(idofplay)=>{
  console.log(idofplay+" play")
  // dispatch(audioActions(idofplay));
}
const onPauseFunc =(idofpause)=>{
  console.log(idofpause +" pause")
  // dispatch(audioActions( idofpause));
}

 const [playState, setplaystate] = useState(false)


// togglePlaystate function 
 const togglePlaystate =()=>{
    console.log(playState+"gfhjdfs")
     setplaystate(!playState) 
 }


  return (
    <div className=' h-[12vh] absolute bottom-0 w-full footermain  ' >

      <div className="h-[12vh] lg:h-[12vh] lg:relative footer  relative z-30  md:relative songs">
        <div className="playlist">
          <AudioPlayer
            style={{ padding:"0px 15px", height: "12vh" }}
            src={selector[0].fileUrl}
            onPlay={() => {onPlayFunc(selector[0].id); togglePlaystate();}}
            // onPause={() => (onPauseFunc(selector[0].id ) ; func2();}}
            onEnded={ended}
            onPause={() => {onPauseFunc(selector[0].id ); togglePlaystate();}}
            showSkipControls={true}
            onClickPrevious={previousSong}
            onClickNext={ended}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer


