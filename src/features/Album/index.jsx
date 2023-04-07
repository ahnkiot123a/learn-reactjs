import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albums = [
        {
            id: 1,
            name: 'abc',
            thumbnaiUrl: 'https://cdn.pixabay.com/photo/2023/01/24/17/27/flower-7741687__340.jpg',
        },
        {
            id: 2,
            name: 'xyz',
            thumbnaiUrl: 'https://cdn.pixabay.com/photo/2022/04/05/14/13/flower-7113735__340.jpg',
        },
        {
            id: 3,
            name: '123',
            thumbnaiUrl: 'https://cdn.pixabay.com/photo/2023/01/23/21/11/apple-7739714__340.jpg',
        }
    ];
    return (
        <div>
            <AlbumList albums={albums} />
        </div>
    );
}

export default AlbumFeature;