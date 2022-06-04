import './post.css'

export default function Post() {
  return (
    <div className='post'>

       <img src='https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='' className='postImage'></img>
       
       <div className='postInfo'>
           <div className='postCategories'>
               <span className='postCategory'>Nature</span>
               <span className='postCategory'>Life</span>
           </div>
           <span className='postTitle'>Trees and their importance</span>
           <hr/>
           <span className='postDate'>1 hour ago</span>
       </div>
       <p className='postDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sit minima temporibus omnis aut assumenda modi totam sunt iste tempora dolore sed commodi, quas, quis quos dolor adipisci odit ipsa perspiciatis voluptatibus laudantium voluptatem ad aliquam. Ea a reiciendis magnam, optio quidem non sequi, eveniet praesentium dolorum, deleniti facilis voluptatum?</p>

    </div>
  )
}
