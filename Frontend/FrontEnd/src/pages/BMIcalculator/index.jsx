// index.jsx
import * as S from './style';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TextField from '@mui/material/TextField';


// ... (imports)

export default function Index() {
    document.title = 'Muscle Factory - BMI Calculator';

    // State for BMI Calculation
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmiResult, setBmiResult] = useState(null);
    const [error, setError] = useState({ height: false, weight: false });

    // BMI Calculation Function
    const calculateBMI = () => {
        if (!height || isNaN(height) || height <= 0 || !weight || isNaN(weight) || weight <= 0) {
            setError({
                height: (!height || isNaN(height) || height <= 0),
                weight: (!weight || isNaN(weight) || weight <= 0),
            });
            return;
        }

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        setBmiResult(bmi.toFixed(2));
    };

    return (
        <S.All>
            <NavBar />
            <S.Container>
                <h1>BMI Calculator</h1>
                <TextField
                    margin="dense"
                    id="standard-basic"
                    classes={{ root: 'inputSignup' }}
                    required
                    fullWidth
                    label="Height (cm)"
                    color="error"
                    variant="outlined"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    error={error.height}
                    helperText={error.height ? 'Enter a valid height' : ''}
                    InputProps={{ style: { color: 'white' } }}
                />
                <TextField
                    margin="dense"
                    classes={{ root: 'inputSignup' }}
                    id="standard-basic"
                    required
                    fullWidth
                    label="Weight (kg)"
                    color="error"
                    variant="outlined"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    error={error.weight}
                    helperText={error.weight ? 'Enter a valid weight' : ''}
                    InputProps={{ style: { color: 'white' } }}
                />
                <S.ButtonEntrar onClick={calculateBMI}>Calculate BMI</S.ButtonEntrar>
                {bmiResult && (
                    <div>
                        <p>Your BMI is: {bmiResult}</p>
                        {/* You can add additional BMI categories or information here */}
                    </div>
                )}
                {/* Other BMI Calculator Elements */}
            </S.Container>
            <Footer />
        </S.All>
    );
}
