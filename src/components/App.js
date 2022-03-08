import Navbar from './Navbar';
import ProductItem from './ProductItem';
import ProductDetail from './ProductDetail';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { connect } from 'react-redux';
import '../App.css';

function App() {
  return (
    <div className="App">    
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/productDetails" element={<ProductDetail />}/>
          <Route exact path="/" element={<ProductItem />}/>          
        </Routes>
        </Router>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state,
  };
}


export default connect(mapStateToProps)(App);
