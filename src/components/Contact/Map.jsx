import React from "react";

const Map = () => {
  return (
    <section className = "grid grid-cols-1 w-[80%] mx-auto mb-24">
      <div className="backdrop-grayscale-[.5]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97893.74904173892!2d32.71638227493646!3d39.93737087456276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3499c0bc9791b%3A0x3e28af35edfc6e90!2s%C4%B0nsoftpro%20Yaz%C4%B1l%C4%B1m%20Hizmetleri%20San.%20ve%20Tic.%20Ltd.%20%C5%9Eti%2C%20Ankara%20Ofisi!5e0!3m2!1str!2str!4v1667292485133!5m2!1str!2str"
          width="100%"
          className="backdrop-grayscale bg-slate-600/30"
          height="450"
          frameBorder={0}
          allowfullscreen=""
          tabIndex={-1}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
