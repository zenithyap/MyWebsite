import FadeIn from "../../animations/FadeIn";
import { useTheme } from "@mui/material";
import {
	Container,
	Grid,
	useMediaQuery,
} from "@mui/material";
import go1 from '../../../images/go1.png';
import chatbot from '../../../images/chatbot.png';
import bookmark from '../../../images/bookmark.png';
import '../../styling/text.css';
import '../../styling/flip.css';
import FlipCard from "./FlipCard";

const robotDog = {
	title: 'Robot Dog',
	image: go1,
	frontDescription: 'Autonomous navigation go1 robot',
	backDescription: 'Cooperated with a PhD student in developing an autonomous navigation Spot robot. My role was to create a stair climbing model with data collected from manually controlling the robot.',
	technologies: ['ROS', 'C++', 'Python', 'Gazebo'],
};

const chatBot = {
	title: 'ChatBot Task Manager',
	image: chatbot,
	frontDescription: 'A command-line task manager',
	backDescription: 'A command-line task manager done as an school project. It is able to add/delete tasks, mark/unmark tasks and find tasks by keyword.',
	technologies: ['Git', 'Java', 'Gradle'],
};

const bookmarkApp = {
	title: 'Bookmark App',
	image: bookmark,
	frontDescription: 'Desktop application for managing bookmarks',
	backDescription: 'Bookmark application done as a school project in a team of five. My role was designing and implementing the front end design. The app is able to support books that currently being read, finished books as well as books to read.',
	technologies: ['Git', 'Java', 'CSS', 'Gradle'],
}

export default function Projects() {
	const theme = useTheme();

	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<div style={{marginLeft: 'auto', marginRight: 'auto', left: '0', right: '0' }}>
			<section id='my_projects' />
			<FadeIn delayTime={200}>
				<div className='myTitleCenter'>My Projects</div>
			</FadeIn>
			<Container sx={{ marginTop: '2%' }} maxWidth={isMobile ? 'md' : 'lg'} >
				<Grid container spacing={5} style={{marginBottom: '5%'}}>
					<FlipCard
						title={robotDog.title}
						image={robotDog.image}
						frontDescription={robotDog.frontDescription}
						backDescription={robotDog.backDescription}
						technologies={robotDog.technologies}
						delayTime={200}
						link={'https://www.ccsgp.comp.nus.edu.sg/robotic-dog-intern'}
						imageWidth={'70%'}
					/>
					<FlipCard
						title={chatBot.title}
						image={chatBot.image}
						frontDescription={chatBot.frontDescription}
						backDescription={chatBot.backDescription}
						technologies={chatBot.technologies}
						delayTime={400}
						link={'https://github.com/zenithyap/ip'}
						imageWidth={'70%'}
					/>
					<FlipCard
						title={bookmarkApp.title}
						image={bookmarkApp.image}
						frontDescription={bookmarkApp.frontDescription}
						backDescription={bookmarkApp.backDescription}
						technologies={bookmarkApp.technologies}
						delayTime={600}
						link={'https://github.com/zenithyap/tp'}
						imageWidth={'80%'}
					/>
				</Grid>
			</Container>
		</div >
	)
}