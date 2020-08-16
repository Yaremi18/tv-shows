import React from 'react';
import { useLocation } from 'react-router-dom';
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

const ShowDetail = () => {
    const { state: show } = useLocation()

    return (
        <Page title="Show detail">
            <ShowDetailWrapper>
                <Text type="header-2">{show.name}</Text>
                <Image src={show.image} />
                <Score value={show.score} />
                
                <DetailWrapper>
                    <Text type="header-2">Overview</Text>
                    <Text type="paragraph">{show.overview}</Text>

                    <ChipsWrapper>
                        <Chip icon="Movie" color="secondary" label={show.genre} />
                        <Chip icon="Schedule" color="secondary" label={show.duration} />
                    </ChipsWrapper>
                </DetailWrapper>
            </ShowDetailWrapper>
        </Page>
            
    )
};

export default ShowDetail;