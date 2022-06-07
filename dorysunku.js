function copyImageToCanvas() {
    var image = document.querySelector("ing");
    var canvas = document.querySelector("canvas");

    var ctx = canvas.getContext("2d");
    ctx.drawImage(
        image 0, 0
        32, 32
        50, 50

    )
}