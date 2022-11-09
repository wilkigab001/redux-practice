import Header from "./containers/Header";
import { Route, Routes } from "react-router-dom";
import ProductComponent from "./containers/ProductComponent";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Header />
        <Route index element= {<ProductListing />} />
        <Route path='/product/:productId' element= {<ProductDetails />} />
        <Route> 404 not found </Route>
      </Routes>
    </div>
  );
}

export default App;
