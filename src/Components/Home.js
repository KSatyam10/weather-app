import React from 'react';
import ChooseStateComponents from './ChooseState'
import WeekInfoCardComponents from './WeekInfoCard';
import HUMIDITYComponents from './Humidity';
import LeftComponents from './Left/Left';
const HomeComponents = () => (
    <>
        <div className="homeWrap">
            <div className="weatherSection">
                <LeftComponents/>
                <div className="rightSide">
                    <ChooseStateComponents />
                    <WeekInfoCardComponents /> 
                    <HUMIDITYComponents/>
                    
                </div>
            </div>
        </div>
    </>
)
export default HomeComponents;