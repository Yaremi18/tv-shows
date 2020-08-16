import React, { useEffect } from 'react';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import Score from '../../atoms/Score';
import Chip from '../../molecules/Chip';
import Page from '../../atoms/Page';
import {
    ShowDetailWrapper,
    DetailWrapper,
    ChipsWrapper,
} from './style';

const ShowDetail = ({
    name="Yaremi",
    image,
    overview="This is a show",
    score=3.5,
    genre="comedy",
    duration="9.3min",
}) => {

    return (
        <Page title="Show detail">
            <ShowDetailWrapper>
                <Text type="header-2">{name}</Text>
                <Image src={image} />
                <Score value={score} />
                
                <DetailWrapper>
                    <Text type="header-2">Overview</Text>
                    <Text type="paragraph">{overview}</Text>

                    <ChipsWrapper>
                        <Chip icon="Movie" color="secondary" label={genre} />
                        <Chip icon="Schedule" color="secondary" label={duration} />
                    </ChipsWrapper>
                </DetailWrapper>
            </ShowDetailWrapper>
        </Page>
            
    )
};

export default ShowDetail;