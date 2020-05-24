## Middleware實作練習
利用node.js和express所做的簡易request-response紀錄，可記錄以下資訊
* 進入網頁日期及時間
* 請求的HTTP方法及Path
* 伺服器的回應時間(單位：微秒)

## 環境建置與需求
* node.js v10.15.0 -執行環境
* express v4.17.1 -框架

## 安裝與使用
#### 下載專案
    git clone https://github.com/wanglala5131/middleware-timeStamp.git
#### 安裝package
    npm install
#### 使用nodemon啟動伺服器
    npm run dev
#### 或正常啟動
    npm start