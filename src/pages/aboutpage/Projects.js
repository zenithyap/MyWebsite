import FadeIn from "../animations/FadeIn";
import {
	Container,
	Card,
	Grid,
	Stack,
} from "@mui/material";
import go1 from '../../images/go1.png';
import chatbot from '../../images/chatbot.png';
import bookmark from '../../images/bookmark.png';
import '../styling/text.css';

export default function Projects() {
	return (
		<div style={{ position: 'absolute', top: '270%', marginLeft: 'auto', marginRight: 'auto', left: '0', right: '0' }}>
			<section id='my_projects' />
			<FadeIn delayTime={200}>
				<div className='myTitleCenter'>My Projects</div>
			</FadeIn>
			<Container sx={{ marginTop: '3%', marginBottom: '12%' }} maxWidth="lg" >
				<Grid container>
					<Grid item xs={12} lg={4} display={'flex'}>
						<Card sx={{
							m: 2,
							padding: 2,
							boxShadow: '1px 2px 9px',
							backgroundColor: 'rgba(19,27,37,1)',
						}}>
							<FadeIn delayTime={200}>
							<Stack spacing={2} direction={'column'} justifyContent={'center'} alignItems={'center'} style={{ justifyContent: 'center', alignItems: 'center' }}>
								<h5>Robot Dog</h5>
								<img src={go1} style={{ width: '50%' }} />
								<div className='p1'>
									Building on a previously developed navigation algorithm, the team designed, developed and trained a sophisticated AI pipeline for detecting and climbing staircases.
								</div>
							</Stack>
						</FadeIn>
						</Card>
					</Grid>
					<Grid item xs={12} lg={4} display={'flex'}>
						<Card sx={{
							m: 2,
							padding: 2,
							boxShadow: '1px 2px 9px',
							backgroundColor: 'rgba(19,27,37,1)'
						}}>
							<FadeIn delayTime={400}>
							<Stack spacing={2} direction={'column'} justifyContent={'center'} alignItems={'center'} style={{ justifyContent: 'center', alignItems: 'center' }}>
								<h5>Chatbot Task Manager</h5>
								<img src={chatbot} width={'100%'}/>
								<div className='p1'>
									A command-line task manager
								</div>
							</Stack>
						</FadeIn>
						</Card>
						
					</Grid>
					<Grid item xs={12} lg={4} display={'flex'}>
						<Card sx={{
							m: 2,
							padding: 2,
							boxShadow: '1px 2px 9px',
							backgroundColor: 'rgba(19,27,37,1)'
						}}>
							<FadeIn delayTime={500}>
							<Stack spacing={2} direction={'column'} justifyContent={'center'} alignItems={'center'} style={{ justifyContent: 'center', alignItems: 'center' }}>
								<h5>Bookmark App</h5>
								<img src={bookmark} width={'100%'}/>
								<div className="p1">
									desktop application for managing bookmarks
								</div>
							</Stack>
						</FadeIn>
						</Card>
						
					</Grid>
				</Grid>
			</Container >
		</div >
	)
}