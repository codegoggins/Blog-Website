import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img src='https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt=''></img>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, perspiciatis voluptate officia, voluptatibus, animi consectetur illo ipsa ad dicta omnis molestiae facilis ipsum ratione eveniet minus hic commodi nulla architecto.</p>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>Sports</li>
                <li className='sidebarListItem'>Nature</li>
                <li className='sidebarListItem'>Fashion</li>
                <li className='sidebarListItem'>Life</li>
                
            </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>FOLLOW ME</span>
            <div className='sidebarSocial'>
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-google"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
            </div>
        </div>
    </div>
  )
}
