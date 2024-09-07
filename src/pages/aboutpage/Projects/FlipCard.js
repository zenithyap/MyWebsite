import { useState } from 'react';
import { Grid } from '@mui/material';
import '../../styling/flip.css';
import '../../styling/text.css';
import FlipCardBack from './FlipCardBack';
import FlipCardFront from './FlipCardFront';
import FadeIn from '../../animations/FadeIn';

export default function FlipCard({ delayTime, title, image, frontDescription, backDescription, technologies }) {
    const [flipCard, setFlipCard] = useState(false);

    return (
        <Grid item
            className={flipCard ? 'flipCard hover' : 'hover'}
            xs={12}
            lg={4}
            md={4}
            onClick={() => setFlipCard(!flipCard)}
        >
            <div className='flipCardInner'>
                <FlipCardFront
                    title={title}
                    image={image}
                    description={frontDescription}
                    delayTime={delayTime}
                />
                <FlipCardBack
                    title={title}
                    description={backDescription}
                    technologies={technologies}
                />
            </div>
        </Grid>
    )
}