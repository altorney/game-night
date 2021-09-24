import { connect } from 'react-redux';
import GameCard from 'components/game-card/game-card';

function Maintenance(props) {
  console.log('into maint', props);
  return (
    <div>
      maintenance
      <div className="xxcontent">
        {props.games.map((game) => {
          return <div key={game.id}>{game.title} </div>;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
  };
};

export default connect(mapStateToProps)(Maintenance);
