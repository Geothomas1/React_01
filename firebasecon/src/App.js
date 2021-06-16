import {fireBase} from './firebase/config'
function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        fireBase.auth().createUserWithEmailAndPassword('geothomas@cet.ac.in','password')
        .then((userCredential) => {
          console.log("User Created")
          // Signed in 
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
      
      }}>SignUp</button>
      <button onClick={()=>{
        fireBase.auth().signInWithEmailAndPassword('geothomas@cet.ac.in', 'password')
        .then((userCredential) => {
          // Signed in
          console.log("user login successfully");
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
          console.log('Invalid email and password');
        });
      }}>Sign In</button>

      <button onClick={()=>{
      fireBase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });  
      }}>Signout</button>


      <button onClick={()=>
      {
        fireBase.firestore().collection('products').get().then((data=>{
          data.forEach((obj)=>{
            console.log(obj.data(),obj.id)
          })
        }))
      }}>onClick Me to Get Values</button>
      <br></br>
      <br></br>
      <button onClick={()=>{
        fireBase.firestore().collection('products').add({
          name:'Readme Note 10 pro',
          price:18000,
          type:'Mobile'
        }).then((response)=>{
          console.log("Data Addddddd.....")
        })
      }}
      >Add Values to DB</button>
      <br></br>
      <br></br>
      <button onClick={()=>{
        fireBase.firestore().collection('products').doc('DKPCAPTyBIi0ZXcvKt53').delete().then((deleteResponse)=>{
          console.log("Deleted")
        })
      }}>Delete Product</button>
      <br></br>
      <br></br>
      <button onClick={()=>{
        fireBase.firestore().collection('products').doc('gdrbQjFRR87rHSHDkEC0').set({
          price:20000
        }).then((updateProduct)=>{
          console.log("Updates successfulll");
        })
      }}>Update Product</button>
    </div>
  );
}

export default App;
