import { useState } from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import '../../styling/flip.css';
import '../../styling/text.css';
import FlipCardBack from './FlipCardBack';
import FlipCardFront from './FlipCardFront';

export default function FlipCard({ imageWidth, link, delayTime, title, image, frontDescription, backDescription, technologies }) {
    const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [flipped, setFlipped] = useState(false);

    return (
        <Grid item
            className={!isMobile ? 'flipCard' : flipped ? 'flipCardMobile' : ''}
            xs={12}
            lg={4}
            md={4}
            style={{perspective: '1500px'}}
            onClick={isMobile ? () => setFlipped((prev) => !prev) : undefined}
        >
            <div className='flipCardInner'>
                <FlipCardFront
                    title={title}
                    image={image}
                    description={frontDescription}
                    delayTime={delayTime}
                    imageWidth={imageWidth}
                />
                <FlipCardBack
                    title={title}
                    description={backDescription}
                    technologies={technologies}
                    link={link}
                />
            </div>
        </Grid>
    )
}