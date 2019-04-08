import React, { useState, useEffect } from "react";
import DrumBeat from './DrumBeat'
import useKey from 'use-key-hook';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  useEffect(
    () => {
      if (playing) {
        audio.currentTime = 0
        audio.play()
      } else {
        audio.pause()
      }
    },
    [playing]
  );

  const startPlaying = shouldStart => {
    audio.currentTime = 0
    setPlaying(shouldStart)
  }

  return [playing, startPlaying];
};

function Drum({letter, sound, color}) {
  const [pressed, setPressed] = useState(false)
  const [playing, setPlaying] = useAudio(`sounds/${sound}.wav`);
  const [drumBeats, setDrumBeats] = useState([])
  const [drumBeatId, setDrumBeatId] = useState(0)

  let styles = {
    border: '.4rem solid black',
    borderRadius: '.5rem',
    margin: '1rem',
    fontSize: '1.5rem',
    padding: '1rem .5rem',
    transition: 'all .07s ease',
    width: '10rem',
    textAlign: 'center',
    color: 'white',
    background: 'rgba(0,0,0,0.4)',
    textShadow: '0 0 .5rem black',
    userSelect: 'none',
    position: 'relative',
    borderColor: color,
    boxShadow: playing ? `0 0 1rem ${color}` : ''
  }

  let mouseDown = event => {
    setPressed(true)
    const newDrumBeatId = drumBeatId
    console.log('drumBeatId', drumBeatId)
    setDrumBeatId(drumBeatId + 1)
    const newDrumBeats = [
      ...drumBeats,
      {
        id: newDrumBeatId,
        createdAt: Date.now()
      }
    ]
    console.log('adding drumbeat', drumBeats.map(el => el), newDrumBeats, '\n')
    setDrumBeats(newDrumBeats)

    // setTimeout(function() {
    //   const removedDrumBeats = drumBeats.filter(drumBeat => Date.now() - drumBeat.createdAt < 3000)
    //   console.log('removing drumbeat', drumBeats.map(el => el), removedDrumBeats, '\n')
    //   setDrumBeats(removedDrumBeats)
    // }, 2900)

    setPlaying(false)
    setPlaying(true)
  }

  let mouseUp = event => {
    setPressed(false)
  }

  let keyDown = event => {
    if (event.key.toUpperCase() === letter) {
      mouseDown()
    }

  }

  let keyUp = event => {
    if (event.key.toUpperCase() === letter) {
      mouseUp()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);

    return function cleanup() {
      document.removeEventListener("keydown", keyDown);
      document.removeEventListener("keydown", keyUp);
    };
  });

  console.log('about to render', drumBeats)
  const drumBeatsJsx = drumBeats
    // FIXME: There is some weird bug in the react version, where
    // drumbeats aren't being removed, so we also check the timestamp and
    // filter them here.
    .filter(drumBeat => Date.now() - drumBeat.createdAt < 5000)
    .map(drumBeat => (
    <DrumBeat
      key={drumBeat.id}
      color={color}/>)
  )

  console.log('color', color)
  return(
    <div
      className={pressed ? "playing" : ""}
      style={styles}
      onMouseUp={mouseUp}
      onMouseDown={mouseDown}>
      <div className='kbd'>{letter}</div>
      <span
        className="sound"
        style={{color: color}}
        >{sound}</span>
      {drumBeatsJsx}
    </div>
  )
}
export default Drum
