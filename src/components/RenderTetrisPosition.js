import '../styles/RenderTetrisPosition.css'

const RenderTetrisPosition = ({positionBool}) => {

    return (
        <div className="Bool">
        {positionBool? <div className="Booltrue" >{positionBool}</div>: <div className="Boolfalse" >{positionBool} </div>}
        </div>
        
    );
};

export default RenderTetrisPosition;