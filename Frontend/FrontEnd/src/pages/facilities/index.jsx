import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import * as S from './style';
import JSONResult from './modalities.json';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ToTop from '../../components/ToTop';
import BG from '../../assets/bg modalidades.png';

export default function Index() {
    const [result, setResult] = useState([]);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    useEffect(() => {
        setResult(JSONResult);
    }, []);

    document.title = 'Muscle Factory - Facilities';

    const handleChooseThis = () => {
        // Navigate to the signup page
        navigate('/signup');
    };

    return (
        <S.All>
            <NavBar />
            <ToTop />
            <S.HeaderArea>
                <h1>Facilities</h1>
                <img src={BG} alt='background' />
            </S.HeaderArea>
            <S.Container>
                {result.map((item, key) => (
                    <S.Item key={key}>
                        <img src={item.icon_img} alt='modalities' />
                        <S.ItemNome>{item.nome}</S.ItemNome>
                        <S.ItemDesc>{item.desc}</S.ItemDesc>
                        <S.Button onClick={handleChooseThis}>Choose This</S.Button>
                    </S.Item>
                ))}
            </S.Container>
            <Footer />
        </S.All>
    );
}
