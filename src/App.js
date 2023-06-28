import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SignUp from './components/SignUp/SignUp';
import SuccessRegistration from './components/SuccessRegistration/SuccessRegistration';
import Title from './components/Title/Title';
import Users from './components/Users/Users';

import { getPositions, getToken, getUsers } from './redux/usersOperations';
import { selectRegistered } from './redux/usersSelector';

function App() {
  const dispatch = useDispatch();
  const registered = useSelector(selectRegistered);
  useEffect(() => {
    dispatch(getPositions());
    dispatch(getUsers({ page: 1 }));
    dispatch(getToken());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Title title="Working with GET request" />
        <Users />

        {registered ? (
          <SuccessRegistration />
        ) : (
          <>
            <Title title="Working with POST request" />
            <SignUp />
          </>
        )}
      </main>
    </>
  );
}

export default App;
