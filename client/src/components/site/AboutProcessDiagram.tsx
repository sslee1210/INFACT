import "./about-process-diagram.css";

type Segment = {
  key: string;
  label: string;
  center: number;
  span: number;
  trim?: number;
  fontSize?: number;
  letterSpacing?: number;
  radius?: number;
};

const CX = 450;
const CY = 450;

const OUTER_R = 258;
const INNER_R = 182;
const DEFAULT_LABEL_R = 220;

const segments: Segment[] = [
  {
    key: "project-plan",
    label: "PROJECT PLAN",
    center: 324,
    span: 58,
    trim: 8,
    fontSize: 17.2,
    letterSpacing: 0.02,
    radius: 220,
  },
  {
    key: "design",
    label: "DESIGN",
    center: 36,
    span: 58,
    trim: 10,
    fontSize: 17.2,
    letterSpacing: 0.02,
    radius: 220,
  },
  {
    key: "qms",
    label: "QMS",
    center: 108,
    span: 58,
    trim: 12,
    fontSize: 17.2,
    letterSpacing: 0.02,
    radius: 220,
  },
  {
    key: "compliance",
    label: "COMPLIANCE",
    center: 180,
    span: 58,
    trim: 7,
    fontSize: 16.2,
    letterSpacing: 0.015,
    radius: 218,
  },
  {
    key: "validation",
    label: "VALIDATION",
    center: 252,
    span: 58,
    trim: 8,
    fontSize: 16.4,
    letterSpacing: 0.015,
    radius: 220,
  },
];

const flowArrowAngles = [0, 72, 144, 216, 288];

function normalizeAngle(angle: number) {
  return ((angle % 360) + 360) % 360;
}

/**
 * 0도 = 위쪽, 시계방향 증가
 */
function polarPoint(cx: number, cy: number, radius: number, angle: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: cx + radius * Math.sin(rad),
    y: cy - radius * Math.cos(rad),
  };
}

