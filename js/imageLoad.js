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
function imageLoad(imageSrc) {
    //图片要防止的位置
    var address = document.getElementsByClassName("imageLoad")[0];

    //创建一个加载图替代没加载好的图
    var imageLoading = document.createElement("div");
    imageLoading.className = "imageLoading";
    var loadingImage = document.createElement("img");
    loadingImage.src = "../images/loading.png";
    loadingImage.alt = "loading";
    imageLoading.appendChild(loadingImage);
    address.appendChild(imageLoading);

    //图片加载
    var image = new Image();
    image.src = imageSrc;
    image.onload = function() {
        console.log("images loaded!");
        //这是为了本地测试,实际使用可移除setTimeout
        setTimeout(function () {
            imageLoading.style.display = "none";
            address.appendChild(image);
        }, 2000);
    }
};