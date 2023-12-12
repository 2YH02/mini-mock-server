# 야놀자 미니프로젝트 목 서버 레포
## 사용법
1. 새로운 폴더 하나를 만든다.
2. 코드편집기로 만든 폴더를 연다.
3. 해당 레포지토리를 연결한다.
```
git remote add origin https://github.com/2YH02/mini-mock-server.git
```
4. 코드를 로컬에 가져온 후 패키지를 내려받는다.
```javascript
1. git pull origin main
2. npm install
```
5. 실행한다.
```
npm run watch
```
6. 실행된 상태로 끄지 말고 그대로 둔다.
7. 프론트엔드 프로젝트 파일을 열고 vite.config.ts 프록시 서버 주소를 아래와 같이 바꾼다.
```javascript
target: "http://localhost:8123/api/v1"
```
8. 로컬에서 목 서버의 응답 데이터로 프론트엔드 개발을 즐긴다.
### 끝~ 
