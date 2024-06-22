import React, { useState, useRef } from "react";
import { FaMicrophone } from "react-icons/fa";
import "./VoicetoText.css";

const VoiceToText = ({ setMessage }) => {
    const [isRecording, setIsRecording] = useState(false);
    const recognitionRef = useRef(null);

    const handleVoiceInput = () => {
        if (isRecording) {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
            setIsRecording(false);
        } else {
            const recognition = new (window.SpeechRecognition ||
                window.webkitSpeechRecognition)();
            recognition.lang = "en-US";

            recognition.onstart = () => {
                setIsRecording(true);
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setMessage(transcript);
                setIsRecording(false);
            };

            recognition.onerror = (event) => {
                console.error("Speech recognition error", event);
                setIsRecording(false);
            };

            recognition.onend = () => {
                setIsRecording(false);
            };

            recognitionRef.current = recognition;
            recognition.start();
        }
    };

    return (
        <button
            onClick={handleVoiceInput}
            className={`microphone-button ${isRecording ? "recording" : ""}`}
        >
            <FaMicrophone
                size={20}
                style={{ background: "transparent" }}
                className={isRecording ? "recording-icon" : ""}
            />
        </button>
    );
};

export default VoiceToText;
