import './game-card.css';

function GameCard(props) {
  const title = props.game.selected ? props.game.title : '?';
  return (
    <div className="card-wrapper">
      <div className="game-card">{title}</div>
    </div>
  );
}

export default GameCard;
