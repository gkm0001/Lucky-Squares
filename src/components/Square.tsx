

function Square(props: any): JSX.Element {
    const { value, disabled, onClick } = props;
    const backgroundColor = value ? 'red' : 'pink';

    return (
        <div 
            style={{
                width: '20px', 
                height: '20px', 
                border: '1px solid black', 
                backgroundColor,
                pointerEvents: disabled ? 'none' : 'auto',
                cursor: disabled ? 'not-allowed' : 'pointer'
            }}
            onClick={onClick}
        >
            {value}
        </div>
    );
}

export default Square;
