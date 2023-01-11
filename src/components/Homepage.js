import React from 'react';
import HeroImage from './Homepage/HeroImage';
import PageFive from './Homepage/PageFive';
import PageFour from './Homepage/PageFour';
import PageThree from './Homepage/PageThree';
import PageTwo from './Homepage/PageTwo';


export default function Homepage () {
    return (
        <div>
            <HeroImage />
            <PageTwo />
            <PageThree />
            <PageFour />
            <PageFive />
        </div>
    )
}