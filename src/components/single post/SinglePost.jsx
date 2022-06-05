import './singlePost.css'

export default function singlePost() {
  return (
    <div className='singlePost'>
    
    <div className='singlePostWrapper'>
        <img src='https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80' alt='' className='singlePostImage'></img>
        <h1 className='singlePostTitle'>
            Why do we need laws to protect trees ?
            <div className='singlePostEdit'>
            <i class="singlePostIcon fa-solid fa-user-pen"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className='singlePostInfo'>
            <span className='singlePostAuthor'>Author: <strong> Nilay Singh </strong> </span>
            <span className='singlePostDate'>Date: <strong> 1 hr Ago </strong> </span>
        </div>
        <p className='singlePostPara'>
        
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, 
            remaining essentially unchanged. 

            It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.

            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, 
            remaining essentially unchanged. 

            It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.

            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, 
            remaining essentially unchanged. 

            It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.
        </p>
    </div>

    </div>
  )
}
