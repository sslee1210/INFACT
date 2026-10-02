# 고객사 로고 적용 현황

확인일: 2026-10-02. 로컬 적용 기준이며 커밋·배포는 수행하지 않았습니다.

## 적용 범위

- 메인 움직이는 고객사 로고: 10개 중 10개 연결. 반복 표시를 포함한 20개 이미지 로딩 확인.
- 수행실적 화면에 실제 등장하는 서로 다른 회사명 표기: 150개 중 130개 연결, 20개 미확인.
- 전체 원본 실적 데이터의 서로 다른 회사명 표기: 330개 중 168개 연결. 기존 연도별 최대 20개 표시 정책과 원본 데이터는 유지.
- 저장한 고유 로고: 141종, 약 1.29 MiB. 별칭 차이로 회사명 표기 수와 로고 파일 수가 다릅니다.
- 원본 비율과 색상 유지, 흰색 로고에는 어두운 바탕 적용. 로고를 확인하지 못한 회사와 이미지 로딩 실패 시 회사명 표시.
- 외부 이미지 직접 연결 없이 `client/public/images/clients/`에 저장. 출처·별칭·파일 SHA-256은 `client/src/content/clientLogos.json`에서 관리.
- 메인 로고 반복 이동 거리를 실제 간격의 절반과 연결해 반복 지점의 위치 오차를 보정.

## 아직 확인이 필요한 20개 회사명

아래 표기는 원본 그대로입니다. 회사 공식 URL 또는 해당 실적 당시 사용한 로고 자료가 필요합니다. 비슷한 이름의 다른 회사, 현재 인수 회사, 임의로 만든 로고로 대체하지 않았습니다.

- 휴바이오켐
- 한얼이옌시
- 디케이컨설턴츠
- 메디스턴
- 에스엔피제네틱스
- 고도기술사사무소
- 프로스테믹스
- 메디인프라
- 오레온
- 프레스티지바이오
- 서원엠에프지
- 연성정밀화학
- 와이텍인터내셔널
- DHP Korea
- 팩토리오토메이션
- 이니스트제약
- 우정BSC
- 포트노바
- 프레스
- 비전시스템

## 출처 선택과 이미지 처리

- 기본 출처는 기업 공식 홈페이지의 헤더 또는 CI 페이지입니다.
- DMBIO, CJ헬스케어, 휴온스메디케어는 해당 회사명이 명시된 당시 기사 속 로고를 사용했습니다. LG생명과학은 울산대학교 산학협력 기업 소개 자료를 사용했습니다.
- 삼천당제약은 프로젝트에 있는 원본 회사소개서 PDF 14쪽의 삽입 이미지를 추출했습니다. 고해상도 원본보다 선명도가 낮습니다.
- 삼성바이오로직스의 공식 SVG 스프라이트는 유색 로고 영역의 viewBox를 사용합니다. 엘앤씨바이오의 인라인 SVG에는 공식 페이지에서 확인한 채움색을 포함했습니다. 도형은 재작성하지 않았습니다.
- 생성형 이미지 도구로 로고를 만들거나 색상을 임의 변경하지 않았습니다.
- 연결되지 않는 공식 도메인, 관련 없는 사이트로 변경된 도메인, 정확한 회사명이 없는 약칭은 확인된 로고로 취급하지 않았습니다.

## 검증

- `node scripts/check-client-logos.mjs`: 141개 자산 경로·SHA-256·출처·회사 별칭 충돌·정적 SVG 검사, 메인 10개 회사 매핑 검사.
- `pnpm qa`: TypeScript, 반응형 구조, CSS 소유권, 앱 무결성, 프로덕션 빌드.
- 브라우저: 개념설계 6개 / GMP 11개 / CSV 9개, 총 26개 연도 탭의 표시 결과를 소스의 예상 로고/텍스트 수와 대조.
- 1920px에서 연도 탭 확인, 390px 및 2560px에서 홈·실적 3개 경로 확인. 가로 넘침이나 로드 완료 후 깨진 로고 없음.
- 로고 띠의 20개 이미지 로딩 및 transform 변화 확인. 모션 감소 설정에 대한 기존 CSS는 유지.
- `homepage.html`은 빌드 결과와 동기화. 이미지는 별도 로컬 경로이므로 단독 HTML 파일만 옮기면 로고가 포함되지 않습니다. 실행용 산출물은 이미지 폴더가 함께 있는 `dist/public/`입니다.
- 브라우저 검사와 스크린샷: `output/logo-audit/browser-checks.json`, `home-logos.jpg`, `reference-logos.jpg`.

## 로고 출처 목록

