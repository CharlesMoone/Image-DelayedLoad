/**
 * Created by apple on 16/3/10.
 */
/*
* 图片延时加载
*
* imageSrc : 图片实际的地址,这里是相对于本js的地址
* address  : 放置的位置,可以理解为$(x).append()中x的位置,这里需要的dom对象
* imageLoading  : 加载图,这里是关闭其显示
*
* */
function imageLoad(imageSrc, address, imageLoading) {
    var image = new Image();
    image.src = imageSrc;
    image.onload = function() {
        //这是为了本地测试,实际使用可移除setTimeout
        setTimeout(function () {
            imageLoading.style.display = "none";
            console.log("images loaded!");
            address.appendChild(image);
        }, 2000);
    }
};