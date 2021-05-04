
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
   const friends = [ {name:'abid'},{ name:'hasan'},{name:'rashid'}, {name:'kamrul'}, {name:'salma'},{name:'sathi'}, {name:'priyanka'}];
   const age = [{age:19}, {age:20}, {age:20}, {age:19}, {age:18}, {age:21}, {age:17}];

   const products = [{name:'camera', prise:'$99.99'},
                      {name:'mobile', prise:'$199.99'},
                      {name:'watch', prise:'$89.99'},
                      {name:'head phone', prise:'$29.99'},
                      {name:'charger', prise:'$19.99'},
                      {name:'cable', prise:'$9.99'},
                      {name:'memory', prise:'$8.99'},
                      {name:'router', prise:'$49.99'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          list of my friends
        </h1>

        <Counter></Counter>
        <Users></Users>

        <ol>
          {friends.map(friend =><li>{friend.name}</li>)}
          
        </ol>
        <ol>
          {products.map(product=><li>{product.name}<p>prise:{product.prise}</p></li>)}
        </ol>

      {/* creat a div................... */}
        {
          products.map(singleProduct =><Product product={singleProduct}> </Product>)
        }
        {friends.map(singleFriend=><Friends aloneFriends={singleFriend}></Friends>)
        }

      </header>
    </div>
  );
}
function Friends(props) {
  const FriendsStyle={
    border:'2px solid red',
    margin:'10px',
    color:'red',
    width: '400px',
  };
  const name=props.aloneFriends.name;
  return(
    <div style={FriendsStyle}>

      <h1>name: {name} </h1> 

      <p>
        <h4>Age:</h4>
      </p>

    </div>
  )

}

function Product(props) {
  const ProductsStyle = {
    border:'1px solid gray',
    borderRadius:'15px',
    color:'black',
    backgroundColor:'lightgray',
    height:'200px',
    width:'300px',
    margin:'5px',
    float:'left',
    boxShadow:'10px 5px 10px  ash',
  };
  const {name,prise}=props.product;

  return(
    <div style={ProductsStyle}>

      <h2>name:{name}</h2>

      <h3>prise:{prise}</h3>

      <button>buy Now</button>

    </div>
  )
}

// creat component state

function Counter() {
  const[count, setCount]=useState(20);

  return(
    <div>
      <h1>Count:{count}</h1>      
      <button onClick= { () => setCount(count-1) }> decrease</button>
      <button onClick={ () => setCount(count + 1)} >Increase</button>

    </div>
  )
}

function Users() {
  const[users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) =>setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length} </h3>
      
      <ol>
        {
          users.map(user => <li>Name:{user.name}<p>Email:{user.email}</p><br></br></li>)
        }
      </ol>
    </div>
  )
}



export default App;
