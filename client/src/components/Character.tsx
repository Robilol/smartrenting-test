import React from 'react'
import PropTypes from 'prop-types';

interface IProps {
    photo: string,
    name: string,
}

const Character: React.FunctionComponent<IProps> = ({photo, name}) => {
    return(
        <div className="character">
            <img src={photo} alt={name} className="photo"/>
            <div className="info">
                <p className="name">{name}</p>
            </div>
        </div>
    );
};
export default Character

Character.propTypes = {
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
