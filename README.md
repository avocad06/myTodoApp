# my-todo-app
🔗 배포주소: https://main--majestic-manatee-4c18fe.netlify.app/

```
react custom hook과 radixUI 사용으로 headless 컴포넌트 경험을 목적으로 진행한 프로젝트입니다.
```

![example](https://github.com/avocad06/myTodoApp/assets/108647806/fe1497c1-31bf-419f-a619-f0412148fcad)


<details>
    <summary>구현 과정(https://github.com/avocad06/customHook/blob/next/docs/progress.md)</summary>
    	  <p>1. 23-07-20 리스트 구현</p>
        <p>2. 23-07-20 추가하기 구현(유효성 검사)</p>
        <p>3. 23-07-21 삭제하기 구현</p>
        <p>4. 23-07-21 필터 적용 구현</p>
        <p>5. 23-07-22 radix-UI 라이브러리 사용</p>
        <p>6. 23-07-23 radix-UI 라이브러리 학습 및 사용</p>
        <p>7. 23-08-04 다크모드 구현</p>
        <p>8. 23-08-05 스크롤 구현</p>
        <p>9. 23-08-10 편집 모드 구현</p>
        <p>10. 23-08-16 편집 모드 진입 구현</p>
</details>

### 📌 주요 기능
- [x] 할 일 추가/변경/삭제하기
- [x] 공백 검사
- [x] 편집모드
- [x] 할 일 모두보기/미완료/완료된 일 상태별 필터링
- [x] 다크모드

### ⚙ 기술 스택
React, RadixUI, TailwindCSS
<br>
<br>

### 🤔 배운 점 및 후기
간단한 Todo앱이지만 리액트의 hook을 학습하고 고민하면서 개발한 프로젝트입니다. 
**customHook**으로 재사용성을 고려하며 코드를 작성하였습니다. 편집/일반모드를 분리해두고, 편집 모드에서도 일반 모드에서처럼 추가/수정/삭제기능을 그대로 구현하고 싶었는데, 로직이 반복되는 것을 `useTodoHandler` hook으로 추출해 재사용하여 구현할 수 있었습니다.

편집 모드의 상태는 전역으로 리액트의 contextAPI로 관리하였습니다.
`useEffect`와 `forwardRef`, `useRef`등의 hook을 사용해 편집 모드시 자동 포커싱 등 사용자가 어색함을 느끼지 않도록 디테일을 향상시켜 구현하였습니다.

또한, CSS 프레임워크를 사용하며 UI 디자인의 비용을 줄여 편하고 효율적인 다크모드 개발이 가능했습니다.
**RadixUI**는 스타일이 제외된 UI 컴포넌트 라이브러리입니다. 특히, 이번 프로젝트에서 편집 취소 시 나타나는 모달 창을 구현할 때 완성된 컴포넌트에 로직만 추가하여 편하게 구현할 수 있었습니다.

사용자의 할 일과 다크모드 여부를 브라우저 저장소 등 클라이언트에서 캐싱 및 관리하는 기능도 향후에 구현하고 싶습니다.
