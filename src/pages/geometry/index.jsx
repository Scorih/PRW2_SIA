import React from 'react'
import './style.scss'

const GeometryPage = () => {
    return <div className={'geometry'}>
        <div className="text-and-image1"><img src={'./assets/images/pic20.png'} style={{width:100+"%"} } alt="pic20" />
            <div><h3>Свет - самый простой в освоении и наиболее сложный в реализации элемент настройки уровня. 
                Правильно подобранная цветовая гамма сильно увеличивает хорошее впечатление от картинки.</h3>
            </div>
        </div>
        <div className='Block1'>
            <div className='text'>Для создания точечной сущности нам потребуется инструмент Entity Tool, 
            далее мы наживаем правую кнопку мыши по нему на сетке программы и выбираем пункт Properties. Класс сущности изменяется сверху, 
            в поле присутствует фильтр для удобного поиска необходимых точечных сущностей.</div>
            <div className='pic'><img src={'./assets/images/pic21.png'} width="152" height="189" alt="pic21" /></div>
        </div>
        <div className='Block2'>
            <div className='LeftBlock'>
                <div className='textUp'>Для создания точечной сущности нам потребуется инструмент Entity Tool, 
                далее мы наживаем правую кнопку мыши по нему на сетке программы и выбираем пункт Properties. Класс сущности изменяется сверху, 
                в поле присутствует фильтр для удобного поиска необходимых точечных сущностей.</div>
                <div className='BottomBlock'>
                    <div className='textDown'>Для создания точечной сущности нам потребуется инструмент Entity Tool, 
                    далее мы наживаем правую кнопку мыши по нему на сетке программы и выбираем пункт Properties. Класс сущности изменяется сверху, 
                    в поле присутствует фильтр для удобного поиска необходимых точечных сущностей.</div>
                    <div className='picDown'><img src={'./assets/images/pic21.png'} width="294" height="97" alt="pic21" /></div>
                </div>
            </div>
            <div className='picRight'><img src={'./assets/images/pic21.png'} width="251" height="495" alt="pic21" /></div>
        </div>

    </div>
}

export default GeometryPage