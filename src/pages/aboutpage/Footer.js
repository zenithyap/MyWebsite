import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import email from '../../images/logos/email.png';
import linkedin from '../../images/logos/linkedin.png';
import github from '../../images/logos/github.png';

export default function Footer() {
    const [value, setValue] = useState(0);

    return (
        <div style={{height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    backgroundColor: 'rgb(27, 39, 53)', 
                    marginBottom: '3%',
                }}
            >
                <BottomNavigationAction href='mailto:zenithyap88@gmail.com' label="Email" icon={<img src={email} width={'20%'} />}  />
                <BottomNavigationAction href='https://www.linkedin.com/in/zenithyap/' label="LinkedIn" icon={<img src={linkedin} width={'20%'}/>} />
                <BottomNavigationAction href='https://github.com/zenithyap' label="GitHub" icon={<img src={github} width={'20%'} />} />
            </BottomNavigation>
        </div>
    )
}