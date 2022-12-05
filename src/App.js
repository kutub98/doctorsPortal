import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Routers/Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
    <Router></Router>
  <Toaster></Toaster>
    </div>
  );
}

export default App;
