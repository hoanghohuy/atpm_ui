import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { history } from './authentication/Helpers/history';
import Home from './components/Home';
import LoginPage from "./components/Login/LoginPage";
import NotificationPage from "./components/Notification/NotificationPage";
import InternationalTransactionPage from "./components/Payment/InternationalTransaction/InternationalTransactionPage";
import Payment_MethodPage from "./components/Payment/Payment_Method/Payment_MethodPage";
import TransactionPage from "./components/Payment/Transaction/TransactionPage";
import Transaction_ConfirmPage from "./components/Payment/Transaction_Confirm/Transaction_ConfirmPage";
function App() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/PaymentMethod" element={<Payment_MethodPage />}></Route>
        <Route exact path="/Transaction/:atm" element={<TransactionPage />}></Route>
        <Route exact path="/Transaction/Confirm/:atm" element={<Transaction_ConfirmPage />}></Route>
        <Route exact path="/InternationalTransaction/:atm" element={<InternationalTransactionPage />}></Route>
        <Route exact path="/Transaction/Return" element={<NotificationPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
