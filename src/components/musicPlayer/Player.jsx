import React,{useEffect, useRef, useState} from 'react'
import albums from '../shared/json/albums.json'
import H5AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeMusic,readyToPlay } from '../../store/slices/musicSlice';

const Player = () => {
  const playerRef = useRef(null)
  const stateData = useSelector((state)=>state.Music)
  const dispatch = useDispatch()
  const length = albums.length;

  useEffect(() => {
    if(stateData.IsMusicReady){
      console.log(JSON.stringify(stateData))
      handlePlay()
    }
  }, [stateData]);

  const handlePlay = () =>{
      const audio = playerRef.current.audio.current;
      if(audio){
        audio.src = albums[parseInt(stateData.Playing)-1]?.source; // Change the audio source
        audio.play();
      }
    }
  const handleNext = () => {
    if(parseInt(stateData.Playing)+1<=length){
      dispatch(changeMusic(parseInt(stateData.Playing)+1))
    }else{
      dispatch(changeMusic(1))
    }
  };

  const handlePrevious = () => {
    if(parseInt(stateData.Playing)-1>0){
      dispatch(changeMusic(parseInt(stateData.Playing)-1))
    }
  };
  return (
    <div>
      <H5AudioPlayer ref={playerRef} src="" showSkipControls={true} onClickPrevious={handlePrevious} onClickNext={handleNext} />
    </div>
  )
}

export default Player