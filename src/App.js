import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import {useSnackbar } from 'notistack';
import { useCallback } from "react"; 
let firstRender = true;
function App() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch()
  const authState = useSelector((state)=> state.auth.isLoggedIn)
  const cart = useSelector((state)=> state.cart.cartItems)
  const sendRequest = async()=>{
    if (firstRender) {
      firstRender = false;
      return
    }
    const response = await  fetch('https://reduxwithtoolkit-default-rtdb.firebaseio.com/cartItems.json',
    {
      method:'PUT',
      body: JSON.stringify(cart)
    }
    )

    if(response.status === 200) {
      console.log('34');
      enqueueSnackbar('Sending Request to FireBase',{variant:'reportComplete',persist: true,autoHideDuration: 10000,anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      }})
       closeSnackbar()
    }
  
    const data = await response.json()
    // handle request
    if(data){
       enqueueSnackbar('Successfully added!!!',{variant:'success',persist: true,autoHideDuration: 10000,anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      }})
      closeSnackbar()
    }
  }
  useEffect(()=>{
    sendRequest()
  },[cart])



 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" exact element={!authState && <Auth/>}></Route>
            <Route path="/layout" element={authState && <Layout/>}></Route>
        </Routes>
      </BrowserRouter>
  
   
    </div>
  );
}

export default App;
