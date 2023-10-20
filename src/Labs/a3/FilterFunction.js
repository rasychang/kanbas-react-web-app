function FilterFunction(){
    let numberArray1 = [1, 2, 4, 5, 6];

    function isGreaterThanTwo(a) {
        return a > 2;
    }

    function isEven(a) {
        return a % 2 === 0;
    }

    function isOdd(a) {
        return a % 2 !== 0;
    }

    const numbersGreaterThan2 = numberArray1.filter(isGreaterThanTwo);
    console.log(numbersGreaterThan2);
    const evenNumbers = numberArray1.filter(isEven);
    console.log(evenNumbers);
    const oddNumbers = numberArray1.filter(isOdd);
    console.log(oddNumbers);

    return (
        <div>
            <h3>Filter function</h3>
            numbersGreaterThan2 = {numbersGreaterThan2} <br />
            evenNumbers = {evenNumbers} <br />
            oddNumbers = {oddNumbers} <br />
        </div>
    );
}
export default FilterFunction;