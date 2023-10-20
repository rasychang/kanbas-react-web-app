function ForLoops(){
    let stringArray1 = ['string1', 'string3'];
    console.log(stringArray1);
    let stringArray2 = [];
    console.log(stringArray2);
    for (let i = 0;
         i < stringArray1.length;
         i++) {
        const string1 = stringArray1[i];
        console.log(stringArray1);
        stringArray2.push(string1.toUpperCase());
        console.log(stringArray2);
    }
    return(
        <div>
            <h2>Looping through arrays</h2>
            stringArray2 = {stringArray2}<br/>
        </div>
    );
}
export default ForLoops;