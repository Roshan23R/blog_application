import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'> ABOUT ME</span>
                <img src='https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                </img>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
                    </p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'> CATEGORIES</span>
              <ul className='sidebarList'>
                  <li className='sidebarListItem'>Life</li>
                  <li className='sidebarListItem'>Music</li>
                  <li className='sidebarListItem'>Style</li>
                  <li className='sidebarListItem'>Sport</li>
                  <li className='sidebarListItem'>Tech</li>
                  <li className='sidebarListItem'>Cinema</li>
              </ul>
          </div>
          <div className='sidebarItem'>
              <span className='sidebarTitle'>FOLLOW US</span>
              <div className='sidebarSocial'>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>  
              </div>
          </div>
    </div>
    )
}
