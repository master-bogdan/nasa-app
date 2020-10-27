import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { fetchPhoto } from '../../store/actions/actions';
import { Block, Description, Image, Title, Spinner } from '../../pages/Main/styles';

const DayPhoto = () => {

    const dayPhoto = useSelector(state => state.photo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPhoto());
    },[dispatch]);

    return (
        <Block>
            { dayPhoto.loading && <Spinner color="secondary"/>}
            <Title>
                Photo of the day: {dayPhoto.photoData.title}
            </Title>
            <Image src={dayPhoto.photoData.url} />
            <Description>
                {dayPhoto.photoData.explanation}
            </Description>
        </Block>
    )
}

export default DayPhoto;
