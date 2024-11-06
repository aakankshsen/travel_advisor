
import React from 'react';
import {
    Box,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/material/Rating';
import useStyles from './styles';

const PlaceDetails = ({ place, selected, refProp }) => {
    const classes = useStyles();

    // Scroll into view if the place is selected
    if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start"})
        
    
    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://via.placeholder.com/150'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {place.name}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating size="small" value={Number(place.rating)} readOnly />
                    <Typography gutterBottom variant="subtitle1">
                        out of {place.num_reviews} reviews
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.ranking}
                    </Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box
                        key={award.display_name}
                        my={1}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary">
                            {award.display_name}
                        </Typography>
                    </Box>
                ))}
                <Box display="flex" justifyContent="space-between" my={1}>
                    <Typography variant="subtitle1">Address</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.address}
                    </Typography>
                </Box>
                {place.phone && (
                    <Box display="flex" justifyContent="space-between" my={1}>
                        <PhoneIcon />
                        <Typography gutterBottom variant="subtitle1">
                            {place.phone}
                        </Typography>
                    </Box>
                )}
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default PlaceDetails;
