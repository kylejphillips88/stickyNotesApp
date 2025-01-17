import { useEffect, useState } from 'react';
import LoginModal from './components/LoginModal';
import NavBar from './components/NavBar';
import SignUpModal from './components/SignUpModal';
import { User } from './models/user';
import * as NotesApi from "./network/notes_api";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotesPage from './pages/NotesPage';
import { Container } from 'react-bootstrap';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';
import styles from "./styles/App.module.css";
import PaintingsPage from './pages/PaintingsPage';
import WorkHistoryPage from './pages/WorkHistoryPage';

function App() {

  const [loggedInUser, setLoggedInUser] = useState<User|null>(null);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    async function fetchLoggedInUser() {
      try{
        const user = await NotesApi.getLoggedInUser();
        setLoggedInUser(user)
      } catch(error) {
        console.error(error);
      }
    }
    fetchLoggedInUser();
  }, []);

  return (
    <BrowserRouter>
    <div>
      <NavBar
      loggedInUser={loggedInUser}
      onLoginClicked={() => setShowLoginModal(true)}
      onLogoutSuccessful={() => setLoggedInUser(null)}
      onSignUpClicked={() => setShowSignUpModal(true)}
      />
      <Container className={styles.pageContainer}>
        <Routes>
          <Route
          path='/'
          element={<NotesPage loggedInUser={loggedInUser}/>}
          />
          <Route
          path='/privacy'
          element={<PrivacyPage/>}
          />
          {<Route
          path='/paintings'
          element={<PaintingsPage/>}
          />}
          <Route
          path='/workhistory'
          element={<WorkHistoryPage/>}
          />
          <Route
          path='/*'
          element={<NotFoundPage/>}
          />
        </Routes>
      </Container>
    { showSignUpModal &&
        <SignUpModal
        onDismiss={() => setShowSignUpModal(false)}
        onSignUpSuccessful={(user) => { 
          setLoggedInUser(user);
          setShowSignUpModal(false);
        }}
        />
      }
      { showLoginModal &&
        <LoginModal
        onDismiss={() => setShowLoginModal(false)}
        onLoginSuccessful={(user) => { 
          setLoggedInUser(user);
          setShowLoginModal(false);
        }} 
        />
      }
    </div>
    </BrowserRouter>
  );
}

export default App;
