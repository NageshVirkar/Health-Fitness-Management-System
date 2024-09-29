import React from 'react';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ToTop from '../../components/ToTop';
import BG from '../../assets/bg_plan.png';
import * as S from './style'; 
export default function AboutUs() {
  document.title = 'Muscle Factory - About Us';
  
  return (
    <S.All>
      <NavBar />
      <ToTop />
      <S.HeaderArea style={{ background: `url('https://i0.wp.com/www.bakerlabels.co.uk/wp-content/uploads/2022/05/CARMEL_JANE_BAKER_NOV21-3986-2.jpg?resize=1080%2C675&ssl=1') center/cover no-repeat` }}>
  <h1>About Us</h1>
</S.HeaderArea>

      <S.AboutContent>
      <h1>HISTORY</h1>
        <p>
        In 2016, Muscle Factory was conceived with a vision to redefine fitness by offering a unique blend of physical and digital experiences. The founders, driven by a passion for health and wellness, established the first facility equipped with cutting-edge gear and expert trainers. As the community grew, the introduction of a comprehensive website in 2019 expanded the reach beyond the gym walls. Muscle Factory became more than a fitness center; it evolved into a holistic platform, offering personalized training programs and fostering a vibrant online community. Today, with multiple facilities across cities, Muscle Factory stands as a symbol of innovation in the fitness industry, committed to empowering individuals on their transformative fitness journeys.
        </p>
      </S.AboutContent>
      <S.AboutContent>
      <h1>OUR MISSION</h1>
        <p>
        At Muscle Factory, our mission is to inspire and empower individuals on their journey to optimal health and fitness. We are committed to providing a transformative experience that goes beyond traditional gym workouts. Our goal is to foster a community where every member feels motivated, supported, and equipped with the knowledge to achieve their fitness aspirations. Through state-of-the-art facilities, personalized training programs, and a dynamic online platform, we aim to break down barriers and make fitness accessible to all. We believe in the power of a comprehensive approach to well-being, encompassing physical, mental, and social aspects. Muscle Factory strives to be a catalyst for positive lifestyle changes, creating a lasting impact on the lives of our members. Join us as we revolutionize fitness and embark on a journey to a healthier, happier you.
        </p>
        <br></br>
        <h1><center>OUR TRAINERS</center></h1>
      </S.AboutContent>
      
      <S.Container>
        
        {/* New cards */}
        <S.Item>
          <S.ItemImageArea>
            <img src="https://t3.ftcdn.net/jpg/05/62/09/28/360_F_562092860_mWJBNRqTg4rarfoJaSdkaLlfy1dkrP33.jpg" alt="Image 1" />
          </S.ItemImageArea>
          <S.ItemNome>Deepika Padukone</S.ItemNome>
          <S.ItemDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </S.ItemDesc>
        </S.Item>

        <S.Item>
          <S.ItemImageArea>
            <img src="https://img.freepik.com/premium-photo/man-gym-gym-trainer-fitness-gym-man-hd-image_594776-2510.jpg" alt="Image 2" />
          </S.ItemImageArea>
          <S.ItemNome>Nagesh Virkar</S.ItemNome>
          <S.ItemDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </S.ItemDesc>
         
        </S.Item>

        <S.Item>
          <S.ItemImageArea>
            <img src="https://t3.ftcdn.net/jpg/06/35/17/52/360_F_635175286_Ve3RnNYKcHmWsHRNNhoWq4c38pLpZapu.jpg" alt="Image 3" />
          </S.ItemImageArea>
          <S.ItemNome>Shilpa Shetty</S.ItemNome>
          <S.ItemDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </S.ItemDesc>
          
        </S.Item>

        <S.Item>
          <S.ItemImageArea>
            <img src="https://img.freepik.com/premium-photo/portrait-personal-trainer-sportswear-fitness-center-gym_109710-1637.jpg?w=360" alt="Image 4" />
          </S.ItemImageArea>
          <S.ItemNome>Niranjan Thakare</S.ItemNome>
          <S.ItemDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </S.ItemDesc>
        
        </S.Item>
      </S.Container>
      
      {/* About Us paragraph */}
     

      <Footer />
    </S.All>
  );
}
