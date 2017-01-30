import './index.css';
import {getPosts} from './api/postsApi';

getPosts().then(result => {
   let postsBody = "";

   result.forEach(post => {
      postsBody+= `<tr>
         <td><a href="#" data-id="${post.id}" class="deletePost"> Delete </a></td?>
         <td>${post._id.substring(0,5)}</td>
         <td>${post.title.substring(0,10)}</td>
         <td>${post.image.substring(0,10)}</td>
         <td>${post.created.substring(0,10)}</td>
      </tr>`
   });

   global.document.getElementById("posts").innerHTML = postsBody;
});
