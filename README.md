# rn_practice

## React Native 연습 저장소입니다.

이 저장소는 React Native를 공부하며 실습한 코드와 예제를 정리한 공간입니다.  
React Native 학습 내용은 `rn-practice` 폴더에 기록할 예정입니다.

## 왜 이 강의를 듣게 되었나요?

웹 프론트엔드 개발을 어느 정도 익히고, 사이드 프로젝트를 하면서 모바일 앱 개발에도 도전해보고 싶다는 생각이 들었습니다.
React와 비슷한 방식으로 앱을 만들 수 있는 React Native가 적합하다고 판단했고, 기초부터 차근차근 배우며 실습을 통해 익혀보기로 했습니다. 

- 웹과 앱 모두 개발할 수 있는 역량을 키우고 싶어서
- 포트폴리오에 하나의 앱 프로젝트를 추가하고 싶어서
- 실무에서 모바일 대응력도 높이고 싶어서

## 목적

- React Native 기초부터 실전까지 학습 내용 기록
- 컴포넌트, 스타일링, API, 배포 등 주요 기술 실습
- 향후 프로젝트나 포트폴리오를 위한 기반 마련

## px 단위 써도 되는 것 / 안 되는 것

✅ React Native에서 써도 되는 것
width, height	                   숫자(dp)                width: 100
padding, margin, borderRadius 등    숫자(dp)	            padding: 20
fontSize	                       숫자(dp)	               fontSize: 16
color, backgroundColor	           문자열(hex, rgba 등)	    color: '#fff'
fontWeight	                       문자열 또는 숫자	          'bold', '500'

❌ React Native에서 쓰면 안 되는 것
padding:  "20px"    "20px"은 문자열 → RN에서 무시됨 or 오류 발생
font-size: 16px;	이건 웹 CSS 문법 → RN은 JS 기반 스타일이므로 오류
:hover, :focus	    pseudo-selector는 RN에서 아예 지원 안 됨
em, %, rem	        RN에서는 인식 불가. 숫자 단위만 지원됨
calc(100% - 50px)	계산식 사용 불가. 직접 계산해서 숫자로 넣어야 함
