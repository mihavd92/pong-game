
import spaceKey from "./../assets/space-key.png";
import upKey from "./../assets/up-key.png";
import downKey from "./../assets/down-key.png";

function Instructions() {
    return (
        <div>
            <h1>Pong Game</h1>
            <div className="info-inner">
                <h2>Instructions:</h2>
                <p className="about-pong">
                    Pong is one of the first computer games that ever created, this simple "tennis like" game features two paddles and a ball, the goal is to defeat your opponent by being the first one to gain10 point, a player gets a point once the opponent misses a ball. The game can be played with two human players, or one player against a computer controlled paddle. The game was originally developed by Allan Alcorn and released in 1972 by Atari corporations.
                </p>
                <div className="info-keys">
                    <h3 className="align-center">Keyboard settings:</h3>
                    <div className="keys-inner">
                        <div className="keys-item">
                            <img className="keys-icons" src={spaceKey} alt=""/> - Play/Pause
                        </div>
                        <div className="keys-item">
                            <img className="keys-icons" src={upKey} alt=""/> and
                            <img className="keys-icons" src={downKey} alt=""/> to move
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructions;
