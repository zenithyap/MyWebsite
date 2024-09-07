import { 
    Card,
    Stack
} from "@mui/material";
import '../../styling/text.css';
import '../../styling/flip.css';

export default function FlipCardBack({ title, description, technologies}) {
    return (
        <div className='flipCardBack'>
            {/* <Card sx={{
                m: 2,
                padding: 2,
                boxShadow: '1px 2px 9px',
                backgroundColor: 'rgba(19,27,37,1)',
            }}> */}
                <Stack
                    spacing={2}
                    direction={'column'}
                    justifyContent={'center'} alignItems={'center'}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
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
            {/* </Card> */}
        </div>
    )
}