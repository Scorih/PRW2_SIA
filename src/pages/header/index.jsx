import React from "react";
import './style.scss'
import { Link } from 'react-router-dom'

export const HeaderPage = () => {
    return <div className={"header"}>
        <div className={'header__logo'}>
            <img src={'/assets/logo.svg'} />
        </div>
        <div className={'header__menu'}>
            <div><Link to={'/home_page'}>Главная</Link></div>
            <div><Link to={'/light'}>Свет</Link></div>
            <div><Link to={'/geometry'}>Геометрия</Link></div>
            <div><Link to={'/other_entities'}>Прочие сущности</Link></div>
            <div><Link to={'/optimization'}>Оптимизация</Link></div>
            <div><Link to={'/about_us'}>О руководстве</Link></div>
        </div>
    </div>
}