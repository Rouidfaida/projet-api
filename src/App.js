
import './App.css';
import PhotoCard from './Components/PhotoCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbare from './Components/Navbare';
import Listesphotos from './Components/Listesphotos';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Description from './Components/Description';
import { useDispatch, useSelector } from 'react-redux';
import { handelSet, handelSetMovie } from './redux/action';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ListFood from './Components/ListFood';
import InfoMakeup from './Components/InfoMakeup';
import Acceuil from './Components/Acceuil';
import { Spinner,Button } from 'react-bootstrap';

function App() {
  const dispatch = useDispatch()  
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        let getuser=async()=>
        { try {
            let res=
                await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed`)
                dispatch(handelSet(res.data))
                setLoading(false);
                console.log(res)
            
        } catch (error) {
            console.log(error)
            
        }
       
      }
      getuser()}
       , [])



       useEffect(() => {
        let getuser=async()=>
        { try {
            let res=
            
                await axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
                dispatch(handelSetMovie(res.data))
                setLoading(false);
                console.log(res)
            
        } catch (error) {
            console.log(error)
            
        }
       
      }
      getuser()}
       , [])

       if (loading === true) {
        return (
          <>
            <Spinner className="spinner" />
            <span className="visually-hidden">Loading...</span>
            <Button variant="outline-success" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </>
        );
      }
  



  return (
    <div >
      <BrowserRouter>
      <Switch>
           {/* <Route exact path="/" component={ Acceuil}/> */}
             <Route exact path="/" component={ Listesphotos}/>

             <Route exact path="/infos/:id" render={(props)=><Description {...props}/>} />
             <Route exact path="/food/" render={(props)=><ListFood  {...props}/>} />
             <Route exact path="/makeup/:id" render={(props)=><InfoMakeup {...props}/>} />

             </Switch></BrowserRouter>
             {/* <ListFood/> */}
            
        </div>
  );
}

export default App;
