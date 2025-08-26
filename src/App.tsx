// 1. Importamos o CSS para estilização e nosso novo componente.
import './App.css'; // Supondo que os estilos do card estejam aqui.
import ProfileCard from './components/ProfileCard';

function App() {
  // 2. Nossos dados continuam sendo um simples array de objetos.
  const profilesData = [
    {   
        id: 1,
        imageUrl: 'https://avatars.githubusercontent.com/u/76878694?v=4',
        name: 'Marianne Dutra',
        title: 'Querida professora de vcs'},
    {
        id: 2,
        imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png',
        name: 'Ada Lovelace',
        title: 'Pioneira da Programação'
    },
    {
        id: 3,
        imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
        name: 'Alan Turing',
        title: 'Pai da Computação'
    },
    {
        id: 4,
        imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png',
        name: 'Grace Hopper',
        title: 'Criadora do COBOL'
    }
];

  // 3. A mágica do React: usamos .map() para transformar dados em componentes.
  return (
    <div className="App">
      <h1>Exemplo com React</h1>
      <div className="profiles-container">
        {profilesData.map(profile => (
          <ProfileCard
            key={profile.id} // Chave especial para o React otimizar a lista
            name={profile.name}
            title={profile.title}
            imageUrl={profile.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;