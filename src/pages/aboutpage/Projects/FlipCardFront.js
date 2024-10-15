import {
    Stack
} from "@mui/material";
import FadeIn from "../../animations/FadeIn";
import '../../styling/text.css';
import '../../styling/flip.css';

export default function FlipCardFront({ imageWidth, delayTime, title, image, description }) {
    return (
        <div className='flipCardFront'>
            <FadeIn delayTime={delayTime}>
                <Stack
                    spacing={2}
                    direction={'column'}
                    justifyContent={'center'} alignItems={'center'}
                >
                    <h5>{title}</h5>
                    <img src={image} style={{ width: imageWidth }} alt={`${image}_image`}/>
                    <div className='p1'>{description}</div>
                </Stack>
            </FadeIn>
        </div>
    )
}