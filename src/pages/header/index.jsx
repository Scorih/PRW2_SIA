import React from "react";
import './style.scss'
import { Link } from 'react-router-dom'

export const HeaderPage = () => {
    return <div className={"header"}>
        <div className={'header__logo'}>
            <img src={'/assets/logo.svg'} />
        </div>
        <div className={'header__menu'}>
            <div><Link to={'/about_us'}>Главная</Link></div>
            <div><Link to={'/about_us'}>Свет</Link></div>
            <div><Link to={'/about_us'}>Геометрия</Link></div>
            <div><Link to={'/about_us'}>Прочие сущности</Link></div>
            <div><Link to={'/about_us'}>Оптимизация</Link></div>
            <div><Link to={'/about_us'}>О пуководстве</Link></div>
        </div>
    </div>
}