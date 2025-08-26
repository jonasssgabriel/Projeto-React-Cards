// Definimos a "forma" dos dados que este componente espera receber.
// Isso é graças ao TypeScript e nos ajuda a evitar erros.
interface ProfileCardProps {
    key: number;
    imageUrl: string;
    name: string;
    title: string;
  }
  
  // O componente é apenas uma função que recebe props e retorna JSX.
  // Usamos a desestruturação ({ name, title, imageUrl }) para pegar as props diretamente.
  function ProfileCard({ name, title, imageUrl }: ProfileCardProps) {
    // O retorno parece HTML, mas é JSX. É declarativo.
    // Estamos descrevendo O QUE queremos na tela, não COMO criar.
    return (
      <div className="card">
        <img src={imageUrl} alt={`Foto de ${name}`} className="card-img" />
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    );
  }
  
  export default ProfileCard;