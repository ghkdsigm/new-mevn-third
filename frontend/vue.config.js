module.exports = { 
    devServer: { //① api 요청이 있을때 어디에서 처리할지를 설정
      proxy: { 
        '/movies': { 
        target: 'http://localhost:3000/movies',
        changeOrigin: true,
        pathRewrite: {
            '^/movies': ''
        }
        } 
      } 
    },
    outputDir: '../backend/public',  //② 배포 파일의 위치를 지정
  }