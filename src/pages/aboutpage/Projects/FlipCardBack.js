import {
    Stack
} from "@mui/material";
import '../../styling/text.css';
import '../../styling/flip.css';

export default function FlipCardBack({ title, description, technologies, link }) {
    return (
        <div className='flipCardBack'>
            <Stack
                spacing={2}
                direction={'column'}
                alignItems={'center'}
            >
                <h5>{title}</h5>
                <div className='p1'>{description}</div>
                <div>Technologies used:</div>
                <div 
                    style={{
                        display: 'grid', 
                        gridTemplateRows: `repeat(3, minmax(0, 1fr));`, 
                        gridTemplateColumns: `repeat(${Math.ceil(technologies.length / 3)}, minmax(0, 1fr))`,
                        columnGap: '12px'
                    }}
                >
                    {
                        technologies.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </div>
            </Stack>
            <a href={link} target="_blank" rel="noreferrer" className='p1 link p-2' style={{ marginTop: 'auto' }}>
                Find out more here!
            </a>
        </div>
    )
}