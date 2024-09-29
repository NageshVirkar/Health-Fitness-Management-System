import React from 'react'
import * as S from './style'
import IMG from '../../assets/404_img.svg'
import { Link } from 'react-router-dom'

export default function index() {
    document.title = 'Error 404!'
  return (
    <S.Container>
        <img src={IMG} alt='img error 404' />
        <button><Link to='/'>Go to the beginning</Link></button>
    </S.Container>
  )
}
