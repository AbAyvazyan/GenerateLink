import { useState, useEffect } from 'react';

function TextAnimation({ text , additional }) {
    const [animatedText, setAnimatedText] = useState('');

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < text.length-1) {
                setAnimatedText((prev) => {
                    if (i === 0) {
                       return text.slice(0,2)
                    } else {
                       return prev + text[i]
                    }

                });
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, 35);
        return () => clearInterval(intervalId);
    }, [text]);


    return (
        <div className="text-animation">
            {animatedText.split('').map((letter, index) => (
                <span key={index} className="letter">
          {letter}
        </span>
            ))}
        </div>
    );
}

export default TextAnimation