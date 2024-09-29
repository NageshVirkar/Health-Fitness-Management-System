import React from 'react'
import * as S from './style'
import BG from '../../assets/bg_plan.png'
import Plan from '../../components/Plans'
import NavBar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function index() {

    document.title = 'Muscle Factory - plans'

  return (
    <S.All>
        <NavBar />
        <S.Container>
            <S.Header>
                <img src={BG} alt='background' />
                <S.HeaderInfo>
                    <h1>Plans</h1>
                    <p>Choose your plan and enroll online</p>
                </S.HeaderInfo>
            </S.Header>
            <S.Body>
                <Plan />
                <S.InfoAdd>
                    <p>The cancellation must be notified at least 30 days prior to the next due date.
The monthly fee does not include enrollment and maintenance fees. Monthly payment by credit card.
The minimum price may vary between plans and units.
                    </p>
                </S.InfoAdd>

            </S.Body>
        </S.Container>
        <Footer />
    </S.All>
  )
}
