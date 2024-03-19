import { Logo } from './Header.styled'
import oleksandrishkin from './image.png'
export const Header = ()=>{
    return(
        <header>
            <Logo src={oleksandrishkin}></Logo>
        </header>
    )
}