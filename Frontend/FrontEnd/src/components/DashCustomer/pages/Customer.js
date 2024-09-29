import React from 'react';
import trainerImage from '../../../assets/icon modalidades/customerpage.jpg';
class Customer extends React.Component {
    render() {
        return (
            <div >
                <img src={trainerImage} style={{marginLeft:'250px',height:'500px',width:"1200px"}}></img>
            </div>
            
        );
    }
}
export default Customer;