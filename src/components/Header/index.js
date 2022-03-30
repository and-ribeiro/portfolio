import './styles.css'
import logo from '../../assets/logo.png'

export default function Header(){
    return(        
        <header className='header'>        
        <img src={logo} alt="logo" className="logo" />
        <ul className='list'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Tools</a></li>
        </ul>        
        </header>        
    )
}