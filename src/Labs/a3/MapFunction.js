function MapFunction(){
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a) => {
        return a * a;
    }
    const cube = (a) => {
        return a * a * a;
    }
    
    const squares = numberArray1.map(square);
    console.log(squares);
    const cubes = numberArray1.map(cube);
    console.log(cubes);
    return(
        <div>
            <h3>Map</h3>
            squares = {squares}<br/>
            cubes = {cubes}<br/>
        </div>
    );
}
export default MapFunction;