import './settings.css'
import Sidebar from '../../sidebar/Sidebar'


export default function Settings() {
  return (
    <div className='settings'>
    
          <div className='settingsWrapper'>
              <div className='settingsTitle'>
                  <span className='settingUpdateTitle'>Update your Account</span>
                  <span className='settingDeleteTitle'>Delete your Account</span>
              </div>
              <form className='settingsForm'>
              <label>Profile Picture</label>
              <div className='settingsProfilePicture'>
                <img src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt=''></img>
                <label htmlFor='fileInput'>
                <i className="settingsProfilePictureIcon fa-solid fa-user"></i>
                </label>
                <input type='file' id='fileInput' style={{display:"none"}} />
              </div>
              <label>Username</label>
              <input type='text' placeholder='Nilay' />
              <label>Email</label>
              <input type='email' placeholder='nilay123@gmail.com' />
              <label>Password</label>
              <input type='password'/>
              <button className='settingsSubmit'>Update Profile</button>
              
              </form>
          </div>
              <Sidebar/>
    </div>
  )
}
