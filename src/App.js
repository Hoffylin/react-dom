import React from 'react';
import './App.css';
import RootRouter from './router/router'
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
//响应拦截器 
axios.interceptors.response.use(function(response){
  return response.data
},function (error){
  return Promise.reject(error);
});
function App() {
  return (
    <div>
      <RootRouter/>
    </div>
  );
}

export default App;
