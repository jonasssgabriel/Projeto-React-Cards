// 1. Importamos o CSS para estilização e nosso novo componente.
import './App.css'; // Supondo que os estilos do card estejam aqui.
import ProfileCard from './components/ProfileCard';

function App() {
  // 2. Dados: mantive seu array, só adicionei a propriedade github
  const profilesData = [
    {   
      id: 1,
      imageUrl: 'https://avatars.githubusercontent.com/u/150300238?v=4',
      name: 'Jonas Gabriel',
      title: 'Desenvolvedor Frontend',
      github: 'https://github.com/jonasssgabriel'
    },
    {
      id: 2,
      imageUrl: 'https://avatars.githubusercontent.com/u/220111458?v=4',
      name: 'Igor Gabriel',
      title: 'Estudante de Sistemas',
      github: 'https://github.com/hexaMe-bit'
    },
    {
      id: 3,
      imageUrl: 'https://avatars.githubusercontent.com/u/150300286?v=4',
      name: 'Lucas Leal',
      title: 'Estudante de Computação',
      github: 'https://github.com/Luckleal'
    },
    {
      id: 4,
      imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
      name: 'Wagner Rodrigues',
      title: 'Estudante de Computação',
      github: 'https://github.com/wagnerr' // substitua pelo real
    },
    {
      id: 5,
      imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
      name: 'Guilherme Motta',
      title: 'Estudante de Computação',
      github: 'https://github.com/' // substitua pelo real
    }
  ];

  // 3. Separo o primeiro card (seu) e ordeno os outros alfabeticamente
  const [first, ...others] = profilesData;
  const sortedOthers = [...others].sort((a, b) => a.name.localeCompare(b.name));

  // 4. Renderização com .map()
  return (
    <div className="App">
      <h1>Projeto React Cards</h1>
      <div className="profiles-container">
        {/* Primeiro card (seu) */}
        <ProfileCard
          key={first.id}
          name={first.name}
          title={first.title}
          imageUrl={first.imageUrl}
          github={first.github}
        />

        {/* Demais cards em ordem alfabética */}
        {sortedOthers.map(profile => (
          <ProfileCard
            key={profile.id} // Chave especial para o React otimizar a lista
            name={profile.name}
            title={profile.title}
            imageUrl={profile.imageUrl}
            github={profile.github}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
