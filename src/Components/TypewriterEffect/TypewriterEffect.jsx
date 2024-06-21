import React from "react";
const TypewriterEffect = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = React.useState("");

    React.useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [text, speed]);
    console.log({ text });
    return <div>{displayedText}</div>;
};

export default TypewriterEffect;
