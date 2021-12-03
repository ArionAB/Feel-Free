import React from "react";
import PropTypes from "prop-types";

export const YoutubeEmbed = ({ embedId }) => (
  <iframe
    className="left-0 top-0 h-full w-full absolute"
    src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
    frameBorder="0"
    autoplay="1"
    mute="1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
  />
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};
