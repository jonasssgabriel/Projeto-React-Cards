
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  const profilesData = [
    {
      id: 1,
      imageUrl: "https://avatars.githubusercontent.com/u/150300238?v=4",
      name: "Jonas Gabriel",
      title: "Desenvolvedor Frontend",
      github: "https://github.com/jonasssgabriel",
    },
    {
      id: 2,
      imageUrl: "https://avatars.githubusercontent.com/u/220111458?v=4",
      name: "Igor Gabriel",
      title: "Estudante de Sistemas",
      github: "https://github.com/hexaMe-bit",
    },
    {
      id: 3,
      imageUrl: "https://avatars.githubusercontent.com/u/150300286?v=4",
      name: "Lucas Leal",
      title: "Estudante de Computação",
      github: "https://github.com/Luckleal",
    },
  ];


  const [first, ...others] = profilesData;
  const sortedOthers = [...others].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container">
      <h1>Projeto React Cards</h1>
      <p className="aluno-info">
        Aluno: Jonas Gabriel &nbsp; Grupo: Igor Gabriel, Lucas Leal
      </p>
      

      <div className="grid">
        <ProfileCard
          key={first.id}
          name={first.name}
          title={first.title}
          imageUrl={first.imageUrl}
          github={first.github}
        />


        {sortedOthers.map((profile) => (
          <ProfileCard
            key={profile.id}
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
