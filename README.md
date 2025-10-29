# Time Series Chart

<!--
> 원티드 프리온보딩 4주차 과제
>-->
> Wanted Frontend Pre-Onboarding Week 4 Assignment

<br/>

## Project Overview

<!--- 주어진 데이터를 활용해 시계열 차트를 구현한 프로젝트-->
A time series data visualization project with interactive filtering and combined chart types.

<br/>

## Live Demo

https://co-time-series-chart.netlify.app
<br/>
<br/>


## Preview

<img width="760" alt="Preview Screenshot" src="https://github.com/user-attachments/assets/de50f3c9-2026-4e58-b42b-af4490d4be5b" />
<br/>

<!--
## 로컬 실행 방법

1. 본 repository를 clone 합니다.

```bash
$ git clone https://github.com/creamy-ocean/time-series-chart
```

2. 의존성 패키지를 설치합니다.

```bash
npm install
```

3. 개발 서버를 실행합니다.

```bash
npm start
```

<br/>-->

---

## Features

<!--
- Recharts 라이브러리를 이용해 구현한 시계열 차트
  - bar, area 복합 차트 구현
- 차트 하이라이트 기능
  - 필터링 버튼을 클릭하면 동일한 값을 가진 차트만 하이라이트 되는 기능
  - 차트 클릭 시 동일한 값을 가진 차트만 하이라이트 되는 기능-->
  
### Combined Chart Visualization
- Bar and area charts displayed together using Recharts library

### Interactive Location Filtering
- Click on filter buttons or chart elements to highlight data by location
- Highlight selected location across all charts
<img width="760" alt="Location Filtered" src="https://github.com/user-attachments/assets/29aff3eb-9e86-4f9d-841b-35d0a0858b2b" />

### Information Tooltip
- Displays detailed information on hover with id, bar chart value, and area chart value
<img width="760" alt="Tooltip Showing" src="https://github.com/user-attachments/assets/5f06c732-e8c3-42a0-a4c5-2c7ab533efee" />


<br/>

## Tech Stack

<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
</div>
