import React, { useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import IconButton from "@mui/material/IconButton";
import { BsPlay } from "react-icons/bs";
import SongList from "./Data";
import "./playlist.css";
import "./audio.css";
import { useDispatch } from "react-redux";
import { audioActions } from "../Redux/Features/audioSlice";

// console.log(SongList)

const Playlist = () => {
  const dispatch = useDispatch();

  const [songList, setSongsList] = useState(SongList);
  const [icons, setIcons] = useState(false);

  const sendAudio = (id) => {
    const i = songList.find((song) => id == song.id);
    console.log(i);

    dispatch(audioActions(i));
  };

// play and pause icons change
const playAndPauseIcon =()=>{
  setIcons(true)
}

  return (
    <>
      <div className="w-[80vw] w426 lg:w-[80vw]  relative mdplaylist playlistAudio flex justify-center items-center">
        {/* <div className="flex flex-col gap-3 playlistw90vw overflow-auto lg:h-[500px] md:h-[400px] h-[380px] lg:w-[80vw] md:w-[70vw]"> */}
        <div className="flex flex-col gap-3 playlistw90vw overflow-auto playlisth lg:h-[500px] md:h-[400px] h-[380px] lg:w-[80vw] md:w-[70vw]">
          {/* {SongList.map((songs, i) => {
        return ( */}

          {songList.map((songs, i) => {
            // console.log(songs.id + "this is id");
            return (
              <>
                <div
                  key={songs.id}
                  className=" w-full flex lg:px-5  cursor-pointer "
                  onClick={() => { sendAudio(songs.id); playAndPauseIcon();}}
                  // onClick={() => sendAudio(songs.id)}
                >
                  {/* <div className="w-[20vw] flex playlistw lg:w-[10vw] md:w-[10vw] playlist20vw  pr-[10px]  justify-center items-center center bg-[#8080802e]">
                    <IconButton
                      color="primary"
                      aria-label="add to shopping cart"
                      >
                      {
                        icons ? "pause" :<PlayCircleOutlineIcon /> 
                      }
                        
                        </IconButton>
                  </div> */}
                  <div className="w-[70vw] playlist70vw relative  lg:w-[70vw] bg-[#8080802e]">
                    <p className="font-bold text-[12px]">{songs.title}</p>
                    <p className="text-[10px]">{songs.artistName}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Playlist;
