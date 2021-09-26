import './game-card.css';
import { connect } from 'react-redux';
import { selectGame } from 'actions';

function GameCard(props) {
  let gameCard = null;

  function handleClick(id) {
    gameCard.innerHTML = props.game.title;
    props.selectGame(id);
  }

  let title = props.game.selected ? props.game.title : '?';

  return (
    <div className="card-wrapper" onClick={() => handleClick(props.game.id)}>
      <div className="game-card" ref={(el) => (gameCard = el)}>
        {title}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectGame: (id) => dispatch(selectGame(id)),
  };
};

export default connect(null, mapDispatchToProps)(GameCard);
