import React from "react";
import {Provider} from 'react-redux'
import { ConfigProvider } from 'antd'; 
import zhCN from "antd/es/locale/zh_CN";
import store from "./store"
import Login from './views/login'

function App() {
 return(
   <ConfigProvider locale={zhCN}>
     <Provider store={store}>
      <Login></Login>
     </Provider>
   </ConfigProvider>
 )
}

export default App;
