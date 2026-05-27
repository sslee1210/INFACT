import { useState, type CSSProperties } from "react";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { contactInfo, teamContacts } from "@/content/siteContent";

const KAKAO_MAP_URL =
  "https://map.kakao.com/link/search/경기도 오산시 내삼미로80번길 36-11";
const MAP_SCALE_VALUES = [1, 1.14, 1.3, 1.48, 1.66];
const MAP_SCALE_LABELS = ["500m", "200m", "100m", "70m", "50m"];

function KakaoMapPreview() {
  const [zoomLevel, setZoomLevel] = useState(0);
  const canZoomIn = zoomLevel < MAP_SCALE_VALUES.length - 1;
  const canZoomOut = zoomLevel > 0;
  const mapStyle = {
    "--contact-map-scale": MAP_SCALE_VALUES[zoomLevel],
  } as CSSProperties;

  return (
    <div className="contact-map contact-map--kakao" style={mapStyle}>
      <a
        href={KAKAO_MAP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-map__open"
        aria-label="카카오맵에서 INFACT 위치 보기"
      >
        <span className="contact-map__stage" aria-hidden="true" />
        <span className="contact-map__address">
          <strong>경기 오산시 내삼미로80번길 36-11</strong>
          <small>(지번) 경기 오산시 수청동 636-3</small>
          <em>정보 수정 제안</em>
          <span className="contact-map__address-actions">
            <span>저장</span>
            <span>공유</span>
            <span>길찾기</span>
          </span>
          <i aria-hidden="true" />
        </span>
      </a>

      <div className="contact-map__controls" aria-label="지도 확대 축소">
        <button
          type="button"
          onClick={() =>
            setZoomLevel((current) =>
              Math.min(current + 1, MAP_SCALE_VALUES.length - 1),
            )
          }
          disabled={!canZoomIn}
          aria-label="지도 확대"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => setZoomLevel((current) => Math.max(current - 1, 0))}
          disabled={!canZoomOut}
          aria-label="지도 축소"
        >
          -
        </button>
      </div>

      <span className="contact-map__brand" aria-hidden="true">
        kakao
      </span>
      <span className="contact-map__scale" aria-hidden="true">
        {MAP_SCALE_LABELS[zoomLevel]}
      </span>
    </div>
  );
}

export default function Contact() {
  return (
    <PageLayout>
      <PageIntro
        label="Contact"
        title="프로젝트 상담이 필요하신가요?"
        description="연락처, 위치, 문의 가능 범위를 확인하고 프로젝트 상황에 맞는 상담을 요청할 수 있습니다."
      />

      <section className="section section--white">
        <div className="site-shell contact-page">
          <div className="contact-team-directory">
            <div className="contact-team-list" aria-label="분야별 담당 연락처">
              {teamContacts.map((contact) => (
                <article className="contact-team-item" key={contact.label}>
                  <div className="contact-team-item__title">
                    <span>{contact.service}</span>
                    <h3>{contact.label}</h3>
                  </div>
                  <dl className="contact-team-item__details">
                    <div>
                      <dt>담당자</dt>
                      <dd>{contact.manager}</dd>
                    </div>
                    <div>
                      <dt>E-Mail</dt>
                      <dd>
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </dd>
                    </div>
                    <div>
                      <dt>TEL</dt>
                      <dd>
                        <a href={`tel:${contact.phone.replace(/\D/g, "")}`}>
                          {contact.phone}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>

          <div className="contact-page__overview company-section">
            <div id="contact-info" className="contact-page__info">
              <p className="section-label">Contact Information</p>
              <div className="detail-table">
                <div className="detail-table__row">
                  <span>전화</span>
                  <div>{contactInfo.phone}</div>
                </div>
                <div className="detail-table__row">
                  <span>팩스</span>
                  <div>{contactInfo.fax}</div>
                </div>
                <div className="detail-table__row">
                  <span>이메일</span>
                  <div>{contactInfo.email}</div>
                </div>
                <div className="detail-table__row">
                  <span>주소</span>
                  <div>{contactInfo.address}</div>
                </div>
                <div className="detail-table__row">
                  <span>운영 안내</span>
                  <div>{contactInfo.hours.join(" / ")}</div>
                </div>
              </div>
            </div>

            <div className="contact-page__visual" aria-label="회사 위치">
              <p className="section-label">Location</p>
              <KakaoMapPreview />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
