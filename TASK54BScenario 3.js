
document.getElementById('weatherSelector').addEventListener('change', function() {
    const weather = this.value;
    let message = '';

    switch (weather) {
        case 'sunny':
            message = "It's a bright and sunny day!";
            break;
        case 'rainy':
            message = "Don't forget your umbrella. It's raining!";
            break;
        case 'snowy':
            message = "It's snowing! Stay warm!";
            break;
        case 'cloudy':
            message = 'It\'s cloudy outside.';
            break;
        default:
            message = '';
    }

    document.getElementById('weatherMessage').innerText = message;
});

