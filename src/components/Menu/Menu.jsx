
import MenuItems from './MenuItems'
import './Menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1>Look up for these equipments!!</h1>
        <div className='menu__container'>
            <div className='menu__wrapper'>
                <ul className='menu__items'>
                    <MenuItems
                    src='images/img-2.jpg' 
                    text='Bulldozer'
                    label='Near you'
                    path='/equipment-rental'
                    />
                    <MenuItems
                    src='images/img-1.jpg' 
                    text='Bulldozer'
                    label='Near you'
                    path='/equipment-rental'
                    /><MenuItems
                    src='images/img-1.jpg' 
                    text='Bulldozer'
                    label='Near you'
                    path='/equipment-rental'
                    />
                </ul>
        <h1>Look up for these available services!!</h1>
        <br></br>
                <ul className='menu__items'>
                    <MenuItems
                    src='images/img-home.jpg' 
                    text='Bulldozer'
                    label='Available'
                    path='/design-services'
                    />
                    <MenuItems
                    src='images/img-3.jpg' 
                    text='Bulldozer'
                    label='Near you'
                    path='/design-services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Menu