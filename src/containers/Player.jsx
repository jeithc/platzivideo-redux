import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/views/Player.scss';
import NotFound from './NotFound';

const Player = props => {
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length>0;


    useEffect(()=>{
        props.getVideoSource(id);
    },[])
    return hasPlaying ?  (
        <div className= "video">
            <video controls>
                <source src = {props.playing.source} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="Player-back">
                <button type="button" onClick={()=>props.history.goBack()}>
                    regresar
                </button>
            </div>

        </div>
    ) : <NotFound/>
}

const mapStateToProps = state =>{
    return{
        playing:state.playing
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);