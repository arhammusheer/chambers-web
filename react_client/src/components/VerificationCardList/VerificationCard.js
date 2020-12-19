import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// custom link
import CustomLink from '../CustomLink';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		maxWidth: 800,
		margin: 'auto'
	},
	media: {
		maxHeight: 550,
		width: '100%',
		objectFit: 'cover'
	},
  title: {
    fontSize: 14,
  }
}));

export default function MemeCard(props) {
	const classes = useStyles();
	const { obj } = props;
	const { path, title, verificationID } = obj;

	return (
		<CustomLink ariaLabel={`Link to ID: ${verificationID}`} to={`/verification/${verificationID}`}>
			<Card className={classes.root}>
				<CardContent>
					<Typography className={classes.title} color="textPrimary" gutterBottom>
						{title}
					</Typography>
				</CardContent>
				<CardActionArea onClick={handleClick}>
					<img src={path} alt="loading..." className={classes.media} />
				</CardActionArea>
			</Card>
		</CustomLink>
	)
}