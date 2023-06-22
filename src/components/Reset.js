export default function Reset(props)   //the export keyword makes it accessible outside the file
{
    return (
        <button type="button" onClick={props.onResetStates}className="btn btn-outline-primary">New Game</button>
    );
}