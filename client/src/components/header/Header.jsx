import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        {/* <span className='headerTitleSm'>Blog</span> */}
        <span className='headerTitleLg'>Kalam </span>
      </div>
      <img className="headerImg"
        src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt='' />
      
    </div>
  );
}
