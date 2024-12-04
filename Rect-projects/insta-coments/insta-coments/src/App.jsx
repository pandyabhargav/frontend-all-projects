import React, { useState } from 'react';
import './App.css'

function App() {
  const [comments, setComments] = useState({
    comment: ''
});

const [commentsStore, setCommentsStore] = useState([]);
const handleChange = (e) => {

    let name = e.target.name;
    let value = e.target.value;

    setComments({ ...comments, [name]: value });

}

const handleSubmit = (e) => {

    e.preventDefault();
    setCommentsStore([...commentsStore, comments]);
    setComments({
        comment: ""
    })

}


  return (
    <>
       <div className="card">
      <div className="profile">
        <h4>Ms Dhoni</h4>  
        <h5>IND</h5>  
        <h6>Follow</h6> 
        <img src="https://picsum.photos/200/300"/> 
        <span>.</span>
        <i className="bi bi-three-dots-vertical fa-2x"  ></i>
      </div> 
      <div className="post">
         <img src="https://picsum.photos/400/400" /> 
      </div>
     <div className="icons">
        <i id="like" className="bi bi-heart fa-2x "></i>
        <i className="bi bi-chat-left fa-2x"></i>
        <i className="bi bi-arrow-up-right-square fa-2x"></i>
        <i  id="save" className="bi bi-bookmark  fa-2x"></i>
     </div>
      <div className="about-post">
        <h4><img src="https://picsum.photos/id/26/20"/>  Liked by Gandijuha and 104,424 others</h4>
        <h4 className="name_caption">Ms Dhoni <span id="caption">The real test is not whether you avoid this failure, because you won't.....</span></h4> 
      <h5>View all 69 comments</h5>
         <h4><img src="https://picsum.photos/id/19/19"/>                
         <form className='d-flex' onSubmit={(e) => handleSubmit(e)}>
<input type="text" placeholder="add a comment &#128512;&#128516;&#128525;&#128151;" value={comments.comment} name='comment' onChange={(e) => handleChange(e)}/>   <button type='submit'> ^ </button>
</form>
</h4>
        <h6>26 minutes ago</h6>
        <div className='view-comments mt-2'>
                {
                    commentsStore.length == 0
                        ? <p> No comments found...</p>
                        :
                        <ul className='list-unstyled'>
                            {
                                commentsStore.map((comment) => {
                                    return (
                                        <li>
                                            <div className='d-flex align-items-center'>
                                                <div className="user-profile">
                                                    <img src="https://picsum.photos/id/26/20" className='img-fluid' />
                                                </div>
                                                <div className='col px-2'>
                                                    <h6>Virat Kholi</h6>
                                                    <p>
                                                        {
                                                            comment.comment
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                }
            </div>
      </div>
    </div>
    </>
  )
}

export default App
