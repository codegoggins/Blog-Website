import { Link } from 'react-router-dom';
import './topbar.css'

export default function Topbar() {
  const user=false;
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-google"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                {/* home  */}
                <Link to="/" className='link'>HOME</Link> 
                </li>
                <li className='topListItem'>
                  {/* about  */}
                  <Link to="/about/postId" className='link'>ABOUT</Link>
                </li>
                <li className='topListItem'>
                  {/* contacts  */}
                  <Link to="/" className='link'>CONTACTS</Link>
                </li>
                <li className='topListItem'>
                  {/* write  */}
                  <Link to="/write" className='link'>WRITE</Link>
                </li>
                   <li className='topListItem'>
                   {/* logout  */}
                   <Link to="/" className='link'>
                     {user && "LOGOUT"}
                   </Link>
                </li>
            </ul> 
        </div>
        <div className='topRight'>

           {
             user?(
              <img className="topImage" src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt=''></img>
             ):(
               <ul className='topList'>
                 <li className='topListItem'>
                   <Link className='link' to="/login">LOGIN</Link>
                 </li>
                 <li className='topListItem'>
                   <Link className='link' to="/register">REGISTER</Link>
                 </li>
               </ul>
             )
           }


           <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  
  )
}

