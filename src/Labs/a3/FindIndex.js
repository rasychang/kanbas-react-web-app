function FindIndex(){
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];
    function findNumberFour(a) {
        return a === 4;
      }
    
      function findStringThree(a) {
        return a === 'string3';
      }

    const fourIndex = numberArray1.findIndex(findNumberFour);
    console.log(fourIndex);
    const string3Index = stringArray1.findIndex(findStringThree);
    console.log(string3Index);

    return(
        <div>
            <h3>FindIndex function</h3>
            fourIndex = { fourIndex } <br />
            string3Index = { string3Index } <br />
        </div>
    );
}
export default FindIndex;