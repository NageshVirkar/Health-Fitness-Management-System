import React from 'react';
import trainerImage from '../../../../assets/icon modalidades/trainerImage.jpg';
class Trainer extends React.Component {
    render() {
        return (
            <div >
                <img src={trainerImage} style={{marginLeft:'250px',height:'500px',width:"1200px"}}></img>
            </div>
            
        );
    }
}
export default Trainer;

