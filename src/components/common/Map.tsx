import React from "react";

const Map = () => {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.8583665518554!2d-77.0368703!3d38.9071923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7b6edcfc579%3A0x9c7a5e2a9925ddf2!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2sus!4v1696094570920!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
