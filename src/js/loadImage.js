/**
 * Created by Administrator on 2018/5/7.
 */
/*
* 思路：
* 1、遍历imgUrl,动态创建img对象，然后指定其src为遍历的地址，以加载这些图片资源
* 2、param{imgUrl:Object} 按照key、value的形式存储所有要加载的图片的地址
*    param{fn:Function} 当所有图像加载完毕之后，就会被调用，同时会把所有图像资源传递过去
* */
function loadImage(imgUrl,fn){
    var imgObj={};
    var tempImg,loaded= 0,imgLenght=0;
    for(var key in imgUrl){
        imgLenght++;  //每循环一次，要加载图片的总数加1；
        tempImg=new Image();
        tempImg.onload=function(){
//                统计已经加载完毕的图像
            loaded++;
//                所有的图片都加载完毕的资源传给回调函数供其使用
            if(loaded>=imgLenght){
                fn(imgObj);
            }
        }
        tempImg.src=imgUrl[key];
        imgObj[key]=tempImg;
    }
}
