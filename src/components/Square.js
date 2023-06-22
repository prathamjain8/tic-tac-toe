export default function Square(props)   //the export keyword makes it accessible outside the file
{
    return (
        <button type="button" style={{width: '10vh',height:'10vh'}} className="btn btn-outline-success" onClick={props.onSquareClick}>{props.value}</button>
    );
}