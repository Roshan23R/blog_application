import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarItemTitle'> ABOUT ME</span>
                <img src='https://images.pexels.com/photos/7129048/pexels-photo-7129048.jpeg?auto=compress&cs=tinysrgb&w=600'>
                    </img>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
                    
                </p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'> CATEGORIES</span>
                <ul className='sidebarList'></ul>
            </div>
    </div>
    )
}
