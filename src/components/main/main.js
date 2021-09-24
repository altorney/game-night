import GameCard from 'components/game-card/game-card';
import './main.css';
import { connect } from 'react-redux';

function Content(props) {
  console.log('into content', props);
  return (
    <div className="content">
      {props.games.map((game) => {
        return <GameCard key={game.id} game={game} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
  };
};

export default connect(mapStateToProps)(Content);

// to dispath https://www.youtube.com/watch?v=40pWMVMnftc