function ringSegmentPath(
  cx: number,
  cy: number,
  outerRadius: number,
  innerRadius: number,
  centerAngle: number,
  span: number,
) {
  const start = normalizeAngle(centerAngle - span / 2);
  const end = normalizeAngle(centerAngle + span / 2);

  const outerStart = polarPoint(cx, cy, outerRadius, start);
  const outerEnd = polarPoint(cx, cy, outerRadius, end);
  const innerStart = polarPoint(cx, cy, innerRadius, start);
  const innerEnd = polarPoint(cx, cy, innerRadius, end);

  const largeArcFlag = span > 180 ? 1 : 0;

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

/**
 * 라벨용 arc path
 * - 세그먼트 중앙 반경에 맞춘다.
 * - 아래쪽 세그먼트는 path 방향을 반대로 만들어 글자가 뒤집히지 않도록 한다.
 */
function labelArcPath(segment: Segment) {
  const radius = segment.radius ?? DEFAULT_LABEL_R;
  const trim = segment.trim ?? 10;

  const start = normalizeAngle(segment.center - (segment.span / 2 - trim));
  const end = normalizeAngle(segment.center + (segment.span / 2 - trim));

  const startPoint = polarPoint(CX, CY, radius, start);
  const endPoint = polarPoint(CX, CY, radius, end);

  const isBottomHalf = segment.center > 90 && segment.center < 270;

  if (!isBottomHalf) {
    return `M ${startPoint.x} ${startPoint.y} A ${radius} ${radius} 0 0 1 ${endPoint.x} ${endPoint.y}`;
  }

  return `M ${endPoint.x} ${endPoint.y} A ${radius} ${radius} 0 0 0 ${startPoint.x} ${startPoint.y}`;
}

function flowArrowPath(centerAngle: number) {
  const radius = OUTER_R + 28;
  const startPoint = polarPoint(CX, CY, radius, centerAngle - 5.8);
  const endPoint = polarPoint(CX, CY, radius, centerAngle + 5.8);

  return `M ${startPoint.x} ${startPoint.y} A ${radius} ${radius} 0 0 1 ${endPoint.x} ${endPoint.y}`;
}

export default function AboutProcessDiagram() {
  return (
    <div className="about-process-diagram" aria-label="IN-FACT 프로젝트 수행 구조도">
      <svg
        viewBox="0 0 900 900"
        className="about-process-diagram__svg"
        role="img"
        aria-label="프로젝트 수행 구조 다이어그램"
      >
        <defs>
          <linearGradient id="apd-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#183d70" />
            <stop offset="50%" stopColor="#23579d" />
            <stop offset="100%" stopColor="#163a68" />
          </linearGradient>

          <marker
            id="apd-flow-arrow"
            markerWidth="15"
            markerHeight="12"
            refX="13"
            refY="6"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path className="apd-flow-arrow-head" d="M 0 0 L 15 6 L 0 12 Z" />
          </marker>

          {segments.map((segment) => (
            <path
              key={`label-path-${segment.key}`}
              id={`label-path-${segment.key}`}
              d={labelArcPath(segment)}
            />
          ))}
        </defs>

        {/* guide rings */}
        <circle cx={CX} cy={CY} r="300" className="apd-guide-ring apd-guide-ring--1" />
        <circle cx={CX} cy={CY} r="326" className="apd-guide-ring apd-guide-ring--2" />
        <circle cx={CX} cy={CY} r="352" className="apd-guide-ring apd-guide-ring--3" />

        {/* connector lines */}
        <line x1="224" y1="205" x2="314" y2="296" className="apd-guide-line" />
        <line x1="676" y1="205" x2="586" y2="296" className="apd-guide-line" />
        <line x1="224" y1="695" x2="314" y2="604" className="apd-guide-line" />
        <line x1="676" y1="695" x2="586" y2="604" className="apd-guide-line" />

        <g className="apd-flow-arrows" aria-hidden="true">
          {flowArrowAngles.map((angle) => (
            <path key={angle} className="apd-flow-arrow" d={flowArrowPath(angle)} markerEnd="url(#apd-flow-arrow)" />
          ))}
        </g>

        {/* left top */}
        <text x="42" y="86" className="apd-side-title">
          PROJECT
        </text>
        <text x="42" y="134" className="apd-side-title">
          MANAGEMENT
        </text>

        {/* right top */}
        <text x="672" y="86" className="apd-side-title">
          DESIGN
        </text>
        <text x="672" y="134" className="apd-side-title">
          EXCELLENCE
        </text>

        {/* left bottom */}
        <text x="42" y="766" className="apd-side-title">
          VALIDATION
        </text>
        <text x="42" y="818" className="apd-side-title">
          FRAMEWORK
        </text>

        {/* right bottom */}
        <text x="672" y="766" className="apd-side-title">
          QMS /
        </text>
        <text x="672" y="818" className="apd-side-title">
          COMPLIANCE
        </text>

        {/* ring segments */}
        {segments.map((segment) => (
          <path
            key={segment.key}
            d={ringSegmentPath(CX, CY, OUTER_R, INNER_R, segment.center, segment.span)}
            className="apd-segment"
            fill="url(#apd-ring-gradient)"
          />
        ))}

        {/* center circle */}
        <circle cx={CX} cy={CY} r="122" className="apd-core" />
        <circle cx={CX} cy={CY} r="122" className="apd-core-outline" />

        {/* center text */}
        <text x={CX} y="418" textAnchor="middle" className="apd-core-title">
          PROJECT
        </text>
        <text x={CX} y="482" textAnchor="middle" className="apd-core-title">
          PLAN
        </text>
        <text x={CX} y="526" textAnchor="middle" className="apd-core-subtitle">
          IN-FACT CONSULTING
        </text>

        {/* curved labels inside blue segments */}
        {segments.map((segment) => (
          <text
            key={`ring-label-${segment.key}`}
            className="apd-ring-label"
            style={
              {
                "--apd-label-size": `${segment.fontSize ?? 17}px`,
                "--apd-label-letter-spacing": `${segment.letterSpacing ?? 0.04}em`,
              } as React.CSSProperties
            }
          >
            <textPath
              href={`#label-path-${segment.key}`}
              startOffset="50%"
              textAnchor="middle"
              method="align"
              spacing="auto"
            >
              {segment.label}
            </textPath>
          </text>
        ))}
      </svg>
    </div>
  );
}
