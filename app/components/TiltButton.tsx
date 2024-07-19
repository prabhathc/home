import Tilt from 'react-parallax-tilt';

interface TiltButtonProps {
    buttonText: string;
    buttonLink: string;
}

const TiltButton = ({ buttonText, buttonLink }: TiltButtonProps) => {

    let handleClick = () => {
        window.open(`https://${buttonLink}`, "_blank");
    }

    return (
        <div onClick={handleClick}>
            <Tilt tiltReverse={true} transitionSpeed={2500} perspective={500} gyroscope={true} tiltMaxAngleX={1}
                tiltMaxAngleY={1} className="bg-white opacity-50 flex justify-center items-center max-h-60 rounded-md p-6 hover:opacity-80 transition duration-700 parallax-effect">
                <div className="text-light-green text-center">
                    <h1 className="text-4xl">{buttonText}</h1>
                </div>
            </Tilt>
        </div>
    );
}

export default TiltButton;