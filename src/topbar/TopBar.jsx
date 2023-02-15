import "./topbar.css"

export default function TopBar() {
  return (
      <div className='top'>
          <div className='topLeft'>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-square-facebook"></i>

          </div>
          <div className='topCenter'>
              <ul className="topList">
                  <li className="topListItem">HOME</li>
                  <li className="topListItem">ABOUT</li>
                  <li className="topListItem">CONTACT</li>
                  <li className="topListItem">LOGOUT</li>
                </ul>
          </div>
          <div className="topRight">
              <img className="topImg" src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          </div>
    </div>
  )
}
