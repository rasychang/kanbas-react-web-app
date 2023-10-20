function FindFunction(){
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2', 'string3'];
    function findNumberFour(a) {
        return a === 4;
      }
    
      function findStringThree(a) {
        return a === 'string3';
      }

    const four = numberArray1.find(findNumberFour);
    console.log(four);
    const string3 = stringArray1.find(findStringThree);
    console.log(string3);

    return(
        <div>
            <h3>Find function</h3>
            four = { four } <br />
            string3 = { string3 } <br />
        </div>

    );
}
export default FindFunction;