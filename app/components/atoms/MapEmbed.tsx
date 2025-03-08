import React from "react";

interface MapEmbedProps {
    src: string;
    width?: string;
    height?: string;
    title: string;
}

const MapEmbed: React.FC<MapEmbedProps> = ({ title, src, width = "600", height = "626" }) => {
    return (
        <div className="w-full flex justify-center">
            <iframe
                title={title}
                src={src}
                width={width}
                height={height}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="shadow-md w-full"
            ></iframe>
        </div>
    );
};

export default MapEmbed;
