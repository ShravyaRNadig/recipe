import React,{useState} from 'react';
import ReactPlayer from 'react-player';
import recipe from '../video/breakfast_recipe.mp4';
import myRecipe from '../video/Crispy Wheat Flour Snacks.mp4';
import vide from '../video/Poha Cutlet.mp4';
import myVid from '../video/Manchurian.mp4';
import myVideo from '../video/Suji ka upma.mp4';
import myVideos from '../video/Veggie Pasta.mp4';
import des from '../video/Desserts.mp4';
import pizza from '../video/pizza.mp4';
import './styleSheets/Video.css';

const Video = () => {

  const handleAuthRedirect = () => {
    window.location.href = '/'
  }

  if (sessionStorage.getItem("auth") === 'Authenticated') {
  return (
    <>
    <br/>
    <div className='Video'>
        <ReactPlayer 
          width='420px'
          height='220px'
          controls ={true}
          url={recipe}
          onReady={()=>console.log('onReady callback')}
          onStart={()=>console.log('onStart callback')}
          onPause={()=>console.log('onPause callback')}
          onEnded={()=>console.log('onEnded callback')}
          onError={()=>console.log('onError callback')}
        />
        <ReactPlayer 
          width='420px'
          height='220px'
          controls ={true}
          url={myRecipe}
          onReady={()=>console.log('onReady callback')}
          onStart={()=>console.log('onStart callback')}
          onPause={()=>console.log('onPause callback')}
          onEnded={()=>console.log('onEnded callback')}
          onError={()=>console.log('onError callback')}
        />
        <ReactPlayer 
          width='420px'
          height='220px'
          controls ={true}
          url={myVid}
          onReady={()=>console.log('onReady callback')}
          onStart={()=>console.log('onStart callback')}
          onPause={()=>console.log('onPause callback')}
          onEnded={()=>console.log('onEnded callback')}
          onError={()=>console.log('onError callback')}
        />
        <ReactPlayer 
          width='420px'
          height='220px'
          controls ={true}
          url={des}
          onReady={()=>console.log('onReady callback')}
          onStart={()=>console.log('onStart callback')}
          onPause={()=>console.log('onPause callback')}
          onEnded={()=>console.log('onEnded callback')}
          onError={()=>console.log('onError callback')}
        />
    </div><br/>
    <div className='Video'>
        <ReactPlayer 
          width='420px'
          height='220px'
          controls ={true}
          url={vide}
          onReady={()=>console.log('onReady callback')}
          onStart={()=>console.log('onStart callback')}
          onPause={()=>console.log('onPause callback')}
          onEnded={()=>console.log('onEnded callback')}
          onError={()=>console.log('onError callback')}
        />
        <ReactPlayer 
          width='420px'
          height='220px'
          controls ={true}
          url={myVideo}
          onReady={()=>console.log('onReady callback')}
          onStart={()=>console.log('onStart callback')}
          onPause={()=>console.log('onPause callback')}
          onEnded={()=>console.log('onEnded callback')}
          onError={()=>console.log('onError callback')}
        />
        <ReactPlayer 
          width='420px'
          height='220px'
          controls = {true}
          url={myVideos}
          onReady={()=>console.log('onReady callback')}
          onStart={()=>console.log('onStart callback')}
          onPause={()=>console.log('onPause callback')}
          onEnded={()=>console.log('onEnded callback')}
          onError={()=>console.log('onError callback')}
        />
        <ReactPlayer 
          width='420px'
          height='220px'
          controls ={true}
          url={pizza}
          onReady={()=>console.log('onReady callback')}
          onStart={()=>console.log('onStart callback')}
          onPause={()=>console.log('onPause callback')}
          onEnded={()=>console.log('onEnded callback')}
          onError={()=>console.log('onError callback')}
        />
    </div><br/>
    <p className='Video'>
      Hii! Above are some of the videos you can go through those videos and enjoy the Recipe.
    </p>
    </>
  )
  }
  else {
    return (
      <div>
        <h1>You are not authorized to view this page</h1>
        <h2>Please login to view this page</h2>
        <button onClick={handleAuthRedirect}>Login/Signup</button>
      </div>
    )
  }
}

export default Video;
