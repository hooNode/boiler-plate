# boiler-plate
MERN(feat.Redux)를 사용한 sign boiler-plate

## 사용 방법

### 1. npm install

```
$npm install
```
### 2. mongoURI 연결하기

server/config 안에 dev.js를 입력하고

mongoDB에서 받은 URI를 입력한다

```js
module.exports = {
  mongoURI:
    "secretKey",
};

```

### 3. npm run dev

```
$npm run dev
```
concurrently를 활용한 백엔드와 프론트 서버 동시 실행

## 기능

https://user-images.githubusercontent.com/56389950/165181932-7d7512ce-d197-4b3c-8a86-17629c36fb94.mov

### 0. Redux
리덕스를 사용해 현재 로그인 정보를 store에 담아서 관리
persist를 통해 새로고침 시 store 데이터가 없어지는 문제 

### 1. 로그인

### 2. 회원가입

### 3. 해더 

로그인 시 logout 버튼 활성화
비로그인 시 login 버튼, signUp 버튼 활성화

### 4. 푸터




