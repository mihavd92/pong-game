

const BACKGROUND = 0;
const PLAYER = 1;
const BALL = 2;
export {
    BACKGROUND,
    PLAYER,
    BALL
}

const backgroundStyle = {
    height: '35px',
    width: '35px',
    borderStyle: 'solid',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: '2px'
}

const playerStyle = {
    height: '35px',
    width: '35px',
    borderStyle: 'solid',
    justifyContent: 'center',
    backgroundColor: 'blue',
    color: '#fff'
}

const ballStyle = {
    height: '35px',
    width: '35px',
    display: 'block',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    borderRadius: '100%',
    color: '#fff',
    zIndex: '10',
    position: 'relative'
}

const getStyle = (val) => {
    if (val === BACKGROUND) {
        return {};
    } if (val === PLAYER) {
        return playerStyle;
    } else {
        return ballStyle;
    }
}

const Box = (props) => (
    <div style={backgroundStyle}>
        <div style={getStyle(props.name)} />
    </div>
)

export default Box;
