import './App.css';


import { useState, useEffect } from 'react';
import { ShowUser }            from './components/ShowUser';

interface AppProps {
  name: string | null;
  surname: string | null;
  email: string | null;
}

function App() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const [user, setUser] = useState<AppProps | null>(null);

  const [showItem, setShowItem] = useState(false);
  const [cadastreClicked, setCadastreClicked] = useState(false);

  const showUser = () => {
    let newUser = {
      name: name,
      surname: surname,
      email: email,
    };

    setUser(newUser);

    setName('');
    setSurname('');
    setEmail('');

    setCadastreClicked(true);
  };

  const handleShowItem = () => {

    if (showItem === false) {
      setShowItem(true);
      
    } else {
      setShowItem(false);
      // Redefina os campos e cadastreClicked quando "Cadastrar novo usuário" for clicado
      setName('');
      setSurname('');
      setEmail('');

      setCadastreClicked(false);
      // Redefina o usuário como null quando "Cadastrar novo usuário" for clicado
      setUser(null);

    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      {cadastreClicked && <div>Novo usuário cadastrado</div>}

      {showItem ? (
        <main>
          <ShowUser
            name={user?.name}
            surname={user?.surname}
            email={user?.email}
          />

          <button onClick={handleShowItem}>Cadastrar novo usuário</button>
        </main>
      ) : (
        <>
          <hr />
          <br />
          <h3>Cadastre o usuário</h3>
          <form>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="nome..."
            />{' '}
            <br />
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="apelido..."
            />{' '}
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e-mail..."
            />{' '}
            <br /><br />
            {name.length > 1 && surname.length > 1 && email.includes('@') ? (
              <>
                <button type="submit" onClick={showUser}>
                  Cadastre
                </button>
              </>
            ) : (
              <strong>Preencha todos os campos...</strong>
            )}
          </form>

          <br />
          <hr />

          {/* Renderize o botão Ver Usuário Cadastrado somente quando cadastreClicked for true */}
          {cadastreClicked ? (
            <button onClick={handleShowItem}>Ver Usuário Cadastrado</button>
          ) : (
            <strong>...</strong>
          )}
        </>
      )}
    </>
  );
}

export default App;
