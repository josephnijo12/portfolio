import React, { useEffect, useState, useRef } from "react";

const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(); // Create a Ref

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((error) => {
                    // Auto-play was prevented, handle it here.
                    console.log("Audio play failed:", error);
                });
        }
    }, []);

    const handlePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
            <audio
                ref={audioRef}
                src="/background-music.mp3"
                loop
            />
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 rounded">
                <button
                    onClick={handlePlayPause}
                    className="bg-transparent text-white px-4 py-2 rounded"
                >
                    {isPlaying ? "Pause Music" : "Play Music"}
                </button>
            </div>
        </div>
    );
};

export default BackgroundMusic;
