import './Popup.css';

function Popup({onClose}) {
    return (
        <div className='popup'>
            <div className='popup__carpet'>
                <div className='popup__block'>
                    <div className='popup__content'>
                        <p className='popup__title font-large'>Меню</p>
                        <ul className='popup__list'>
                            <li className='popup__nav font-medium'>О нас</li>
                            <li className='popup__nav font-medium'>Ифнормация</li>
                            <li className='popup__nav font-medium'>Контакты</li>
                            <li className='popup__nav font-medium'>Задонатить</li>
                        </ul>
                        <div className='close' onClick={onClose}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;