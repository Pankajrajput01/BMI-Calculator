const a = document.querySelector("form");

console.log(a);



a.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hello; It's working fine");

    const heightValue = document.querySelector("#h-id").value;
    const weightValue = document.querySelector("#w-id").value;
    const results = document.querySelector(".result");
    const results2 = document.querySelector(".result2");

    // Check if both fields are blank before parsing them to numbers
    if (heightValue === '' && weightValue === '') {
        results.innerHTML = "Please enter valid height and weight";
        results2.innerHTML = " ";
    } else {
        const b = parseInt(heightValue);
        const c = parseInt(weightValue);

        if(heightValue == '' || heightValue < 0 || isNaN(heightValue)){
            results.innerHTML = "Please enter Valid height"
        }else if(weightValue== '' || weightValue< 0 || isNaN(weightValue)){
            results.innerHTML = "please enter Valid Weight";
        }else{
        const cal = (c/((b*b)/10000)).toFixed(2)
        console.log(cal);
        results.innerHTML = `<span>${cal}</span>`
        Bresult(cal);
        // if (cal > 30) {
        //     results2.innerHTML = "🤦‍♂️ Obesity !! 😮";
        // } else if (cal >= 25 && cal <= 29.9) {
        //     results2.innerHTML = "🤷‍♂️ Overweight !! 😥";
        // } else if (cal >= 18.5 && cal <= 24.9) {
        //     results2.innerHTML = "😉 Normal Weight !! 😃";
        // } else {
        //     results2.innerHTML = "😅 Underweight !! 😅 ";
        // }
        }
    }
})


const Bresult = function(cal){
    
    const results2 = document.querySelector(".result2");

    if (cal > 30) {
        results2.innerHTML = "🤦‍♂️ Obesity !! 😮";
    } else if (cal >= 25 && cal <= 29.9) {
        results2.innerHTML = "🤷‍♂️ Overweight !! 😥";
    } else if (cal >= 18.5 && cal <= 24.9) {
        results2.innerHTML = "😉 Normal Weight !! 😃";
    } else {
        results2.innerHTML = "😅 Underweight !! 😅 ";
    }
} 