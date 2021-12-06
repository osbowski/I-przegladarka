const generateNumbers = (numOfNumbers, minNum, maxNum) => {
  const arr = [];
  for (let i = 0; i < numOfNumbers; i++) {
    const num = Math.floor(Math.random() * (maxNum - minNum +1) + minNum);
    arr.push(num);
  }
  return arr;
};

const separateNumbers = (arrOfNumbers) => {
  const oddArr = [];
  const evenArr = [];

  arrOfNumbers.map((num) => {
    if (num % 2 === 0) {
      evenArr.push(num);
    } else {
      oddArr.push(num);
    }
  });
  evenArr.sort((a, b) => a - b);
  oddArr.sort((a, b) => a - b);
  return {
      evenArr,
      oddArr
  }
};

const generateParagraphsInHTML = (arr, divClass) => {
    const divToAdd = document.querySelector(`.${divClass}`);
  arr.map((num) => {
    const p = document.createElement("p");
    p.innerText += num;
    divToAdd.appendChild(p);

  });
};

const resetDiv = (divClass) =>{
    const divsToReset = document.querySelectorAll(`.${divClass}`)
    divsToReset.forEach(div=>div.innerHTML="")
}

const onClick = ()=>{
    const numbers = generateNumbers(20, 1, 100);
    const arrays = separateNumbers(numbers);
    resetDiv('column')
    generateParagraphsInHTML(arrays.evenArr, 'column--even')
    generateParagraphsInHTML(arrays.oddArr, 'column--odd')
}

document.querySelector("button").addEventListener("click", onClick);
