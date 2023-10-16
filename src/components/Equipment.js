import { Link } from 'react-router-dom';

import './Equipment.css';
import { equipmentTree } from './Constants'

function Equipment(props) {
    let url = new URL(window.location.href);

    let currentObj = equipmentTree[url.searchParams.get('parent_x3')]
        .children[url.searchParams.get('parent_x2')]
        .children[url.searchParams.get('parent')]
        .children[url.searchParams.get('key')];

    let objManufact = equipmentTree[url.searchParams.get('parent_x3')]
        .children[url.searchParams.get('parent_x2')]
        .children[url.searchParams.get('parent')];

    console.log(currentObj);

    return (
        <>
            <section className="equipment">
                <div className='equipment__content page__spacing'>
                    <div className="equipment__left">
                        <div className="equipment__left-content">
                            <img className="equipment__img" src={currentObj.img} alt={currentObj.translateRus} />
                        </div>
                    </div>
                    <div className="equipment__right">
                        <div className="equipment__right-content">
                            <div className="equipment__right-icon">
                                {objManufact.img && (
                                    <img className="equipment__img-manufacturer" src={objManufact.img} />
                                )}
                                <h3 className="equipment__manufacturer">{currentObj.manufacturer}</h3>
                            </div>
                            <h2 className="equipment__title">
                                {currentObj.translateRus}
                            </h2>
                            <p className="equipment__description">
                                {currentObj.description}
                            </p>
                            {currentObj.specifications && (
                                <>
                                    <p className='equipment__tech'>Технические характеристики:</p>
                                    <ul className='equipment__specifications'>
                                        {currentObj.specifications.map((el, index) => (
                                            <li key={index} className="equipment__specific">
                                                {el}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {currentObj.marking.length != 0 && (
                                    <div className='equipment__marking-block'>
                                        <p className='equipment__marking-text'>Маркировки: </p>
                                        <ul className='equipment__marking-list'>
                                            {currentObj.marking.map((el, index) => (
                                                <li key={index} className="equipment__mark">
                                                    {el}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            }
                            <button className="equipment__send" onClick={props.onOpen}>
                                Отправить запрос
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Equipment;