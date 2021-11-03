import '../styles/room.code.scss'
import copyImg from '../asserts/images/copy.svg';


export function RoomCode(){
    return(
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #217645162566457</span>
        </button>
    )
}