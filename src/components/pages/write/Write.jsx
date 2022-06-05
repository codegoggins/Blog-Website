import './write.css'

export default function Write() {
  return (
    <div className='writePost'>
             <img src='https://images.unsplash.com/photo-1520264914976-a1ddb24d2114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='' className='writePostImage'></img>
        
        <form className='writeForm'>
             <div className='writeFormGroup'>
                 <label htmlFor='fileInput'>
                 <i className="writeIcon fa-solid fa-plus"></i>
                 </label>
                 <input type='file' id='fileInput' style={{display:"none"}}/>
                 <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
             </div>
             <div className='writeFormGroup'>
               <textarea placeholder="what's on your mind......." type="text" className='writeText'></textarea>
             </div>
             <button className='writeSubmit'>Post</button>
        </form>

    </div>
  )
}
