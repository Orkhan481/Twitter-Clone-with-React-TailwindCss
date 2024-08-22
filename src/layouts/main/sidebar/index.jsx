import Logo from './logo/index'
import Menu from './Menu'

export default function Sidebar(){
    return(
        <aside className="w-[275px] min-h-screen">
                <span className='text-center '>
                <Logo/>
                </span>
                <Menu />
        </aside>
    )
}