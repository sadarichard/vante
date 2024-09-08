
document.getElementById('themeColor').addEventListener('change', function() {
    const theme = this.value;
    switch (theme) {
        case 'light':
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
            break;
        case 'dark':
            document.body.style.backgroundColor = '#000000';
            document.body.style.color = '#ffffff';
            break;
        case 'blue':
            document.body.style.backgroundColor = '#add8e6';
            document.body.style.color = '#00008b';
            break;
        default:
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
    }
});