| ID | 연결한 회사명 표기 | 확인 페이지 |
| --- | --- | --- |
| donga-st | 동아ST, 동아에스티, DONG-A ST | [출처](https://www.donga-st.com/en/) |
| gc-biopharma | GC녹십자, 녹십자, GC Biopharma | [출처](https://www.gcbiopharma.com/kor/ci.do) |
| huons | 휴온스, 휴온스제약, Huons | [출처](https://huons.com/kor/home.php) |
| prestige-biologics | 프레스티지바이오로직스, Prestige Biologics | [출처](https://prestigebiologics.com/) |
| lg-chem | LG화학, LG Chem | [출처](https://www.lgchem.com:443/main/index) |
| cj-cheiljedang | CJ제일제당, CJ CheilJedang | [출처](https://www.cj.co.kr/kr/index) |
| celltrion | 셀트리온 | [출처](https://www.celltrion.com/ko-kr) |
| hanmi | 한미약품 | [출처](https://www.hanmi.co.kr/) |
| sk-bioscience | SK바이오사이언스 | [출처](https://www.skbioscience.com/kr/main) |
| boryung | 보령제약 | [출처](https://www.boryung.co.kr/en/) |
| inno-n | HK이노엔, 에이치케이이노엔 | [출처](https://www.inno-n.com/) |
| donga-pharm | 동아제약 | [출처](https://www.dapharm.com/ko) |
| jw-pharm | jw중외제약 | [출처](https://www.jw-pharma.co.kr/pharma/ko/main.jsp) |
| ildong | 일동제약 | [출처](https://www.ildong.com/kor/main/main.id) |
| dongkook | 동국제약 | [출처](https://www.dkpharm.co.kr/) |
| kolmar | 한국콜마 | [출처](https://www.kolmar.co.kr/) |
| medytox | 메디톡스 | [출처](https://www.medytox.com/) |
| taejoon | 태준제약 | [출처](https://www.taejoon.co.kr/) |
| hanall | 한올바이오파마, 한올바이오 | [출처](https://hanall.com/kr/) |
| hugel | 휴젤 | [출처](https://www.hugel-inc.com/kr/media/ci) |
| lotte-bio | 롯데바이오로직스 | [출처](https://www.lottebiologics.com/en) |
| bcworld | 비씨월드제약, 비씨월드 | [출처](https://www.bcwp.co.kr/) |
| binex | 바이넥스 | [출처](https://www.bi-nex.com/) |
| peptron | 펩트론 | [출처](https://www.peptron.co.kr/) |
| boryung-bio | 보령바이오파마 | [출처](https://www.boryungbio.co.kr/) |
| dongkwang | 동광제약 | [출처](https://www.dkpco.co.kr/) |
| jeil | 제일약품 | [출처](https://www.jeilpharm.co.kr/jeilpharm/intro.asp) |
| daewon | 대원제약 | [출처](https://www.daewonpharm.com/main/index.jsp) |
| jw-life | jw생명과학 | [출처](https://www.jw-lifescience.co.kr/lifescience/ko/main.jsp) |
| reyon | 이연제약 | [출처](https://www.reyonpharm.co.kr/en/main/main.do) |
| alvogen | 알보젠코리아, 알보젠 | [출처](https://www.alvogenkorea.com/) |
| daehwa | 대화제약 | [출처](https://www.dhpharm.co.kr/html/) |
| daihan | 대한약품, 대한약품공업 | [출처](https://www.daihan.com/main/main.php) |
| dongkoo | 동구바이오 | [출처](https://www.dongkoo.com/kor/) |
| samyang-bio | 삼양바이오팜, 삼양바이오팜 의약공장 | [출처](https://www.samyangbiopharm.com/kr/index) |
| samyang | 삼양홀딩스, 삼양홀딩스 의약공장 | [출처](https://www.samyang.com/kr/index) |
| rp-bio | RPBIO | [출처](https://www.rpbio.co.kr/html/ko/main.php) |
| whanin | 환인제약 | [출처](https://www.whanin.com/) |
| suheung | 서흥, 서흥캅셀 | [출처](https://www.suheung.com/) |
| kwangdong | 광동제약 | [출처](https://www.ekdp.com/main.do) |
| dongsung | 동성제약 | [출처](https://www.dongsung-pharm.com/) |
| young-science | 영사이언스 | [출처](https://www.youngscience.com/) |
| hanwha | 한화제약 | [출처](https://www.hwpharm.com/main/) |
| otsuka | 한국오츠카제약 | [출처](https://www.otsuka.co.kr/) |
| yu-young | 유영제약 | [출처](https://www.yypharm.co.kr/) |
| g2g | G2G 바이오 | [출처](https://www.g2gbio.com/) |
| merck | 머크 | [출처](https://www.merckgroup.com/kr-ko) |
| genuone | 제뉴원사이언스 | [출처](https://www.genuonesciences.com/main/) |
| shinpoong | 신풍제약 | [출처](https://www.shinpoong.co.kr/main/main.php) |
| pharmbio | 한국팜비오 | [출처](https://www.pharmbio.co.kr/) |
| roche | 한국로슈 | [출처](https://www.roche.co.kr/) |
| yuhan | 유한양행 | [출처](https://www.yuhan.co.kr/Main/) |
| ckd-pharm | 종근당 | [출처](https://www.ckdpharm.com/research/intro.do) |
| ckd-bio | 종근당바이오, CKD Bio, 종근당바이오 안산공장, 종근당바이오 예산공장 | [출처](https://www.ckdbio.com/facility/ansanFactory.do) |
| samjin | 삼진제약 | [출처](https://www.samjinpharm.co.kr/front/kr/main/index.asp) |
| unimed | 유니메드제약 | [출처](https://www.unimed.co.kr/index) |
| isu | 이수앱지스 | [출처](https://www.abxis.com/kor/index.do) |
| dongwha | 동화약품 | [출처](https://www.dong-wha.co.kr/dw_main.asp) |
| penmix | 펜믹스 | [출처](http://www.penmix.co.kr/) |
| prp-science | 피알피사이언스, 피알피싸이언스 | [출처](https://www.prpscience.co.kr/) |
| youngjin | 영진약품 | [출처](https://www.yungjin.co.kr/) |
| huons-meditech | 휴온스메디텍 | [출처](https://www.huonsmeditech.com/) |
| humedix | 휴메딕스 | [출처](https://www.humedix.com/) |
| eaglevet | 이글벳 | [출처](https://eaglevet.com/) |
| aju | 아주약품 | [출처](https://www.ajupharm.co.kr/) |
| korea-vaccine | 한국백신, Korea Vaccine | [출처](https://www.koreavaccine.com/) |
| samil | 삼일제약 | [출처](https://www.samil-pharm.com/) |
| icure | 아이큐어 | [출처](https://www.icure.co.kr/) |
| boston-scientific | 보스톤싸이언티픽 | [출처](https://www.bostonscientific.com/en-US/home.html) |
| myungin | 명인제약 | [출처](https://myunginph.co.kr/main/ko/index.html) |
| mirae-cell | 미래셀바이오 | [출처](http://miraecellbio.com/) |
| yoosung | 유성에프에스 | [출처](http://yoosungfs.com/) |
| curable | 큐러블 | [출처](https://www.curablent.com/) |
| alico | 알리코제약 | [출처](https://www.arlico.co.kr/main/main.php) |
| vivozon | 비보존제약 | [출처](https://www.vivozonpharm.com/) |
| cgbio | CG바이오, 시지바이오 | [출처](https://www.cgbio.co.kr/) |
| bmi | 한국BMI, 한국비엠아이 | [출처](https://bmikr.co.kr/) |
| daehan-new | 대한뉴팜 | [출처](https://www.dhnp.co.kr/) |
| cellontech | 셀론텍 | [출처](https://www.cellontech.com/) |
| organoid | 오가노이드사이언스 | [출처](https://organoidrx.com/) |
| kolon | 코오롱제약 | [출처](https://www.kolonpharm.co.kr/) |
| shinil | 신일제약 | [출처](https://www.sinilpharm.com/) |
| samsung-pharm | 삼성제약 | [출처](https://www.sspharm.co.kr/new/main/main.php) |
| curatis | 큐라티스 | [출처](https://www.quratis.com/ko/) |
| komipharm | 코미팜 | [출처](https://www.komipharm.co.kr/) |
| cellumed | 셀루메드 | [출처](https://www.cellumed.co.kr/) |
| sk-ecoplant | SK에코플랜트 | [출처](https://www.skecoplant.com/) |
| quantamatrix | 퀀타매트릭스 | [출처](https://www.quantamatrix.com/) |
| genoss | 제노스 | [출처](https://www.genoss.com/) |
| sunjin | 선진뷰티사이언스 | [출처](https://www.sunjinbs.com/en/main/) |
| caregen | 케어젠 | [출처](https://www.caregen.co.kr/) |
| youngil | 영일제약 | [출처](http://www.youngilpharm.co.kr/html/main.php) |
| jaseng | 자생한방병원 | [출처](https://www.jaseng.co.kr/) |
| withus | 위더스제약 | [출처](https://www.withuspharm.com/mastart/mastart.php) |
| dermafirm | 더마펌 | [출처](https://www.dermafirm.com/) |
| firson | 퍼슨 | [출처](https://www.firson.co.kr/main/main.php) |
| jin-yang | 진양제약 | [출처](https://www.jinyangpharm.com/) |
| cellbion | 셀비온 | [출처](https://www.cellbion.co.kr/) |
| korus | 코러스 | [출처](https://www.koruspharm.co.kr/) |
| kookje | 국제약품 | [출처](https://www.kukjepharm.co.kr/) |
| dmbio | DMBIO, DM Bio, DM바이오, 디엠바이오 | [출처](https://www.etnews.com/20191031000125) |
| st-pharm | ST Pharm | [출처](https://www.stpharm.co.kr/ko/ci) |
| scd-pharm | 삼천당제약, Samchundang Pharm | [출처](./documents/infact-company-profile-2026-10.pdf#page=14) |
| lnc-bio | 엘앤씨바이오 | [출처](https://www.lncbio.co.kr/) |
| bukwang | 부광약품 | [출처](https://www.bukwang.co.kr/) |
| cosmax-bio | 코스맥스바이오 | [출처](https://www.cosmaxbio.com/) |
| kyongbo | 경보제약 | [출처](https://www.kbpharma.co.kr/company/summary_kbp.do) |
| hanlim | 한림제약 | [출처](https://www.hanlim.com:49324/index.php) |
| celltasquare | 셀타스퀘어 | [출처](https://seltaglobal.com/bbs/board.php?bo_table=0401_kr) |
| kuhnil | 건일제약 | [출처](http://www.kuhnil.com/) |
| huons-biopharma | 휴온스바이오파마 | [출처](https://huonsbiopharma.com/web/home.php) |
| jw-holdings | jw홀딩스 | [출처](https://www.jw-holdings.co.kr/holdings/ko/intro/ci.jsp) |
| mujin | 무진메디 | [출처](https://www.moogene.com/) |
| aprogen | 에이프로젠 | [출처](https://aprogen.com/ko/v.do?a=Main) |
| pan-gen | 팬젠 | [출처](https://pangen.com/layout/kor/home.php?go=main&) |
| samsung-biologics | 삼성바이오로직스 | [출처](https://samsungbiologics.com/kr) |
| united | 한국유나이티드제약, 한국유나이티드, 유나이티드제약 | [출처](https://www.kup.co.kr/main.do) |
| daewoong | 대웅제약 | [출처](https://www.daewoong.co.kr/ko) |
| daewoong-bio | 대웅바이오 | [출처](https://www.daewoongbio.co.kr/ko) |
| the-u | 더유제약 | [출처](https://www.theu.co.kr/?sc_web=y) |
| kukjeon | 국전약품 | [출처](https://www.kukjeon.co.kr/) |
| jnj | 존슨앤존슨 | [출처](https://www.jnj.com/) |
| seoul-pharma | 서울제약 | [출처](http://www.seoulpharma.com/) |
| domino | 도미노코리아 | [출처](https://www.domino-printing.com/ko-kr/home.aspx) |
| enzychem | 엔지켐생명과학 | [출처](https://www.enzychem.co.kr/) |
| kolmar-bnh | 콜마비앤에이치, 콜마 BNH | [출처](https://kolmarbnh.co.kr/) |
| union | 한국유니온제약 | [출처](https://www.ukp.co.kr/kor/company/index.php) |
| prime | 한국프라임제약 | [출처](https://koreaprime.co.kr) |
| guju | 구주제약 | [출처](https://www.guju.co.kr/e_product/list.php) |
| pharmaresearch | 파마리서치 | [출처](https://pharmaresearch.com/) |
| genewel | 제네웰 | [출처](https://www.genewel.com/kr/sub/company/overview.php) |
| amore | 아모레퍼시픽 | [출처](https://www.apgroup.com/int/ko/) |
| inventage | 인벤티지랩 | [출처](https://inventagelab.com/en) |
| eubiologics | 유바이오로직스 | [출처](http://www.eubiologics.com/kor/) |
| 3m | 한국쓰리엠 | [출처](https://www.3m.co.kr/3M/ko_KR/company-kr/) |
| taiguk | 태극제약 | [출처](https://www.taiguk.co.kr/index.jsp) |
| aprogen-biologics | 에이프로젠바이오로직스 | [출처](https://www.aprogen-biologics.com/) |
| lg-life-historical | LG생명과학 | [출처](https://chem.ulsan.ac.kr/chem/1749) |
| cj-health-historical | CJ헬스케어 | [출처](https://www.khanews.com/news/articleView.html?idxno=99565) |
| bnc | 한국비엔씨 | [출처](http://www.bnckorea.co.kr/web/?urlkeyword=BNC+KOREA) |
| huons-medicare-historical | 휴온스메디케어 | [출처](https://www.etnews.com/20190703000025) |
