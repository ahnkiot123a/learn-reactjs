import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({ album }) {
    return (
        <div className='album'>
            <div>
                <img src={album.thumbnaiUrl} alt={album.name} />
            </div>
            <p className='album-name'>{album.name}</p>
        </div>
    );
}

export default Album;