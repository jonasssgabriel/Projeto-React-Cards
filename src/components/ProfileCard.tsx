// Definimos a "forma" dos dados que este componente espera receber.
// Isso é graças ao TypeScript e nos ajuda a evitar erros.
interface ProfileCardProps {
  key: number;
  imageUrl: string;
  name: string;
  title: string;
  github: string; // 👉 nova propriedade
}

// O componente é apenas uma função que recebe props e retorna JSX.
// Usamos a desestruturação ({ name, title, imageUrl, github }) para pegar as props diretamente.
function ProfileCard({ name, title, imageUrl, github }: ProfileCardProps) {
  // O retorno parece HTML, mas é JSX. É declarativo.
  // Estamos descrevendo O QUE queremos na tela, não COMO criar.
  return (
    <div className="card">
      <img src={imageUrl} alt={`Foto de ${name}`} className="card-img" />
      <h2>{name}</h2>
      <p>{title}</p>

      {/* 👉 Aqui o link do GitHub */}
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  );
}

export default ProfileCard;
