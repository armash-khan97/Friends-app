import { onAuthStateChanged } from '@firebase/auth';
import { useState, useEffect } from 'react';
import { getDoc, collection, doc, getDocs } from '@firebase/firestore';
import { db, auth } from '../../config/Firebase';
import Setting from '../setting/Setting'

const Profile = () => {
  const [users, setUsers] = useState([])
  const [newPost, setPosts] = useState([])

  useEffect(() => {
    onAuthStateChanged(auth, (userId) => {
      const currentUserId = userId.uid;
      const usersCollectionRef = doc(db, 'users', currentUserId)
      const getUsers = async () => {
        const userdataInfo = await getDoc(usersCollectionRef);
        if (userdataInfo.exists) {

          setUsers(userdataInfo.data())

        }
      };
      const postsCollectionRef = collection(db, 'posts')
      const getPost = async () => {
        const postdataInfo = await getDocs(postsCollectionRef);
        console.log(postdataInfo)
        const new_Post = postdataInfo.docs.map((doc) => ({ ...doc.data() }));
        setPosts(new_Post)






      };

      getUsers();
      getPost();
    })



  }, [])


 

  
  return (
    <div>

        <div>
            {""}
           <h1>Name: {users.name} <input type ='name' name='user.name' /></h1>
           <h1>photo: {users.photo} <input type="file" name='users.photo'  /></h1>
           <button> Submit </button>
           <Setting />



       </div>

   <div>
   {
         newPost.map((v)=>{return (<div>{v.userpost}</div>)})

   }
   </div>

   </div>
)



}
export default Profile
