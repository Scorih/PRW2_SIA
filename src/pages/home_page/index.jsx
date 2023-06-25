import React from 'react'
import './style.scss'

const HomePage = () => {
    return <div className={'home_page'}>
        <div className="text-and-image1"><img src={'./assets/images/pic1.png'} style={{width:100+"%"}} alt="pic1" />
            <div><h3>Mapping (Проработка дизайна уровней) - дисциплина в разработке компьютерных игр, 
                которая включает в себя создание уровней для игр. Для этого используют внутренние редакторы уровней на собственном движке. </h3>
            </div>
        </div>
        <div>
            <div className="popUpText">Популярность среды разработки уровней</div>
            <div className="poptext">Source SDK - это необычайно гибкий,
             модульный и распрастранненый движок, который позволяет достаточно быстро создать собственный уровень.
              Долгие годы жизни движка и большое число его любителей создали огромную базу в виде подробной документации.</div>
            <div className="popimg"><img src={'./assets/images/charts.png'} style={{width:100+"%"}} alt="charts" /></div>
        </div>
        <div className='firstLineTable'>
            <div>Название игры</div>
            <div>Half-Life 2</div>
            <div>Vampire: The Masquerade — Bloodlines</div>
            <div>Day of Defeat: Source</div>
            <div>Dark Messiah of Might and Magic</div>
            <div>Garry’s Mod</div>
            <div>Portal</div>
            <div>Portal 2</div>
            <div>Team Fortress 2</div>
            <div>Left 4 Dead 2</div>
            <div>Alien Swarm</div>
            <div>No More Room in Hell</div>
            <div>Counter-Strike: Global Offensive</div>
            <div>Dota 2</div>
            <div>The Stanley Parable</div>
            <div>Titanfall</div>
            <div>Insurgency</div>
            <div>Titanfall 2</div>
            <div>Apex Legends</div>
        </div>
        <div className='secondLineTable'>
            <div>Название игры</div>
            <div>2004</div>
            <div>2004</div>
            <div>2005</div>
            <div>2006</div>
            <div>2006</div>
            <div>2007</div>
            <div>2011</div>
            <div>2007</div>
            <div>2009</div>
            <div>2010</div>
            <div>2011</div>
            <div>2012</div>
            <div>2013</div>
            <div>2013</div>
            <div>2014</div>
            <div>2014</div>
            <div>2016</div>
            <div>2019</div>
        </div>
    </div>
}

export default HomePage