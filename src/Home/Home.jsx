import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'  
import { storeImage } from '../action';
import Image from "../Image/Image";
import "./Home.css"

const Home = (props) => {

  const { saveImageUrl } = props;

    const navigate = useNavigate();

    const [imgURL, setImageURL] = useState();
    useEffect(() => {
      getImage()
    }, []);
    
    const getImage = () => {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(json => setImageURL(json.message));
    }

    const moveToPage = () => {
        navigate("/page");
    }
    
    useEffect(() => {
      console.log("trigger")
      saveImageUrl(imgURL)
    }, [imgURL])
    
    return (
    <div className="container">
      <Image url={imgURL} />
      <button className="btn" onClick={getImage}>Fetch</button>
      <button className="btn" onClick={moveToPage} >Go To Home!</button>
    </div>
    
    );
}

const mapStateToProps = state => ({
  ...state
});


const mapDispatchToProps = (dispatch) => ({
  saveImageUrl: (url) => dispatch(storeImage(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)  
