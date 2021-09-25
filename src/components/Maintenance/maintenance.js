import { connect } from 'react-redux';
import { addGame } from '../../actions/index';
import { deleteGame } from '../../actions/index';

function Maintenance(props) {
  function handleAddClick() {
    let newId = 1;
    if (props.games.length > 0) {
      newId = props.games[props.games.length - 1].id + 1;
    }
    props.addGame([{ id: newId, title: newGame.value }]);
    newGame.value = '';
  }

  function handleDeleteClick(id) {
    props.deleteGame(id);
  }
  let newGame = null;

  return (
    <div>
      maintenance
      {props.loading && '...loading'}
      <div className="xxcontent">
        {props.games.map((game) => {
          return (
            <div key={game.id}>
              {game.title}-{game.id}
              <button onClick={() => handleDeleteClick(game.id)}>Delete game</button>
            </div>
          );
        })}
      </div>
      <input type="text" id="new-game" ref={(el) => (newGame = el)} />
      <button onClick={handleAddClick}>Add new game</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addGame: (game) => dispatch(addGame(game)),
    deleteGame: (id) => dispatch(deleteGame(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Maintenance);
