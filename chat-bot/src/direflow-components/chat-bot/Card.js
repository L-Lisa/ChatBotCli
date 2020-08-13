import React from 'react';
import styles from './App.css';
import otherStyles from './otherStyles.css';
import { Styled } from 'direflow-component';

export const Card = () => {
    return (
        <Styled styles={styles}>
            <div className="card-box ">
                <img src="https://res.cloudinary.com/dnjk2bwkp/image/upload/v1597238291/ricardo/ricardo_iggujk.svg" alt="Ricardo" className="ricardo-header-img" />
                <div className="card-text"><h1 className="ricardo-h1">Ricardo Pineda</h1><p className="ricardo-p ">Attefallsförmedlaren</p></div>
            </div>
        </Styled>
    )
}

