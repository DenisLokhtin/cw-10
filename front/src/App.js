import {Route, Switch} from "react-router-dom";
import Layout from "./components/UI/Layout/Layout";
import Products from "./containers/Products/Products";
import Product from "./containers/Product/Product";
import NewProduct from "./containers/NewProduct/NewProduct";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Products}/>
      <Route path="/products/new" component={NewProduct}/>
      <Route path="/products/:id" component={Product}/>
    </Switch>
  </Layout>
);

export default App;
