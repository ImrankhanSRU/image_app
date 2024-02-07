import { connect } from "react-redux"
import React from "react";
import Image from "../Image/Image";

const Page = (props) => {
    const { url } = props;
    return (
        <div>
            <p>Image from home</p>
            <Image url={url} />
        </div>
    )
}

const mapStateToProps = ({imageReducer}) => ({
    ...imageReducer
  });
      
  export default connect(  
    mapStateToProps  
  )(Page)  