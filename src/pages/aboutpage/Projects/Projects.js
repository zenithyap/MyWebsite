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
import soarz from '../../../images/soarz.png';
import peerprep from '../../../images/peerprep.png';
import '../../styling/text.css';
import '../../styling/flip.css';
import FlipCard from "./FlipCard";

const robotDog = {
	title: 'Robot Dog',
	image: go1,
	frontDescription: 'Autonomous navigation go1 robot',
	backDescription: 'Cooperated with a PhD student in developing an autonomous navigation go1 robot. My role was to create a stair climbing model with data collected from manually controlling the robot.',
	technologies: ['ROS', 'C++', 'Python', 'Gazebo'],
};

const chatBot = {
	title: 'Pix',
	image: chatbot,
	frontDescription: 'A command-line task manager',
	backDescription: 'A command-line task manager done as a school project. It can mark/unmark, add/delete, and find tasks by keyword.',
	technologies: ['Git', 'Java', 'JavaFX', 'Gradle'],
};

const bookmarkApp = {
	title: 'MyLib',
	image: bookmark,
	frontDescription: 'Desktop application for managing bookmarks',
	backDescription: 'Bookmark application done as a school project in a team of five. My role was designing and implementing the front end design. The app is able to support books that currently being read, finished books as well as books to read.',
	technologies: ['Git', 'Java', 'JavaFX', 'Gradle'],
}

const soarzPortfolio = {
	title: 'Design Portfolio',
	image: soarz,
	frontDescription: 'Portfolio showcasing art and animations',
	backDescription: 'Created a portfolio website for my girlfriend as a personal project. My first time learning and using tailwindcss.',
	technologies: ['Git', 'ReactJS', 'TailwindCSS'],
}

const peerPrep = {
	title: 'Peer Prep',
	image: peerprep,
	frontDescription: 'Collaborative learning and problem solving platform',
	backDescription: 'Created a dynamic web application to allow users to discuss problems and enhance problem solving skills. Engage in real time discussions through the chat feature and visualize code while tackling problems.',
	technologies: ['Git', 'ReactTS', 'MaterialUI', 'Redux', 'Express', 'Firebase', 'GCP', 'MongoDB']
}

export default function Projects() {
	const theme = useTheme();

	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const isMedium = useMediaQuery(theme.breakpoints.down('lg'));

	return (
		<div style={{marginTop: '15%', marginLeft: 'auto', marginRight: 'auto', left: '0', right: '0' }}>
			<section id='my_projects' />
			<FadeIn delayTime={200}>
				<div className='myTitleCenter'>My Projects</div>
			</FadeIn>
			<Container sx={{ marginTop: '2%' }} maxWidth={isMedium ? 'md' : isMobile ? 'sm' : 'lg'} >
				<Grid container spacing={5} style={{marginBottom: '5%'}}>
					<FlipCard
						title={soarzPortfolio.title}
						image={soarzPortfolio.image}
						frontDescription={soarzPortfolio.frontDescription}
						backDescription={soarzPortfolio.backDescription}
						technologies={soarzPortfolio.technologies}
						delayTime={isMobile ? 200: 200}
						link={'https://soarz.netlify.app'}
						imageWidth={'95%'}
					/>
					<FlipCard
						title={robotDog.title}
						image={robotDog.image}
						frontDescription={robotDog.frontDescription}
						backDescription={robotDog.backDescription}
						technologies={robotDog.technologies}
						delayTime={isMobile ? 200: 300}
						link={'https://www.ccsgp.comp.nus.edu.sg/robotic-dog-intern'}
						imageWidth={'70%'}
					/>
					<FlipCard
						title={chatBot.title}
						image={chatBot.image}
						frontDescription={chatBot.frontDescription}
						backDescription={chatBot.backDescription}
						technologies={chatBot.technologies}
						delayTime={isMobile ? 200: 400}
						link={'https://github.com/zenithyap/ip'}
						imageWidth={'70%'}
					/>
					<FlipCard
						title={bookmarkApp.title}
						image={bookmarkApp.image}
						frontDescription={bookmarkApp.frontDescription}
						backDescription={bookmarkApp.backDescription}
						technologies={bookmarkApp.technologies}
						delayTime={isMobile ? 200: 500}
						link={'https://github.com/zenithyap/tp'}
						imageWidth={'90%'}
					/>
					<FlipCard
						title={peerPrep.title}
						image={peerPrep.image}
						frontDescription={peerPrep.frontDescription}
						backDescription={peerPrep.backDescription}
						technologies={peerPrep.technologies}
						delayTime={isMobile ? 200: 600}
						link={'https://github.com/zenithyap/tp'}
						imageWidth={'95%'}
					/>
				</Grid>
			</Container>
		</div >
	)
}