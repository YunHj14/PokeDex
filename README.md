# 🔴 PokeDex : 팀 포트폴리오 도감 프로젝트

> **"너로 정했다! 내 첫 번째 Git 협업 포트폴리오!"**  
> 
> 태초마을을 떠나는 지우처럼, HTML/CSS/JS로 협업의 첫걸음을 내딛는 6인의 모험 일지입니다. 
> 단순한 페이지 제작을 넘어 **GitHub Issue, 기능 브랜치 전략, Pull Request 및 코드 리뷰**를 직접 경험하며 협업 능력을 마스터하는 여정을 담았습니다.

<br>

## 🛠️ 기술 스택 (Tech Stack)

| 분류 | 기술 및 도구 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript |
| **Cooperation** | Git, GitHub |

<br>

## 📂 저장소 구조 (Repository Structure)
```text
team-portfolio/
├── index.html          # 메인 페이지 (메인 도감 진입로)
├── about.html          # 팀 소개 페이지 (오박사의 연구소 컨셉)
├── members.html        # 팀원 프로필 페이지 (6인의 포켓몬 도감)
├── projects.html       # 1세대 포켓몬 도감 페이지
├── gallery.html       # 개인 프로젝트 갤러리 (팀원들이 각자 해낸 성과)
├── css/
│   └── style.css       # 공통 디자인 (도감 UI 테마)
├── js/
│   └── main.js         # 인터랙션 스크립트
└── README.md            # 프로젝트 목적, 팀원, 주요 기능, 실행 및 배포 방법 정리를 나타낸 파일
```

<br>

## 🌿 브랜치 전략 (Branch Strategy)
안정적인 도감 완성을 위해 `main` 브랜치 직접 푸시를 금지하고, 기능별 `feature` 브랜치를 운용했습니다.
* **`main`** : 최종적으로 검증되어 완성된 도감 코드를 관리
* **`feature/main-page`** : 메인 페이지 개발
* **`feature/about`** : 팀 소개 페이지 개발
* **`feature/members`** : 팀원 프로필 개발
* **`feature/projects`** : 포켓몬 도감 구현
* **`feature/gallery`** : 프로젝트 갤러리 개발
* **`feature/faq`** : 인터랙션 스크립트 개발
* **`feature/css`** : 공통 디자인 및 UI 개발
* **`feature/js`** : 인터랙션 스크립트 개발
* **`feature/review`** : 배포 전 코드 오류 확인
* **`feature/site-update`** : README.md, 프로젝트 문서 수정


<br>

## 📜 협업 및 개발 규칙 (Ground Rules)

### 1. 🎯 Issue 작성 규칙
작업을 시작하기 전, GitHub Issues에 구현할 기능과 담당자를 명확히 등록하여 모험을 계획합니다.
* **제목:** `[기능명] 작업 내용 요약` (예: 메인 페이지 제작)
* **담당자(Assignees):** 본인 지정
* **내용:** 상세 작업 내용 및 작업 완료 조건(Definition of Done) 명시

### 2. ✍️ 커밋 메시지 규약 (Commit Message Protocol)
누구나 작업 내용을 직관적으로 알 수 있도록 접두사를 붙여 기록합니다.
* `feat:` 새로운 기능 추가 (예: `feat: 팀원 프로필 카드 추가`)
* `style:` CSS 및 UI 스타일 수정 (예: `style: 모바일 화면 스타일 수정`)
* `fix:` 버그 및 오류 수정 (예: `fix: 프로젝트 링크 오류 수정`)
* `docs:` 문서 수정 및 README 업데이트 (예: `docs: README 실행 방법 작성`)

### 3. 🔍 Pull Request & 코드 리뷰 규칙
모든 팀원은 **최소 1개 이상의 PR**을 작성하며, 동료의 코드 리뷰와 승인(`Approve`)을 거쳐 `main`에 병합합니다.
* **PR 필수 포함 항목:** 변경한 기능, 수정한 파일, 구현 결과(화면 캡처), 테스트 결과, 관련 Issue 번호
* **리뷰어 역할:** 다른 팀원의 코드를 확인하고 개선 의견이나 피드백을 남긴 후 머지 프로세스 진행

<br>


## 🚀 프로젝트 실행 및 배포 방법

