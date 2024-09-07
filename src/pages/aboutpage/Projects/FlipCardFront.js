import {
    Card,
    Stack
} from "@mui/material";
import FadeIn from "../../animations/FadeIn";
import '../../styling/text.css';
import '../../styling/flip.css';
import { Height } from "@mui/icons-material";

export default function FlipCardFront({ delayTime, title, image, description }) {
    return (
        <div className='flipCardFront'>
            <FadeIn delayTime={delayTime}>
                <Stack
                    spacing={2}
                    direction={'column'}
                    justifyContent={'center'} alignItems={'center'}
                >
                    <h5>{title}</h5>
                    <img src={image} style={{ width: '70%' }} />
                    <div className='p1'>{description}</div>
                </Stack>
            </FadeIn>
        </div>
    )
}