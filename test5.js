// 1 Tapsyrma

function Ali(promptMessage) {
    let num;
    while (true) {
      const input = prompt(promptMessage);
      num = parseFloat(input);
      if (!isNaN(num)) {
        return num;
      }
      alert("Қате енгізу! ");
    }
  }

  function main() {
    alert("Қарапайым калькулятор");
  
    const num1 = Ali("Бірінші санды енгізіңіз");
    const num2 = Ali("Екінші санды енгізіңіз");
  
    alert(`Қосынды: ${num1 + num2}`);
    alert(`Айырма: ${num1 - num2}`);
    alert(`Көбейтінді: ${num1 * num2}`);
    
    if (num2 !== 0) {
      alert(`Бөлінді: ${num1 / num2}`);
    } else {
      alert("Қате: Нөлге бөлу мүмкін емес!");
    }
  }
  main();
  
//   2 Tapsyrma

function getNumber(promptMessage) {
    let num;
    while (true) {
      const input = prompt(promptMessage);
      num = parseFloat(input);
      if (!isNaN(num)) {
        return num;
      }
      alert("Қате енгізу! Дұрыс сан енгізіңіз.");
    }
  }
  
  function calculateDiscountedPrice(price, quantity) {
    const totalPrice = price * quantity;
    let Zhenildik = 0;
  
    if (totalPrice > 20000) {
      Zhenildik = 0.30;
    } else if (totalPrice > 10000) {
      Zhenildik = 0.20;
    } else if (totalPrice > 5000) {
      Zhenildik = 0.10;
    }
  
    const discountedPrice = totalPrice * (1 - Zhenildik);
    return { totalPrice, Zhenildik, discountedPrice };
  }
  
  function main() {
    alert("Супермаркеттің жеңілдіктерін есептеу");
  
    const price = getNumber("Заттың бағасын енгізіңіз:");
    const quantity = getNumber("Қанша зат сатып алғыңыз келеді:");
  
    const { totalPrice, Zhenildik, discountedPrice } = calculateDiscountedPrice(price, quantity);
  
    alert(`Жалпы құны: ${totalPrice} KZT`);
    if (Zhenildik > 0) {
      alert(`Жеңілдік: ${Zhenildik * 100}%`);
    } else {
      alert("Жеңілдік жоқ.");
    }
    alert(`Жеңілдікпен соңғы төлем: ${discountedPrice.toFixed(2)} KZT`);
  }
  
  main();

// 3 Tapsyrma

function lukcygame(){
    
}