### 1. 프로젝트 다운로드

GitHub 저장소를 Clone하여 프로젝트를 로컬 환경에 다운로드합니다.

```bash
git clone https://github.com/yunhj14/PokeDex.git
```

프로젝트 폴더로 이동합니다.

```bash
cd PokeDex
```

### 2. 프로젝트 실행

본 프로젝트는 HTML, CSS, JavaScript 기반의 정적 웹 프로젝트로 별도의 서버나 패키지 설치가 필요하지 않습니다.

- 프로젝트 폴더의 `index.html` 파일을 브라우저에서 실행합니다.
- 원활한 개발 및 테스트를 위해 VS Code의 **Live Server** 확장 프로그램 사용을 권장합니다.

### 3. GitHub Pages 배포

본 프로젝트는 GitHub Pages를 이용하여 웹사이트를 배포합니다.

1. GitHub 프로젝트 저장소에 접속합니다.
2. 저장소 상단의 **Settings** 메뉴를 선택합니다.
3. 왼쪽 메뉴에서 **Pages**를 선택합니다.
4. **Build and deployment** 항목을 다음과 같이 설정합니다.
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/(root)`
5. **Save** 버튼을 클릭합니다.
6. 배포가 완료되면 아래 주소에서 웹사이트를 확인할 수 있습니다.

```text
https://yunhj14.github.io/PokeDex/
```

### 4. 배포 업데이트

프로젝트 수정 사항을 GitHub의 `main` 브랜치에 반영하면 GitHub Pages가 변경 사항을 자동으로 배포합니다.

- 작업 브랜치에서 기능 개발 및 수정
- Pull Request를 통해 `main` 브랜치에 병합
- GitHub Pages 자동 배포
- 배포 주소에서 변경 사항 확인

> ※ 최초 배포 및 업데이트 반영까지 일정 시간이 소요될 수 있습니다.


<br>

## 👥 6인의 포켓몬 도감 (Team Members)
> `members.html`에 수집된 우리 팀원들의 프로필 템플릿입니다. 각자의 정체성에 맞는 타입과 능력치를 부여했습니다.


| No.001 (팀장) | No.002 | No.003 |
| :---: | :---: | :---: |
| 💧<br>**윤하진** | 🔥<br>**허민재** | 🍃<br>**이예성** |
| **타입:** 물<br>(유연한 소통과 문제 해결) | **타입:** 불꽃<br>(열정적인 도전과 개발) | **타입:** 풀<br>(조화로운 디자인과 UI/UX) |
| **주요 능력치**<br>HTML: ⭐⭐⭐☆☆<br>CSS: ⭐⭐☆☆☆<br>JS: ⭐☆☆☆☆<br>Git: ⭐⭐⭐☆☆ | **주요 능력치**<br>HTML: ⭐⭐⭐⭐☆<br>CSS: ⭐⭐⭐⭐⭐<br>JS: ⭐⭐⭐☆☆<br>Git: ⭐⭐⭐⭐☆ | **주요 능력치**<br>HTML: ⭐⭐⭐☆☆<br>CSS: ⭐⭐⭐⭐☆<br>JS: ⭐⭐⭐⭐⭐<br>Git: ⭐⭐⭐☆☆ |
|  | | |
| **No.004** | **No.005** | **No.006** |
| 👻<br>**김도영** | ⚡<br>**이재환** | ⚪<br>**이서준** |
| **타입:** 고스트<br>(숨겨진 오류 추적) | **타입:** 전기<br>(빠른 실행과 아이디어) | **타입:** 노말<br>(탄탄한 기본기와 균형) |
| **주요 능력치**<br>HTML: ⭐⭐⭐☆☆<br>CSS: ⭐⭐⭐☆☆<br>JS: ⭐⭐⭐⭐☆<br>Git: ⭐⭐⭐⭐☆ | **주요 능력치**<br>HTML: ⭐⭐⭐⭐☆<br>CSS: ⭐⭐⭐☆☆<br>JS: ⭐⭐⭐☆☆<br>Git: ⭐⭐⭐☆☆ | **주요 능력치**<br>HTML: ⭐⭐⭐☆☆<br>CSS: ⭐☆☆☆☆<br>JS: ⭐☆☆☆☆<br>Git: ⭐☆☆☆☆ |
