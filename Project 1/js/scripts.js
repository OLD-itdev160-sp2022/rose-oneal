var price = 299.99,
    studentDiscount = .20,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById("price"),
    studentPriceEl = document.getElementById("smallDiscount");

    priceEl.textContent = price.toFixed(2);
    studentPriceEl.textContent = studentPrice.toFixed(2);

    var user = 'Gamer';
    var salutation = 'Hey there, ';
    var greeting = salutation + user + '! Here are our most recent reviews!';
    var greetingEl = document.getElementById('greeting');
    
    greetingEl.textContent = greeting;


