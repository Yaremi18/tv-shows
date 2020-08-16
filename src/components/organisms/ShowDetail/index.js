import React from 'react';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import Score from '../../atoms/Score';
import Chip from '../../molecules/Chip';
import Page from '../../atoms/Page';

const ShowDetail = ({
    name,
    image,
    overview,
    score,
    genre="comedy",
    duration="9.3min",
}) => {
    return (
        <Page>
            <Text type="header-1">{name}</Text>
            <Image src={image} />
            <Score value={score} />
            
            <Text type="header-2">Overview</Text>
            <Text type="paragraph">{overview}</Text>

            <Chip icon="Movie" color="secondary" label={genre} />
            <Chip icon="Schedule" color="secondary" label={duration} />
        </Page>
            
    )
};

export default ShowDetail;