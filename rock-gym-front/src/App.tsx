import React from 'react';
import './App.css';
import { NavigationBar } from './Pages/Navbar/NavigationBar';
import { HomePage } from './Pages/Home/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SubscriptionsPage } from './Pages/Subscriptions/SubscriptionsPage';
import { GroupTrainingsPage } from './Pages/GroupTrainings/GroupTrainingsPage';
import { LoginPage } from './Pages/Login/LoginPage';
import { RegistrationPage } from './Pages/Registration/RegistrationPage';
import { TrainingFeedbackPage } from './Pages/TrainingFeedback/TrainingFeedbackPage';
import { ChakraProvider } from '@chakra-ui/react';




function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
        <NavigationBar />
          <Routes>
            <Route path="/" element={< HomePage />} />
            <Route path="/login" element={< LoginPage />} />
            <Route path="/register" element={< RegistrationPage />} />
            <Route path="/subscriptions" element={< SubscriptionsPage />} />
            <Route path="/grouptrainings" element={< GroupTrainingsPage />} />
            <Route path="/gtfeedback" element={<TrainingFeedbackPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
