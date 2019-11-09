document.getElementById('select').addEventListener('change', function () {
    var style = this.value == 0 ? 'block' : 'none';
    document.getElementById('form-icon-one').style.display = style;
});
document.getElementById('select').addEventListener('change', function () {
    var style = this.value == 1 ? 'block' : 'none';
    document.getElementById('form-icon-two').style.display = style;
});