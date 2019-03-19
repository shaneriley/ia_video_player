import React from "react";

export default ({ id }) => (
  <iframe title={`media_${id}`} src={`https://archive.org/embed/${id}`} width="640" height="480" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
);

// export default ({ id }) => (
//   <video style={{ width: "100%", height: "100%" }}>
//     <source src={`http://archive.org/download/${id}.mp4`} />
//     <source src={`http://archive.org/download/${id}_512kb.mp4`} />
//     <source src={`http://archive.org/download/${id}.ogv`} />
//     <>Internet Archive's player requires either JavaScript to be enabled or a modern browser that understands the HTML5 &lt;video&gt; tag.</>
//   </video>
// );
