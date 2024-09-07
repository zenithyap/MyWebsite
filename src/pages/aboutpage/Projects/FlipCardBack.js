import {
    Card,
    Stack
} from "@mui/material";
import '../../styling/text.css';
import '../../styling/flip.css';

export default function FlipCardBack({ title, description, technologies }) {
    return (
        <div className='flipCardBack'>
            <Stack
                spacing={2}
                direction={'column'}
                alignItems={'center'}
            >
                <h5>{title}</h5>
                <div className='p1'>{description}</div>
                <div className="p1left">
                    Technologies used:
                    <ul>
                        {
                            technologies.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </Stack>
        </div>
    )
}