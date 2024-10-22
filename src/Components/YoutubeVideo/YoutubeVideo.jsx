import ('./YoutubeVideo.scss')
// eslint-disable-next-line react/prop-types
function YoutubeVideo({ link, onClose }) {
  console.log(link)
  return (
    <div onClick={() => onClose(false)} className="hero">
      <div className="video-block">
        <iframe width="560" height="315" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default YoutubeVideo;