/**
 * 创建web worker 进行文件校验计算hash值和文件后缀--用于切片上传（大文件上传如视频上传-备用）
 * @param e
 */
self.onmessage = (e) => {
  //webWorker中引入其他文件
  self.importScripts('/scripts/hash/spark-md5.min.js');
  //获取传入的文件对象
  const { file } = e.data;
  //创建spark对象
  const spark = new self.SparkMD5.ArrayBuffer();
  // 获取文件名并分离出文件后缀
  const fileName = file.name;
  const fileExtension = fileName.split('.').pop();
  //将文件对象转为blob流
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  //完成后计算文件hash名和后缀
  reader.onload = (e) => {
    spark.append(e.target.result);
    self.postMessage({
      extension: fileExtension,
      hash: spark.end(),
    });
  };
};
