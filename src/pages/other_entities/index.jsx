import React from 'react'
import './style.scss'

const OtherEntitiesPage = () => {
    return <div className={'other_entities'}>
        <div className="text-and-image1"><img src={'./assets/images/pic20.png'} style={{width:100+"%"}} alt="pic20" />
            <div><h3>Прочие сущности - остальное заполнение, которое может выполнять разнообразные функции, 
                начиная от точки освещенности и заканчивая запуском списка самописных скриптов на glua. 
                Кроме того различают два типа сущностей: точечные и геометрические. Первый тип можно найти через класс сущности, 
                второй же образовывается из геометрии с помощью того же класса сущности.</h3></div>
        </div>
        <div className='Block1'>
            <div className='text'>Для создания точечной сущности нам потребуется инструмент Entity Tool, далее мы наживаем правую кнопку мыши по нему на сетке программы и выбираем пункт Properties. Класс сущности изменяется сверху, в поле присутствует фильтр для удобного поиска необходимых точечных сущностей.</div>
            <div className='pic'><img src={'./assets/images/pic21.png'} width="152" height="189" alt="pic21" /></div>
        </div>
        <div className='Block2'>
            <div className='text'>Для создания геометрической сущности нам нужно будет перевести выбранную геометрию в сущность. Это делается нажатием правой кнопки мыши на выбранной геометрии и выбором пункта Tie to Entity.</div>
            <div className='pic'><img src={'./assets/images/pic22.png'} width="251" height="336" alt="pic22" /></div>
        </div>
        <div className='Block3'>
            <div className='text'>Изменение класса сущности происходит в пункте Properties. У каждого типа сущностей есть собственные варианты, но выбор происходит в том же окне. Расскажу об самых полезных точечных сущностях, так как геометрические используются в раздере “Оптимизация”. </div>
            <div className='pic'><img src={'./assets/images/pic23.png'} width="294" height="97" alt="pic23" /></div>
        </div>
    </div>
}

export default OtherEntitiesPage