import React from "react";
import PropTypes from "prop-types";
import './style.css';

const Video = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="200"
      height="200"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

Video.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Video;