
## 📝 목차

1. [**프로젝트 소개**](#1)
2. [**기술 스택**](#2)
3. [**주요 기능**](#3)
4. [**화면 구성**](#4)
5. [**팀 소개**](#5)
6. [**폴더 구조**](#6)
7. [**회고 및 리팩토링**](#7)
<br/>

<div id="1"></div>

## 📌 프로젝트 소개

|                                                        로고                                                        |                                                                                                        설명                                                                                                        |
| :----------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/so2zy/so2zy_FE/assets/39702832/f6a30fef-93c6-4459-8260-6954ddd7a592" width="100px" /> | **AROOM**은 호텔, 펜션, 모텔을 비롯한 전국의 숙소에 대한 정보를 제공하는 서비스입니다.<br/> 사용자의 숙소 조회/장바구니/예약 등의 기능을 지원합니다.<br/>[**🔗 서비스 바로가기 Click !**](https://candid-horse-912de6.netlify.app/) 👈 |

- **깃허브 레포**
  - [미니 2조 FE](https://github.com/so2zy/so2zy_FE)
  - [미니 2조 BE](https://github.com/so2zy/so2zy_BE)
- **테스트 계정**
  - 아이디 : test@test.com
  - 비밀번호 : test123
   
<br/>
<div id="2"></div>

## 📌 기술 스택

### Environment

<div style="display: flex;">
  <img src="https://img.shields.io/badge/VSC-007ACC?style=for-the-badge&logo=visual studio&logoColor=white" />
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
</div>

### FrontEnd

<div style="display: flex;">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/react-%2320232a?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white">
  <img src="https://img.shields.io/badge/Recoil-oran?style=for-the-badge&logo=Recoil" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />

  <img src="https://img.shields.io/badge/msw-7D00FF?style=for-the-badge&logo=Stellar&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

</div>

### BackEnd

<div style="display: flex;">
  <img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" />
  <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
<img src="https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white"/>
<img src="https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white"/>
</div>

### Others

<div style="display: flex;">
  <img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white" />
  <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white" />
  <img src="https://img.shields.io/badge/figma-%23F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
    <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" />
      <img src="https://img.shields.io/badge/craco-168363?style=for-the-badge&logo=tether&logoColor=white"/>
</div>
<br/>

<div id="3"></div>

## 📌 주요 기능

| 기능                          | 내용                                                                                                                                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 로그인/회원가입               | 회원가입 및 로그인한 유저의 정보를 통해 필요한 페이지 및 기능에 접근이 가능합니다.                                                                                                    |
| 메인 페이지                   | 지역/검색 페이지 연결이 가능하고, 판매량/찜 많은 순 숙소를 캐러셀 형태로 볼 수 있습니다. 전체 숙소를 무한스크롤로 조회 가능합니다.                                                    |
| 지역 페이지                   | 기본 필터링(날짜/인원수/가격)과 더불어 지역 필터링과 정렬(가격/판매량)을 할 수 있으며, 무한스크롤로 해당 숙소 조회 가능합니다. 해당 지역의 호텔 위치/정보를 지도에서 조회 가능합니다. |
| 검색 페이지                   | 기본 필터링(날짜/인원수/가격)과 더불어 검색 필터링과 정렬(가격/판매량)을 할 수 있으며, 무한스크롤로 해당 숙소 조회 가능합니다.                                                        |
| 상세 페이지                   | 로그인한 유저가 숙소의 상세 정보를 확인할 수 있습니다. 해당 숙소의 위치를 지도에서 조회 가능하며, 해당 숙소의 객실 정보 조회/찜/예약/장바구니 기능을 지원합니다. 인원수와 날짜로 필터링되어 해당되는 객실 조회가 가능합니다.                                                                 |
| 장바구니                      | 로그인한 유저가 장바구니에 담은 객실들의 정보 조회가 가능하며, 삭제 및 예약 기능을 지원합니다.                                                                                        |
| 예약 | 로그인한 유저가 예약하고자 하는 객실들의 예약(결제)가 가능합니다.                                                                                                                     |
| 예약확인 | 결제까지 완료하게 되면 주문 번호와 예약번호를 확인 할 수 있습니다.                                                                                                                    |

<br/>
<div id="4"></div>

## 📌 화면 구성
|                           회원가입/로그인                   |                            메인 페이지                                        |         검색/지역 페이지                            |
| :------------------------------------------------------| :---------------------------------------------------------------: |:------------------------------------------------------------: |
|![login](https://github.com/so2zy/so2zy_FE/assets/55376275/6911c8c6-8e6d-4f62-a10d-0d93fcdecd40)|![메인](https://github.com/so2zy/so2zy_FE/assets/55376275/93984f4b-961e-4be3-b110-c13033be7f31)|![KakaoTalk_20231201_035838151](https://github.com/KDT1-FE/Y_FE_Mini-Project/assets/39702832/2d1dfaef-b9c3-48e2-b15c-46a044569656)|




|                           상세/장바구니/예약 페이지                            |                                              상세/찜/장바구니/예약 페이지                                         |
| :-------------------------------------------------------------------------------------------------------| :-------------------------------------------------------------------------------------------------------: |
|![KakaoTalk_20231201_034241583](https://github.com/KDT1-FE/Y_FE_Mini-Project/assets/39702832/a603dbb5-33c0-45d9-999f-609079167b2c)|![zzim](https://github.com/KDT1-FE/Y_FE_Mini-Project/assets/39702832/2dabcc65-f0a4-4a0d-a3b4-cbb00f39741a)|


<br/>
<div id="5"></div>

## 📌 팀 소개

<table>
  <tr>
    <td align="center" width="150px">
      <a href="https://github.com/seungjun222" target="_blank">
        <img src="https://github.com/KDT1-FE/Y_FE_Toy1/assets/39702832/bae37c66-7793-4ab8-a4e9-d2230d9adb9c" alt="어승준 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/minseokiim" target="_blank">
        <img src="https://github.com/so2zy/so2zy_FE/assets/39702832/f19ff395-e495-460d-8dc4-162a129637ca" alt="김민서 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/jongsujin" target="_blank">
        <img src="https://github.com/so2zy/so2zy_FE/assets/39702832/9923c6cc-50f9-404f-9b9f-cbcd6e895398" alt="진종수 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/chaeminseok" target="_blank">
        <img src="https://github.com/so2zy/so2zy_FE/assets/39702832/d201a2b1-0c9f-4cc1-a2eb-8a5f07191189" alt="채민석 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/seungjun222" target="_blank">
        어승준<br />
                팀장 (FE)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/minseokiim" target="_blank">
        김민서<br />
                팀원 (FE)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jongsujin" target="_blank">
        진종수<br />
                팀원 (FE)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/chaeminseok" target="_blank">
        채민석<br />
                팀원 (FE)
      </a>
    </td>
  </tr>
</table>

|  이름  |     역할     | <div align="center">개발 내용</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :----: | :----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -    |     공통     | - 피그마 디자인<br />- 레이아웃 구현<br />- msw로 mock 데이터 테스트<br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 어승준 | FE<br />팀장 | - 검색/지역 페이지<br />&nbsp;&nbsp;&nbsp;&nbsp;- 필터링 (검색/지역/날짜/인원수/가격)<br />&nbsp;&nbsp;&nbsp;&nbsp;- 정렬 (가격/판매량)<br />&nbsp;&nbsp;&nbsp;&nbsp;- 지도 (지역별 중심좌표 적용 + 숙소 마커/오버레이 표시)<br />&nbsp;&nbsp;&nbsp;&nbsp;- 무한스크롤<br />&nbsp;&nbsp;&nbsp;&nbsp;- 지역 뒤로가기 (선택지역 기록 세션스토리지 배열)<br />- 기타<br />&nbsp;&nbsp;&nbsp;&nbsp;- craco로 path alias 설정<br />&nbsp;&nbsp;&nbsp;&nbsp;- 프로젝트 폴더 구조 세팅<br />&nbsp;&nbsp;&nbsp;&nbsp;- 로딩 lottie<br />&nbsp;&nbsp;&nbsp;&nbsp;- README 작성<br /> |
| 김민서 | FE<br />팀원 | - 상세 페이지<br />&nbsp;&nbsp;&nbsp;&nbsp;- 숙소, 객실 정보 조회/ 필터링 (인원수/날짜/재고), 지도(숙소 위치 중심좌표/ 마커) <br />&nbsp;&nbsp;&nbsp;&nbsp;- 예약/장바구니/찜 요청<br />- 예약/예약확인 페이지<br />&nbsp;&nbsp;&nbsp;&nbsp;- 예약/결제/예약확인 기능<br />- 장바구니 페이지<br />&nbsp;&nbsp;&nbsp;&nbsp;- 마크업<br />- 기타<br />&nbsp;&nbsp;&nbsp;&nbsp;- 로딩/404/needLogin/카드 컴포넌트 <br />&nbsp;&nbsp;&nbsp;&nbsp;- theme/globalStyle 설정<br />&nbsp;&nbsp;&nbsp;&nbsp;- README<br />                                                                                                               |
| 진종수 | FE<br />팀원 | - 메인 페이지<br />&nbsp;&nbsp;&nbsp;&nbsp;- 캐러셀<br />&nbsp;&nbsp;&nbsp;&nbsp;- 무한스크롤<br />&nbsp;&nbsp;&nbsp;&nbsp;- 판매량/찜 많은 순/모든 숙소<br />&nbsp;&nbsp;&nbsp;&nbsp;- 검색/지역 페이지 연결<br />- 예약 페이지<br />&nbsp;&nbsp;&nbsp;&nbsp;- 마크업<br />- 장바구니 페이지<br />&nbsp;&nbsp;&nbsp;&nbsp;- 조회, 데이터 예약페이지로 전달<br />&nbsp;&nbsp;&nbsp;&nbsp; - 삭제                                                                                                                                                                                                          |
| 채민석 | FE<br />팀원 | - 회원가입/로그인/로그아웃<br />&nbsp;&nbsp;&nbsp;&nbsp;- JWT (AccessToken/RefreshToken)<br />&nbsp;&nbsp;&nbsp;&nbsp;- 유저 정보 유효성검사<br />&nbsp;&nbsp;&nbsp;&nbsp;- 유저 정보 및 토큰 전역 관리<br />- 헤더/푸터<br />&nbsp;&nbsp;&nbsp;&nbsp;- 로고, 기능구현<br />                                                                                                                                                                                                                                                                                                |
<br/>
<div id="6"></div>

## 📌 폴더 구조

<details>
<summary>폴더 구조 보기</summary>

```
📦SO2ZY_FE
┣─ src
┃  ┣─ App.css
┃  ┣─ App.tsx
┃  ┣─ assets
┃  ┃  ┣─ fonts
┃  ┃  ┃  ┗─ GmarketSansTTFLight.ttf
┃  ┃  ┗─ images
┃  ┃     ┣─ check.svg
┃  ┃     ┣─ chevron-down.svg
┃  ┃     ┣─ footer_github_black_icon.png
┃  ┃     ┣─ home.png
┃  ┃     ┣─ hotelDefaultImg.png
┃  ┃     ┣─ hotelDefaultImg2.png
┃  ┃     ┣─ house.svg
┃  ┃     ┣─ mainLogo.svg
┃  ┃     ┣─ mainLogoThree.png
┃  ┃     ┣─ mainLogoTwo.svg
┃  ┃     ┣─ map.svg
┃  ┃     ┣─ shoppingBag.png
┃  ┃     ┣─ sort-down.svg
┃  ┃     ┗─ sort-up.svg
┃  ┣─ components
┃  ┃  ┣─ Calendar
┃  ┃  ┃  ┣─ Calendar.tsx
┃  ┃  ┃  ┗─ index.ts
┃  ┃  ┣─ common
┃  ┃  ┃  ┣─ Card
┃  ┃  ┃  ┃  ┣─ Card.tsx
┃  ┃  ┃  ┃  ┗─ index.ts
┃  ┃  ┃  ┣─ Footer
┃  ┃  ┃  ┃  ┣─ Footer.tsx
┃  ┃  ┃  ┃  ┗─ index.ts
┃  ┃  ┃  ┣─ Header
┃  ┃  ┃  ┃  ┣─ Header.tsx
┃  ┃  ┃  ┃  ┗─ index.ts
┃  ┃  ┃  ┣─ Item
┃  ┃  ┃  ┃  ┣─ index.ts
┃  ┃  ┃  ┃  ┗─ Item.tsx
┃  ┃  ┃  ┣─ Loading
┃  ┃  ┃  ┃  ┣─ index.ts
┃  ┃  ┃  ┃  ┗─ Loading.tsx
┃  ┃  ┃  ┣─ NotFound
┃  ┃  ┃  ┃  ┣─ index.ts
┃  ┃  ┃  ┃  ┗─ NotFound.tsx
┃  ┃  ┃  ┗─ ScrollToTop
┃  ┃  ┃     ┣─ index.ts
┃  ┃  ┃     ┗─ ScrollToTop.tsx
┃  ┃  ┣─ Modal
┃  ┃  ┃  ┣─ index.ts
┃  ┃  ┃  ┗─ Modal.tsx
┃  ┃  ┣─ PriceSlider
┃  ┃  ┃  ┣─ index.ts
┃  ┃  ┃  ┗─ PriceSlider.tsx
┃  ┃  ┣─ SelectPeople
┃  ┃  ┃  ┣─ index.ts
┃  ┃  ┃  ┗─ SelectPeople.tsx
┃  ┃  ┗─ SelectRegion
┃  ┃     ┣─ index.ts
┃  ┃     ┗─ SelectRegion.tsx
┃  ┣─ hooks
┃  ┃  ┗─ a.ts
┃  ┣─ index.css
┃  ┣─ index.tsx
┃  ┣─ jsonwebtoken-promisified.d.ts
┃  ┣─ pages
┃  ┃  ┣─ cart
┃  ┃  ┃  ┣─ Cart.page.tsx
┃  ┃  ┃  ┣─ components
┃  ┃  ┃  ┃  ┗─ getCart.ts
┃  ┃  ┃  ┗─ index.ts
┃  ┃  ┣─ confirm
┃  ┃  ┃  ┣─ Confirm.page.tsx
┃  ┃  ┃  ┗─ index.ts
┃  ┃  ┣─ main
┃  ┃  ┃  ┣─ components
┃  ┃  ┃  ┃  ┣─ getPlaces.ts
┃  ┃  ┃  ┃  ┣─ mainAllListContainer.tsx
┃  ┃  ┃  ┃  ┣─ mainAllListItem.tsx
┃  ┃  ┃  ┃  ┣─ mainListContainer.tsx
┃  ┃  ┃  ┃  ┣─ mainListItem.tsx
┃  ┃  ┃  ┃  ┣─ modalData.ts
┃  ┃  ┃  ┃  ┣─ regionModal.tsx
┃  ┃  ┃  ┃  ┗─ regionSelectBtn.tsx
┃  ┃  ┃  ┣─ index.ts
┃  ┃  ┃  ┗─ Main.page.tsx
┃  ┃  ┣─ placeDetail
┃  ┃  ┃  ┣─ components
┃  ┃  ┃  ┃  ┗─ MapModal.tsx
┃  ┃  ┃  ┣─ index.ts
┃  ┃  ┃  ┗─ PlaceDetail.page.tsx
┃  ┃  ┣─ regionList
┃  ┃  ┃  ┣─ components
┃  ┃  ┃  ┃  ┣─ index.ts
┃  ┃  ┃  ┃  ┗─ Map.tsx
┃  ┃  ┃  ┣─ index.ts
┃  ┃  ┃  ┗─ RegionList.page.tsx
┃  ┃  ┣─ reservation
┃  ┃  ┃  ┣─ index.ts
┃  ┃  ┃  ┗─ Reservation.page.tsx
┃  ┃  ┣─ searchList
┃  ┃  ┃  ┣─ index.ts
┃  ┃  ┃  ┗─ SearchList.page.tsx
┃  ┃  ┣─ signIn
┃  ┃  ┃  ┣─ components
┃  ┃  ┃  ┃  ┗─ SignIn.tsx
┃  ┃  ┃  ┗─ index.ts
┃  ┃  ┗─ signUp
┃  ┃     ┣─ components
┃  ┃     ┃  ┗─ SignUp.tsx
┃  ┃     ┗─ index.ts
┃  ┣─ react-app-env.d.ts
┃  ┣─ recoil
┃  ┃  ┣─ atom.ts
┃  ┃  ┣─ regionList.ts
┃  ┃  ┣─ regionModal.ts
┃  ┃  ┗─ searchList.ts
┃  ┣─ reportWebVitals.ts
┃  ┣─ styles
┃  ┃  ┣─ globalStyles.ts
┃  ┃  ┗─ theme.ts
┃  ┗─ utils
┃     ┣─ getData.ts
┃     ┣─ registerFunction.ts
┃     ┣─ textLength.ts
┃     ┣─ useFormatDate.ts
┃     ┗─ useIntersectionObserver.ts
┣─ tsconfig.json
┗─ tsconfig.paths.json

```

</details>

<br/>
<div id="7"></div>

## 📌 회고 및 리팩토링
### ✅ 개인 역량 회고
| 이름                          | 내용                                                                                                                                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 어승준               | 풀스택 팀프로젝트를 진행하면서 힘들었던 것을 다음 3가지였다. 1. API 명세 소통 방식, 2. 계속 바뀌는 BE 데이터 및 로직 구조, 3. BE 인원들의 아쉬운 커뮤니케이션. <br/> <br/> 우선, 노션에 API 명세를 하다보니, 오탈자 및 누락이 존재했었고, 최신 업데이트가 느렸고, BE 작업시간이 추가적으로 소요되는 단점이 있었다. 따라서 Swagger 또는 REST Docs를 권장했고, 이를 BE 측에서 받아들였으나, 적극적으로 사용하지 않은 것 같아 아쉬웠다. <br/> <br/> 다음으로, MSW를 도입하여 BE가 서버 배포하지 않아도 목 데이터를 통해 API 로직을 미리 짤 수 있었으나, 계속 BE 데이터 및 로직 구조가 바뀌어서 response가 어떤식으로 올 지 장담할 수 없었다. 따라서 FE 측에서 자의적으로 추측하여 MSW 틀을 고려했어야고, 나중에 실제로 받은 response와 차이가 있어서 수정을 거듭해야 했었다. <br/> <br/> 마지막으로는 BE 인원들의 아쉬운 커뮤니케이션이다. BE 인원들 중 서로 겹치는 DB 및 로직을 담당한 인원끼리 상이한 데이터 구조를 만들어 작업했었고, 이를 하나로 통합하느라 전체적인 작업시간이 증가했다. 또한, BE 측에서 데이터 구조 및 로직을 미리 FE에 공유하지 않았다. 미리 소통했다면 이에 맞춰 MSW를 더 디테일하게 구성할 수 있었을 텐데 그러지 못해, 추후 대처가 어려워졌다는 점에서도 아쉬웠다. <br/> <br/> 한편, 이번 풀스택 프로젝트를 통해 MSW, 커뮤니케이션, 이슈트래킹, react-query 등의 기술스택 및 능력을 얻을 수 있어서 좋았다. 그리고 위에 언급한 아쉬웠던 점들을 통해, 앞으로의 협업에서는 미리 잘 대처할 수 있으리라는 점에서도 만족한다.  |
| 김민서                  | xxx                   |
| 진종수                   | 이번 팀 프로젝트를 진행하면서 힘들었던 점은 첫 번째로 4명이 진행하다보니 우선순위를 나누어 몇 가지 페이지를 후순위로 빼고 그 뒤 먼저 끝나는 사람이 가져가기로 했는데 생각보다 지체되어 급하게 가져가다보니 조급함에 기능을 좀 더 짜임새있게 구성하지 못했던 것 같다. 결국 리팩토링때 거의 갈아 엎었는데 초반에 조금 더 역할 분배를 확실하게 했더라면 좀 더 짜임새 있게 구성할 수 있었을 것 같단 생각이 들었다. <br/> <br/> 또한 백엔드와의 협업이 생각보다 쉬운 일이 아님을 깨달았다. 각자 생각했던 바가 달랐고 이를 소통을 통해 조율해 나갔어야 했는데 서로 익숙치 않다보니 미흡한 점이 있었던 것 같다. 동일한 기능을 담당하는 백엔드에서 상이하게 데이터를 주는데 어떻게 목업 데이터를 만들어야 할 지에 대한 고민을 많이 했던 것 같다. 결국 이를 다시 수정하는데 작업 시간이 늘어났고 마감 전 날에 api를 받아서 작업 하다 보니 디테일한 측면에서 아쉬움을 남겼다. 이 부분 또한 소통이 원활했더라면 좀 더 수월하게 할 수 있었을 부분이란 생각이 들었고 다음 프로젝트에서는 소통을 더 자주 하고 이를 문서화를 통해 서로의 이해가 일치함을 계속 확인해야한다는 것을 느꼈다. </br> <br/> 이번 프로젝트를 통해 소통의 중요성과 그리고 무한 스크롤 등과 같은 리액트 쿼리에 대해 좀 더 이해하는 계기가 되어서 좋았으며 팀원분의 도움을 받아 MSW도 많이 배워갈 수 있던 좋은 프로젝트였다. 한 편으로 스스로가 아직 더 공부해야함을 느꼈고 다음 프로젝트에서는 테스트 코드와 디테일한 부분을 놓치지 않기 위해 남은 기간동안 열심히 공부해야함을 느꼈다. |
| xxx                   | xxx                                                    |

### ✅ 트러블 슈팅
| 이름                          | 내용                                                                                                                                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 어승준               |   1) 무한 스크롤 첫 렌더링 시 스크롤이 자동으로 가장 아래로 내려감으로서 1페이지가 아닌 2페이지를 반환하는 현상 ->  react-infinite-scroller 라이브러리의 initialLoad 프로퍼티를 false로 설정함으로서, 초기 렌더링 시 loadMore 함수를 트리거하지 않도록 하여 해결  <br/> 2) 뒤로가기 시, 해당 지역의 데이터가 refetching 되지 않는 이슈 -> 선택 지역을 세션스토리지로 배열 및 스트링 형태로 저장 후 react-query의 queryKey에 갱신 <br/> 하지만, useLocation을 통해 개선하는 것이 더욱 간편하고 효율적! <br/> |
| 김민서                  | xxx                   |
| 진종수                   |  1) 장바구니 체크박스로 필터링을 해줄 때 각각의 아이템들이 걸러지게 해야 했는데 같은 숙소에서 동일한 룸을 두 번 장바구니에 추가 했을 때 필터링이 안되는 현상 <br/>  roomCartId라는 고유의 값을 백엔드에게 받아와서 이를 필터링 해주었다.<br/>  2) 체크박스 선택/해제 기능 구현과 이를 예약 페이지로 데이터를 넘겨줘야 하는 부분<br/> 체크박스 선택/해제를 어렵지 않게 생각했지만 막상 백에서 데이터를 받아와서 이를 체크해서 데이터로 넘겨줘야 하는 과정에서 정말 많이 힘들었다.<br/>  이 과정에서 자바스크립트의 기본적인 문법들의 중요성을 깨달았고 map 함수부터 .find, .reduce, .forEach 등 기본기의 중요성을 깨달았다. |
| xxx                   | xxx                                                    |

### ✅ 리팩토링 추가/개선
| 이름                          | 내용                                                                                                                                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 어승준               |   무한 스크롤 첫 렌더링 시 스크롤 가장 아래로 내려가는 현상 해결 <br/>함수 모듈화, 컴포넌트화, 불필요한 코드 삭제를 통해 가독성, 유지보수 용이  |
| 김민서                  | xxx                   |
| 진종수                  | post , delete 관련 api 호출 useMutation으로 코드 개선<br/> 장바구니에서 아이템 클릭 시 삭제 기능 추가 |
| xxx                   | xxx                                                    |

### ✅ 개발 기간 : `2주 - 23.11.20 ~ 23.12.01`
