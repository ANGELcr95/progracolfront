import useAuth from '../Auth/useAuth';
import RenderTetrisPosition from './RenderTetrisPosition'
import '../styles/Tetris.css'

const Tetris = ({name, postionsWinner}) => {

    const renderTetrisPosition = postionsWinner.map((positionBool,index) => <RenderTetrisPosition key={index} positionBool={positionBool}/>)
    const auth = useAuth()

    return (
        <div className="Tetris" style={{backgroundColor: auth.ligth}}>
            <h3>{name}</h3>
            <div className="TetrisPosition">
                {renderTetrisPosition}
            </div>
        </div>
    );
};

export default Tetris;