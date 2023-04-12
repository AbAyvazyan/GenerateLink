import { TypeAnimation } from 'react-type-animation';

const TextAnimation = ({text,delay=0}) => {
    return (
        <TypeAnimation
            sequence={[
                delay,
                text,

            ]}
            wrapper="div"
            cursor={false}
            repeat={0}
            speed={{type: "keyStrokeDelayInMs", value: 15}}
        />
    );
};

export default TextAnimation