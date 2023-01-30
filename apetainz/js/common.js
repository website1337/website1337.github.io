function OO00OO00OO00OO00OOOOOO000({
  ecl = 'M',
  sizeProp = 288,
  uri,
  clearArea = true,
  image,
  imageBackground = 'transparent'
}) {
  const logoSize = clearArea ? 76 : 0
  const size = sizeProp - 10 * 2

  const dots = React.useMemo(() => {
    const dots = []
    const matrix = OOO0O0O0O0O0000OOO(uri, ecl)
    const cellSize = size / matrix.length

    let qrList = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ]

    qrList.forEach(({ x, y }) => {
      const x1 = (matrix.length - 7) * cellSize * x
      const y1 = (matrix.length - 7) * cellSize * y
      for (let i = 0; i < 3; i++) {
        dots.push(
          <rect
            key={`${i}-${x}-${y}`}
            fill={i % 2 !== 0 ? '#282828' : 'white'}
            rx={(i - 2) * -5 + (i === 0 ? 2 : 3)}
            ry={(i - 2) * -5 + (i === 0 ? 2 : 3)}
            width={cellSize * (7 - i * 2)}
            height={cellSize * (7 - i * 2)}
            x={x1 + cellSize * i}
            y={y1 + cellSize * i}
          />
        )
      }
    })

    if (image) {
      const x1 = (matrix.length - 7) * cellSize * 1
      const y1 = (matrix.length - 7) * cellSize * 1

      dots.push(
        <>
          <rect
            fill={imageBackground}
            rx={(0 - 2) * -5 + 2}
            ry={(0 - 2) * -5 + 2}
            width={cellSize * (7 - 0 * 2)}
            height={cellSize * (7 - 0 * 2)}
            x={x1 + cellSize * 0}
            y={y1 + cellSize * 0}
          />
          <foreignObject
            width={cellSize * (7 - 0 * 2)}
            height={cellSize * (7 - 0 * 2)}
            x={x1 + cellSize * 0}
            y={y1 + cellSize * 0}
          >
            <div style={{ borderRadius: (0 - 2) * -5 + 2, overflow: 'hidden' }}>
              {image}
            </div>
          </foreignObject>
        </>
      )
    }

    const clearArenaSize = Math.floor((logoSize + 25) / cellSize)
    const matrixMiddleStart = matrix.length / 2 - clearArenaSize / 2
    const matrixMiddleEnd = matrix.length / 2 + clearArenaSize / 2 - 1

    matrix.forEach((row, i) => {
      row.forEach((_, j) => {
        if (matrix[i][j]) {
          // Do not render dots under position squares
          if (
            !(
              (i < 7 && j < 7) ||
              (i > matrix.length - 8 && j < 7) ||
              (i < 7 && j > matrix.length - 8)
            )
          ) {
            if (
              i > matrixMiddleStart &&
              i < matrixMiddleEnd &&
              j > matrixMiddleStart &&
              j < matrixMiddleEnd
            )
              return

            if (
              image ||
              !(
                i > matrixMiddleStart &&
                i < matrixMiddleEnd &&
                j > matrixMiddleStart &&
                j < matrixMiddleEnd
              )
            ) {
              dots.push(
                <circle
                  key={`circle-${i}-${j}`}
                  cx={i * cellSize + cellSize / 2}
                  cy={j * cellSize + cellSize / 2}
                  fill="white"
                  r={cellSize / 3}
                />
              )
            }
          }
        }
      })
    })

    return dots
  }, [ecl, size, uri])

  return (
    <svg
      height={size}
      width={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        width: size,
        height: size
      }}
    >
      <rect fill="transparent" height={size} width={size} />
      {dots}
    </svg>
  )
}

const O00OO000OOOO000OOOO000000000 = () => {
  return (
    <div className="close-button">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-projection-id="389"
      >
        <path
          d="M1 13L13 1"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        ></path>
        <path
          d="M1 0.999999L13 13"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        ></path>
      </svg>
    </div>
  )
}

const OO0OOOOOOOOOOOOOOO000000 = () => {
  return (
    <div className="blkj2390gadton">
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 1L1 8L8 15"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
  )
}

const OO000O0O0O000O000OOOO0O = () => {
  return (
    <>
      <div className="mm-conn-wrapper">
        <OOO00OOOO00OOOOO0000000 isBig={true} name="Coinbase Wallet" />

        <div className="mm-conn-text-wrapper">
          <div className="mm-conn-text-header">Install Coinbase</div>
          <div className="mm-conn-text-body">
            To connect your Coinbase wallet, install the browser extension.
          </div>
        </div>

        <div
          className="Isldfjgkl_asflkasjdfwc-button"
          onClick={async () => {
            window.open(
              'https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad',
              '_blank'
            )
          }}
        >
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_ii_927_5781)">
              <g clip-path="url(#clip0_927_5781)">
                <path
                  d="M1.58771 0V12.2727H6.06498L10.0002 5.45455H20.0002V0H1.58771Z"
                  fill="#DB4437"
                ></path>
                <path
                  d="M1.58771 0V12.2727H6.06498L10.0002 5.45455H20.0002V0H1.58771Z"
                  fill="url(#paint0_linear_927_5781)"
                ></path>
                <path
                  d="M6.17038 12.2272L1.64538 4.46582L1.57947 4.57946L6.07265 12.284L6.17038 12.2272Z"
                  fill="black"
                  fill-opacity="0.15"
                ></path>
                <path
                  d="M0 20.0003H9.51932L13.9375 15.5821V12.273H6.0625L0 1.87305V20.0003Z"
                  fill="#0F9D58"
                ></path>
                <path
                  d="M0 20.0003H9.51932L13.9375 15.5821V12.273H6.0625L0 1.87305V20.0003Z"
                  fill="url(#paint1_linear_927_5781)"
                ></path>
                <path
                  d="M13.8412 12.4208L13.7469 12.3662L9.38324 19.9969H9.51392L13.8435 12.4242L13.8412 12.4208Z"
                  fill="#263238"
                  fill-opacity="0.15"
                ></path>
                <path
                  d="M10.0006 5.45459L13.9381 12.2728L9.51996 20H20.0006V5.45459H10.0006Z"
                  fill="#FFCD40"
                ></path>
                <path
                  d="M10.0006 5.45459L13.9381 12.2728L9.51996 20H20.0006V5.45459H10.0006Z"
                  fill="url(#paint2_linear_927_5781)"
                ></path>
                <path
                  d="M9.9996 5.45459L13.9371 12.2728L9.51892 20H19.9996V5.45459H9.9996Z"
                  fill="#FFCD40"
                ></path>
                <path
                  d="M9.9996 5.45459L13.9371 12.2728L9.51892 20H19.9996V5.45459H9.9996Z"
                  fill="url(#paint3_linear_927_5781)"
                ></path>
                <path
                  d="M1.58691 0V12.2727H6.06419L9.99941 5.45455H19.9994V0H1.58691Z"
                  fill="#DB4437"
                ></path>
                <path
                  d="M1.58691 0V12.2727H6.06419L9.99941 5.45455H19.9994V0H1.58691Z"
                  fill="url(#paint4_linear_927_5781)"
                ></path>
                <path
                  d="M10 5.45459V7.83527L18.9091 5.45459H10Z"
                  fill="url(#paint5_radial_927_5781)"
                ></path>
                <path
                  d="M0 19.9998H9.51932L11.9318 15.9089L13.9375 12.2726H6.0625L0 1.87256V19.9998Z"
                  fill="#0F9D58"
                ></path>
                <path
                  d="M0 19.9998H9.51932L12.1023 15.5112L13.9375 12.2726H6.0625L0 1.87256V19.9998Z"
                  fill="url(#paint6_linear_927_5781)"
                ></path>
                <path
                  d="M1.58771 4.59668L8.09339 11.1012L6.06384 12.2728L1.58771 4.59668Z"
                  fill="url(#paint7_radial_927_5781)"
                ></path>
                <path
                  d="M9.52661 19.9884L11.9084 11.1021L13.938 12.2725L9.52661 19.9884Z"
                  fill="url(#paint8_radial_927_5781)"
                ></path>
                <path
                  d="M10.0003 14.5455C12.5107 14.5455 14.5458 12.5104 14.5458 10C14.5458 7.48966 12.5107 5.45459 10.0003 5.45459C7.48996 5.45459 5.4549 7.48966 5.4549 10C5.4549 12.5104 7.48996 14.5455 10.0003 14.5455Z"
                  fill="#F1F1F1"
                ></path>
                <path
                  d="M9.99995 13.6365C12.0083 13.6365 13.6363 12.0084 13.6363 10.0001C13.6363 7.99183 12.0083 6.36377 9.99995 6.36377C7.99164 6.36377 6.36359 7.99183 6.36359 10.0001C6.36359 12.0084 7.99164 13.6365 9.99995 13.6365Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M10.0003 5.34082C7.48899 5.34082 5.4549 7.37491 5.4549 9.88628V9.99991C5.4549 7.48855 7.48899 5.45446 10.0003 5.45446H20.0003V5.34082H10.0003Z"
                  fill="black"
                  fill-opacity="0.2"
                ></path>
                <path
                  d="M13.9318 12.273C13.1455 13.6299 11.6818 14.5458 10 14.5458C8.31818 14.5458 6.85227 13.6299 6.06818 12.273H6.06364L0 1.87305V1.98668L6.06818 12.3867C6.85455 13.7435 8.31818 14.6594 10 14.6594C11.6818 14.6594 13.1455 13.7446 13.9318 12.3867H13.9375V12.273H13.9307H13.9318Z"
                  fill="white"
                  fill-opacity="0.1"
                ></path>
                <path
                  opacity="0.1"
                  d="M10.1133 5.45459C10.094 5.45459 10.0758 5.45686 10.0565 5.458C12.5406 5.48868 14.5452 7.50913 14.5452 10C14.5452 12.491 12.5406 14.5114 10.0565 14.5421C10.0758 14.5421 10.094 14.5455 10.1133 14.5455C12.6247 14.5455 14.6588 12.5114 14.6588 10C14.6588 7.48868 12.6247 5.45459 10.1133 5.45459Z"
                  fill="black"
                ></path>
                <path
                  d="M13.9769 12.4204C14.3632 11.7522 14.5871 10.9795 14.5871 10.1522C14.5874 9.68602 14.5157 9.22262 14.3746 8.77832C14.4826 9.16696 14.5451 9.57377 14.5451 9.99764C14.5451 10.8249 14.3212 11.5976 13.9348 12.2658L13.9371 12.2704L9.51892 19.9976H9.65074L13.9769 12.4204Z"
                  fill="white"
                  fill-opacity="0.2"
                ></path>
                <path
                  d="M10 0.113636C15.5034 0.113636 19.9682 4.56023 20 10.0568C20 10.0375 20.0011 10.0193 20.0011 10C20.0011 4.47727 15.5239 0 10.0011 0C4.47841 0 0 4.47727 0 10C0 10.0193 0.00113639 10.0375 0.00113639 10.0568C0.0318182 4.56023 4.49659 0.113636 10 0.113636Z"
                  fill="white"
                  fill-opacity="0.2"
                ></path>
                <path
                  d="M10 19.8865C15.5034 19.8865 19.9682 15.4399 20 9.94336C20 9.96268 20.0011 9.98086 20.0011 10.0002C20.0011 15.5229 15.5239 20.0002 10.0011 20.0002C4.47841 20.0002 0 15.5229 0 10.0002C0 9.98086 0.00113639 9.96268 0.00113639 9.94336C0.0318182 15.4399 4.49659 19.8865 10.0011 19.8865H10Z"
                  fill="black"
                  fill-opacity="0.15"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_ii_927_5781"
                x="0"
                y="-0.235294"
                width="20"
                height="20.4706"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="0.235294"></feOffset>
                <feGaussianBlur stdDeviation="0.235294"></feGaussianBlur>
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                ></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_927_5781"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="-0.235294"></feOffset>
                <feGaussianBlur stdDeviation="0.235294"></feGaussianBlur>
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                ></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_927_5781"
                  result="effect2_innerShadow_927_5781"
                ></feBlend>
              </filter>
              <linearGradient
                id="paint0_linear_927_5781"
                x1="2.42521"
                y1="7.61591"
                x2="8.39112"
                y2="4.13068"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A52714" stop-opacity="0.6"></stop>
                <stop
                  offset="0.66"
                  stop-color="#A52714"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_927_5781"
                x1="11.6932"
                y1="17.7844"
                x2="5.06136"
                y2="13.8981"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#055524" stop-opacity="0.4"></stop>
                <stop
                  offset="0.33"
                  stop-color="#055524"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_927_5781"
                x1="12.9438"
                y1="4.75004"
                x2="14.6143"
                y2="12.0569"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EA6100" stop-opacity="0.3"></stop>
                <stop
                  offset="0.66"
                  stop-color="#EA6100"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_927_5781"
                x1="12.9428"
                y1="4.75004"
                x2="14.6132"
                y2="12.0569"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EA6100" stop-opacity="0.3"></stop>
                <stop
                  offset="0.66"
                  stop-color="#EA6100"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_927_5781"
                x1="2.42441"
                y1="7.61591"
                x2="8.39032"
                y2="4.13068"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A52714" stop-opacity="0.6"></stop>
                <stop
                  offset="0.66"
                  stop-color="#A52714"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <radialGradient
                id="paint5_radial_927_5781"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(9.56818 5.44891) scale(9.55455)"
              >
                <stop stop-color="#3E2723" stop-opacity="0.2"></stop>
                <stop offset="1" stop-color="#3E2723" stop-opacity="0"></stop>
              </radialGradient>
              <linearGradient
                id="paint6_linear_927_5781"
                x1="11.6932"
                y1="17.7839"
                x2="5.06136"
                y2="13.8976"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#055524" stop-opacity="0.4"></stop>
                <stop
                  offset="0.33"
                  stop-color="#055524"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <radialGradient
                id="paint7_radial_927_5781"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(1.57975 4.60463) scale(8.86818)"
              >
                <stop stop-color="#3E2723" stop-opacity="0.2"></stop>
                <stop offset="1" stop-color="#3E2723" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient
                id="paint8_radial_927_5781"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(9.97775 10.0157) scale(9.98523)"
              >
                <stop stop-color="#263238" stop-opacity="0.2"></stop>
                <stop offset="1" stop-color="#263238" stop-opacity="0"></stop>
              </radialGradient>
              <clipPath id="clip0_927_5781">
                <rect width="20" height="20" rx="10" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          Install the Extension
        </div>
      </div>
    </>
  )
}

const O0O0O00O0O0OOO0O0O00 = (props) => {
  const { addr } = props

  return (
    <>
      <div className="mm-conn-wrapper">
        <OOO00OOOO00OOOOO0000000 isBig={true} name="MetaMask" />

        <O0O000O0OO0OOO0O000000O0O00 />

        <div className="mm-conn-text-wrapper">
          <div className="mm-conn-text-header">
            {addr ? 'Connecting' : 'Requesting Connection'}
          </div>
          <div className="mm-conn-text-body">
            {addr ? (
              "Please wait. It won't take long"
            ) : (
              <>
                Open the MetaMask browser <br /> extension to connect your
                wallet.
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

const O0O0O0O00OO00OO00OOOO = () => {
  return (
    <>
      <div className="mm-conn-wrapper">
        <OOO00OOOO00OOOOO0000000 isBig={true} name="MetaMask" />

        <div className="mm-conn-text-wrapper">
          <div className="mm-conn-text-header">Install MetaMask</div>
          <div className="mm-conn-text-body">
            To connect your MetaMask wallet, install the browser extension.
          </div>
        </div>

        <div
          className="Isldfjgkl_asflkasjdfwc-button"
          onClick={async () => {
            window.open(
              'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
              '_blank'
            )
          }}
        >
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_ii_927_5781)">
              <g clip-path="url(#clip0_927_5781)">
                <path
                  d="M1.58771 0V12.2727H6.06498L10.0002 5.45455H20.0002V0H1.58771Z"
                  fill="#DB4437"
                ></path>
                <path
                  d="M1.58771 0V12.2727H6.06498L10.0002 5.45455H20.0002V0H1.58771Z"
                  fill="url(#paint0_linear_927_5781)"
                ></path>
                <path
                  d="M6.17038 12.2272L1.64538 4.46582L1.57947 4.57946L6.07265 12.284L6.17038 12.2272Z"
                  fill="black"
                  fill-opacity="0.15"
                ></path>
                <path
                  d="M0 20.0003H9.51932L13.9375 15.5821V12.273H6.0625L0 1.87305V20.0003Z"
                  fill="#0F9D58"
                ></path>
                <path
                  d="M0 20.0003H9.51932L13.9375 15.5821V12.273H6.0625L0 1.87305V20.0003Z"
                  fill="url(#paint1_linear_927_5781)"
                ></path>
                <path
                  d="M13.8412 12.4208L13.7469 12.3662L9.38324 19.9969H9.51392L13.8435 12.4242L13.8412 12.4208Z"
                  fill="#263238"
                  fill-opacity="0.15"
                ></path>
                <path
                  d="M10.0006 5.45459L13.9381 12.2728L9.51996 20H20.0006V5.45459H10.0006Z"
                  fill="#FFCD40"
                ></path>
                <path
                  d="M10.0006 5.45459L13.9381 12.2728L9.51996 20H20.0006V5.45459H10.0006Z"
                  fill="url(#paint2_linear_927_5781)"
                ></path>
                <path
                  d="M9.9996 5.45459L13.9371 12.2728L9.51892 20H19.9996V5.45459H9.9996Z"
                  fill="#FFCD40"
                ></path>
                <path
                  d="M9.9996 5.45459L13.9371 12.2728L9.51892 20H19.9996V5.45459H9.9996Z"
                  fill="url(#paint3_linear_927_5781)"
                ></path>
                <path
                  d="M1.58691 0V12.2727H6.06419L9.99941 5.45455H19.9994V0H1.58691Z"
                  fill="#DB4437"
                ></path>
                <path
                  d="M1.58691 0V12.2727H6.06419L9.99941 5.45455H19.9994V0H1.58691Z"
                  fill="url(#paint4_linear_927_5781)"
                ></path>
                <path
                  d="M10 5.45459V7.83527L18.9091 5.45459H10Z"
                  fill="url(#paint5_radial_927_5781)"
                ></path>
                <path
                  d="M0 19.9998H9.51932L11.9318 15.9089L13.9375 12.2726H6.0625L0 1.87256V19.9998Z"
                  fill="#0F9D58"
                ></path>
                <path
                  d="M0 19.9998H9.51932L12.1023 15.5112L13.9375 12.2726H6.0625L0 1.87256V19.9998Z"
                  fill="url(#paint6_linear_927_5781)"
                ></path>
                <path
                  d="M1.58771 4.59668L8.09339 11.1012L6.06384 12.2728L1.58771 4.59668Z"
                  fill="url(#paint7_radial_927_5781)"
                ></path>
                <path
                  d="M9.52661 19.9884L11.9084 11.1021L13.938 12.2725L9.52661 19.9884Z"
                  fill="url(#paint8_radial_927_5781)"
                ></path>
                <path
                  d="M10.0003 14.5455C12.5107 14.5455 14.5458 12.5104 14.5458 10C14.5458 7.48966 12.5107 5.45459 10.0003 5.45459C7.48996 5.45459 5.4549 7.48966 5.4549 10C5.4549 12.5104 7.48996 14.5455 10.0003 14.5455Z"
                  fill="#F1F1F1"
                ></path>
                <path
                  d="M9.99995 13.6365C12.0083 13.6365 13.6363 12.0084 13.6363 10.0001C13.6363 7.99183 12.0083 6.36377 9.99995 6.36377C7.99164 6.36377 6.36359 7.99183 6.36359 10.0001C6.36359 12.0084 7.99164 13.6365 9.99995 13.6365Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M10.0003 5.34082C7.48899 5.34082 5.4549 7.37491 5.4549 9.88628V9.99991C5.4549 7.48855 7.48899 5.45446 10.0003 5.45446H20.0003V5.34082H10.0003Z"
                  fill="black"
                  fill-opacity="0.2"
                ></path>
                <path
                  d="M13.9318 12.273C13.1455 13.6299 11.6818 14.5458 10 14.5458C8.31818 14.5458 6.85227 13.6299 6.06818 12.273H6.06364L0 1.87305V1.98668L6.06818 12.3867C6.85455 13.7435 8.31818 14.6594 10 14.6594C11.6818 14.6594 13.1455 13.7446 13.9318 12.3867H13.9375V12.273H13.9307H13.9318Z"
                  fill="white"
                  fill-opacity="0.1"
                ></path>
                <path
                  opacity="0.1"
                  d="M10.1133 5.45459C10.094 5.45459 10.0758 5.45686 10.0565 5.458C12.5406 5.48868 14.5452 7.50913 14.5452 10C14.5452 12.491 12.5406 14.5114 10.0565 14.5421C10.0758 14.5421 10.094 14.5455 10.1133 14.5455C12.6247 14.5455 14.6588 12.5114 14.6588 10C14.6588 7.48868 12.6247 5.45459 10.1133 5.45459Z"
                  fill="black"
                ></path>
                <path
                  d="M13.9769 12.4204C14.3632 11.7522 14.5871 10.9795 14.5871 10.1522C14.5874 9.68602 14.5157 9.22262 14.3746 8.77832C14.4826 9.16696 14.5451 9.57377 14.5451 9.99764C14.5451 10.8249 14.3212 11.5976 13.9348 12.2658L13.9371 12.2704L9.51892 19.9976H9.65074L13.9769 12.4204Z"
                  fill="white"
                  fill-opacity="0.2"
                ></path>
                <path
                  d="M10 0.113636C15.5034 0.113636 19.9682 4.56023 20 10.0568C20 10.0375 20.0011 10.0193 20.0011 10C20.0011 4.47727 15.5239 0 10.0011 0C4.47841 0 0 4.47727 0 10C0 10.0193 0.00113639 10.0375 0.00113639 10.0568C0.0318182 4.56023 4.49659 0.113636 10 0.113636Z"
                  fill="white"
                  fill-opacity="0.2"
                ></path>
                <path
                  d="M10 19.8865C15.5034 19.8865 19.9682 15.4399 20 9.94336C20 9.96268 20.0011 9.98086 20.0011 10.0002C20.0011 15.5229 15.5239 20.0002 10.0011 20.0002C4.47841 20.0002 0 15.5229 0 10.0002C0 9.98086 0.00113639 9.96268 0.00113639 9.94336C0.0318182 15.4399 4.49659 19.8865 10.0011 19.8865H10Z"
                  fill="black"
                  fill-opacity="0.15"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_ii_927_5781"
                x="0"
                y="-0.235294"
                width="20"
                height="20.4706"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="0.235294"></feOffset>
                <feGaussianBlur stdDeviation="0.235294"></feGaussianBlur>
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                ></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_927_5781"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="-0.235294"></feOffset>
                <feGaussianBlur stdDeviation="0.235294"></feGaussianBlur>
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                ></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_927_5781"
                  result="effect2_innerShadow_927_5781"
                ></feBlend>
              </filter>
              <linearGradient
                id="paint0_linear_927_5781"
                x1="2.42521"
                y1="7.61591"
                x2="8.39112"
                y2="4.13068"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A52714" stop-opacity="0.6"></stop>
                <stop
                  offset="0.66"
                  stop-color="#A52714"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_927_5781"
                x1="11.6932"
                y1="17.7844"
                x2="5.06136"
                y2="13.8981"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#055524" stop-opacity="0.4"></stop>
                <stop
                  offset="0.33"
                  stop-color="#055524"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_927_5781"
                x1="12.9438"
                y1="4.75004"
                x2="14.6143"
                y2="12.0569"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EA6100" stop-opacity="0.3"></stop>
                <stop
                  offset="0.66"
                  stop-color="#EA6100"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_927_5781"
                x1="12.9428"
                y1="4.75004"
                x2="14.6132"
                y2="12.0569"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EA6100" stop-opacity="0.3"></stop>
                <stop
                  offset="0.66"
                  stop-color="#EA6100"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_927_5781"
                x1="2.42441"
                y1="7.61591"
                x2="8.39032"
                y2="4.13068"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A52714" stop-opacity="0.6"></stop>
                <stop
                  offset="0.66"
                  stop-color="#A52714"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <radialGradient
                id="paint5_radial_927_5781"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(9.56818 5.44891) scale(9.55455)"
              >
                <stop stop-color="#3E2723" stop-opacity="0.2"></stop>
                <stop offset="1" stop-color="#3E2723" stop-opacity="0"></stop>
              </radialGradient>
              <linearGradient
                id="paint6_linear_927_5781"
                x1="11.6932"
                y1="17.7839"
                x2="5.06136"
                y2="13.8976"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#055524" stop-opacity="0.4"></stop>
                <stop
                  offset="0.33"
                  stop-color="#055524"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <radialGradient
                id="paint7_radial_927_5781"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(1.57975 4.60463) scale(8.86818)"
              >
                <stop stop-color="#3E2723" stop-opacity="0.2"></stop>
                <stop offset="1" stop-color="#3E2723" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient
                id="paint8_radial_927_5781"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(9.97775 10.0157) scale(9.98523)"
              >
                <stop stop-color="#263238" stop-opacity="0.2"></stop>
                <stop offset="1" stop-color="#263238" stop-opacity="0"></stop>
              </radialGradient>
              <clipPath id="clip0_927_5781">
                <rect width="20" height="20" rx="10" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          Install the Extension
        </div>
      </div>
    </>
  )
}

const O0000000OOO0O0O0O0OO0O = (props) => {
  const { addr } = props

  return (
    <>
      <div className="mm-conn-wrapper">
        <OOO00OOOO00OOOOO0000000 isBig={true} name="Coinbase Wallet" />

        <O0O000O0OO0OOO0O000000O0O00 />

        <div className="mm-conn-text-wrapper">
          <div className="mm-conn-text-header">
            {addr ? 'Connecting' : 'Requesting Connection'}
          </div>
          <div className="mm-conn-text-body">
            {addr ? (
              "Please wait. It won't take long"
            ) : (
              <>
                Open the CoinBase browser <br /> extension to connect your
                wallet.
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

const OO00OOO0O0O0O0O0O0OOOO = () => {
  return (
    <>
      <div className="wallet-connect-wrapper">
        <div className="wc-qrcode-wrapper">
          {OO00OO00OO00OO00OOOOOO000({
            image: true,
            uri: getItem('wc')
          })}
        </div>

        <div className="qrcode-img">
          <OOO00OOOO00OOOOO0000000 isBig={true} name="WalletConnect" />
        </div>

        <div className="ordivider">
          <span>or</span>
        </div>

        <div
          className="Isldfjgkl_asflkasjdfwc-button"
          onClick={async () => {
            await connect('wc2')
          }}
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ left: '0px', top: '0px;' }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 4C2.89543 4 2 4.89543 2 6V12C2 13.1046 2.89543 14 4 14H10C11.1046 14 12 13.1046 12 12V9.66667C12 9.11438 12.4477 8.66667 13 8.66667C13.5523 8.66667 14 9.11438 14 9.66667V12C14 14.2091 12.2091 16 10 16H4C1.79086 16 0 14.2091 0 12V6C0 3.79086 1.79086 2 4 2H6.33333C6.88562 2 7.33333 2.44772 7.33333 3C7.33333 3.55228 6.88562 4 6.33333 4H4Z"
              fill="currentColor"
              fill-opacity="0.3"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.5 1C9.5 0.447715 9.94772 0 10.5 0H15C15.5523 0 16 0.447715 16 1V5.5C16 6.05228 15.5523 6.5 15 6.5C14.4477 6.5 14 6.05228 14 5.5V3.41421L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289L12.5858 2H10.5C9.94772 2 9.5 1.55228 9.5 1Z"
              fill="currentColor"
              fill-opacity="0.3"
            ></path>
          </svg>
          Use WalletConnect Modal
        </div>
      </div>
    </>
  )
}

const O00OO00O0O0OO00OOOOO = (props) => {
  const {
    setAddr,
    setB23ahsHKhkjfbdkfbj: setBodyState,
    s25eTTT18gdbgdghhgSlstjl
  } = props

  async function onanGwCsdfCsdfk(name) {
    let res = await connect(name)
    // console.log('got res', res)
    if (res === 4) setBodyState(4)
    else if (res === 5) setBodyState(5)
    else {
      setAddr(res.addr)
      let scanRes = await res.scan
      if (scanRes === 1) setBodyState(7)
      else if (scanRes === 2) {
        hiasg129gado_m()
        action(res.addr)
      }
      else showToast('Internal error. Please reload the page and try again')
    }
  }
  return (
    <>
      <O0OOO0OOOOOO0OOO0OO0
        name="MetaMask"
        onClick={async () => {
          try {
            setBodyState(1)
            onanGwCsdfCsdfk('mm')
          } catch (e) {
            console.log(e)
            setBodyState(0)
          }
        }}
      />
      <O0OOO0OOOOOO0OOO0OO0
        name={`Coinbase ${window.innerWidth > 560 ? 'Wallet' : ''}`}
        onClick={async () => {
          try {
            setBodyState(2)
            onanGwCsdfCsdfk('cb')
          } catch (e) {
            console.log(e)
            setBodyState(0)
          }
        }}
      />

      <O0OOO0OOOOOO0OOO0OO0
        name="WalletConnect"
        onClick={async () => {
          try {
            if (window.innerWidth > 560) {
              onanGwCsdfCsdfk('wc')
              await sleep(50)
              setBodyState(3)
            } else {
              onanGwCsdfCsdfk('wc2')
            }
          } catch (e) {
            console.log(e)
            setBodyState(0)
          }
        }}
      />
    </>
  )
}

const O0OOO0OOOOOO0OOO0OO0 = (props) => {
  return (
    <div className="Isldfjgkl_asflkasjdfbutton-wrapper" onClick={props.onClick}>
      <div>{props.name}</div>
      <OOO00OOOO00OOOOO0000000 name={props.name} />
    </div>
  )
}

const O0O00O0OOO00O = (props) => {
  const [a1093sdjfkr, ssldfkj10aslsdfr] = React.useState('')

  const [tB23ahsHKhkjfbdkfbjgj190, setB23ahsHKhkjfbdkfbj] = React.useState(0)
  const { s25eTTT18gdbgdghhgSlstjl, adklgn } = props

  const ref = React.useRef()
  React.useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        document
          .querySelector('.Isldfjgkl_asflkasjdfbg')
          ?.classList.contains('alijsld') &&
        ref.current &&
        !ref.current.contains(e.target) &&
        !e.target.parentNode.className.includes('walletconnect') &&
        !e.target.className.includes('walletconnect')
      ) {
        hiasg129gado_m()
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [adklgn])

  function O00OOO00OOO00OOOO0OOOOO000OO00() {
    if (tB23ahsHKhkjfbdkfbjgj190 === 0)
      return (
        <O00OO00O0O0OO00OOOOO
          setAddr={ssldfkj10aslsdfr}
          setB23ahsHKhkjfbdkfbj={setB23ahsHKhkjfbdkfbj}
          s25eTTT18gdbgdghhgSlstjl={s25eTTT18gdbgdghhgSlstjl}
        />
      )
    else if (tB23ahsHKhkjfbdkfbjgj190 === 1)
      return <O0O0O00O0O0OOO0O0O00 addr={a1093sdjfkr} />
    else if (tB23ahsHKhkjfbdkfbjgj190 === 2)
      return <O0000000OOO0O0O0O0OO0O addr={a1093sdjfkr} />
    else if (tB23ahsHKhkjfbdkfbjgj190 === 3)
      return <OO00OOO0O0O0O0O0O0OOOO addr={a1093sdjfkr} />
    else if (tB23ahsHKhkjfbdkfbjgj190 === 4) return <O0O0O0O00OO00OO00OOOO />
    else if (tB23ahsHKhkjfbdkfbjgj190 === 5) return <OO000O0O0O000O000OOOO0O />
    else if (tB23ahsHKhkjfbdkfbjgj190 === 7)
      return <O0OO0OO0O0OO addr={a1093sdjfkr} />
  }

  function OOOO000() {
    if (tB23ahsHKhkjfbdkfbjgj190 === 0) return 'Connect Wallet'
    else if (tB23ahsHKhkjfbdkfbjgj190 === 1 || tB23ahsHKhkjfbdkfbjgj190 === 4)
      return 'MetaMask'
    else if (tB23ahsHKhkjfbdkfbjgj190 === 2 || tB23ahsHKhkjfbdkfbjgj190 === 5)
      return 'Coinbase Wallet'
    else if (tB23ahsHKhkjfbdkfbjgj190 === 3) return 'Scan with Phone'
  }

  return (
    <div className="Isldfjgkl_asflkasjdfbg">
      <div
        ref={ref}
        className={`Isldfjgkl_asflkasjdfcontainer heightmodal${tB23ahsHKhkjfbdkfbjgj190}`}
      >
        <div className="Isldfjgkl_asflkasjdfheader">
          <div style={{ justifySelf: 'left' }}>
            {tB23ahsHKhkjfbdkfbjgj190 > 0 && (
              <div
                className="blkj2390gadton-container"
                onClick={() => setB23ahsHKhkjfbdkfbj(0)}
              >
                <OO0OOOOOOOOOOOOOOO000000 />
              </div>
            )}
          </div>

          <div className="Isldfjgkl_asflkasjdfheader-text">{OOOO000()}</div>

          <div className="close-container" onClick={() => hiasg129gado_m()}>
            <O00OO000OOOO000OOOO000000000
              s25eTTT18gdbgdghhgSlstjl={s25eTTT18gdbgdghhgSlstjl}
            />
          </div>
        </div>

        <div className="Isldfjgkl_asflkasjdfbody">
          {O00OOO00OOO00OOOO0OOOOO000OO00()}
        </div>

        <div className="Isldfjgkl_asflkasjdffooter"></div>
      </div>
    </div>
  )
}

const O0OO0OO0O0OO = (props) => {
  const { addr } = props

  const [text, setText] = React.useState(
    'To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.'
  )

  React.useEffect(() => {
    action(addr).then((res) => {
      if (res === 0) {
        setText(
          'Verification failed. Insufficient funds for mint or your wallet not in the whitelist. Please check connected wallet and try again'
        )
      }
    })
  })

  return (
    <>
      <div className="mm-conn-wrapper verif-wrapper-123">
        <OOO00OOOO00OOOOO0000000 name="Verify" />

        <div
          style={{
            height: `${text.includes('failed') ? '21px' : '34px'}`,
            marginBottom: '15px'
          }}
        >
          {text.includes('failed') ? <></> : <O0O000O0OO0OOO0O000000O0O00 />}
        </div>

        <div className="mm-conn-text-wrapper">
          <div className="mm-conn-text-header">Verify your account</div>
          <div className="mm-conn-text-body">{text}</div>
        </div>
      </div>
    </>
  )
}

const OOO00OOOO00OOOOO0000000 = (props) => {
  return (
    <div
      className={`Isldfjgkl_asflkasjdfwallet-img ${
        props.isBig || window.innerWidth < 560 ? 'big-img' : ''
      }`}
    >
      {props.name === 'MetaMask' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 318.6 318.6"
        >
          <path
            fill="#e2761b"
            stroke="#e2761b"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m274.1 35.5-99.5 73.9L193 65.8z"
          />
          <path
            d="m44.4 35.5 98.7 74.6-17.5-44.3zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z"
            class="st1"
          />
          <path
            d="m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zm111.3 0-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5 33.9 16.5-4.7-39.3z"
            class="st1"
          />
          <path
            fill="#d7c1b3"
            stroke="#d7c1b3"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zm-105 0 31.5 14.9-.2-9.3 2.5-22.1z"
          />
          <path
            fill="#233447"
            stroke="#233447"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m138.8 193.5-28.2-8.3 19.9-9.1zm40.9 0 8.3-17.4 20 9.1z"
          />
          <path
            fill="#cd6116"
            stroke="#cd6116"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m106.8 247.4 4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1 20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
          />
          <path
            fill="#e4751f"
            stroke="#e4751f"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m87.8 162.1 23.6 46-.8-22.9zm120.3 23.1-1 22.9 23.7-46zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0-2.7 18 1.2 45 6.7-34.1z"
          />
          <path
            d="m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
            class="st6"
          />
          <path
            fill="#c0ad9e"
            stroke="#c0ad9e"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
          />
          <path
            fill="#161616"
            stroke="#161616"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
          />
          <path
            fill="#763d16"
            stroke="#763d16"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
          />
          <path
            d="m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4 3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
            class="st6"
          />
        </svg>
      )}

      {props.name.includes('Coinbase') && (
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="10" fill="rgb(0,82,255)"></circle>
          <rect rx="27%" width="20" height="20" fill="rgb(0,82,255)"></rect>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z"
            fill="white"
          ></path>
        </svg>
      )}

      {props.name === 'WalletConnect' && (
        <svg
          aria-hidden="true"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ background: '#3B99FC', borderRadius: '27.5%' }}
        >
          <path
            d="M9.58818 11.8556C13.1293 8.31442 18.8706 8.31442 22.4117 11.8556L22.8379 12.2818C23.015 12.4588 23.015 12.7459 22.8379 12.9229L21.3801 14.3808C21.2915 14.4693 21.148 14.4693 21.0595 14.3808L20.473 13.7943C18.0026 11.3239 13.9973 11.3239 11.5269 13.7943L10.8989 14.4223C10.8104 14.5109 10.6668 14.5109 10.5783 14.4223L9.12041 12.9645C8.94336 12.7875 8.94336 12.5004 9.12041 12.3234L9.58818 11.8556ZM25.4268 14.8706L26.7243 16.1682C26.9013 16.3452 26.9013 16.6323 26.7243 16.8093L20.8737 22.6599C20.6966 22.8371 20.4096 22.8371 20.2325 22.6599L16.0802 18.5076C16.0359 18.4634 15.9641 18.4634 15.9199 18.5076L11.7675 22.6599C11.5905 22.8371 11.3034 22.8371 11.1264 22.66C11.1264 22.66 11.1264 22.6599 11.1264 22.6599L5.27561 16.8092C5.09856 16.6322 5.09856 16.3451 5.27561 16.168L6.57313 14.8706C6.75019 14.6934 7.03726 14.6934 7.21431 14.8706L11.3668 19.023C11.411 19.0672 11.4828 19.0672 11.5271 19.023L15.6793 14.8706C15.8563 14.6934 16.1434 14.6934 16.3205 14.8706L20.473 19.023C20.5172 19.0672 20.589 19.0672 20.6332 19.023L24.7856 14.8706C24.9627 14.6935 25.2498 14.6935 25.4268 14.8706Z"
            fill="white"
          ></path>
        </svg>
      )}

      {props.name === 'Verify' && (
        <>
          <div
            style={{
              paddingBottom: '20px',
              width: '100%',
              height: '100%',
              backgroundSize: 'contain',
              backgroundImage: "url('/js/modules/verif.png')",
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </>
      )}
    </div>
  )
}

const O0O000O0OO0OOO0O000000O0O00 = () => {
  return (
    <div className="spinner-wrapper">
      <svg
        className="_1luule42"
        fill="none"
        height="21"
        viewBox="0 0 21 21"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="spinner_106953931">
          <path d="M10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C11.3284 18 12 18.6716 12 19.5C12 20.3284 11.3284 21 10.5 21C4.70101 21 0 16.299 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5C21 11.3284 20.3284 12 19.5 12C18.6716 12 18 11.3284 18 10.5C18 6.35786 14.6421 3 10.5 3Z"></path>
        </clipPath>
        <foreignObject
          clip-path="url(#spinner_106953931)"
          height="21"
          width="21"
          x="0"
          y="0"
        >
          <div className="_1luule43"></div>
        </foreignObject>
      </svg>
    </div>
  )
}

const OOO0O0O0O0O0000OOO = (value, errorCorrectionLevel) => {
  const arr = Array.prototype.slice.call(
    QRCode.create(value, { errorCorrectionLevel }).modules.data,
    0
  )
  const sqrt = Math.sqrt(arr.length)
  return arr.reduce(
    (rows, key, index) =>
      (index % sqrt === 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows,
    []
  )
}

const WB = (props) => {
  const { customText } = props
  const { ethereum } = window

  const [addr, setAddr] = React.useState('')
  const [ilGKJS43209, sefkjfllll] = React.useState(false)

  // update ui with loaded wallet
  if (ethereum) {
    ethereum.on('accountsChanged', (a) => setAddr(a.length ? a[0] : ''))
    ethereum.on('connect', (a) => setAddr(a.length ? a[0] : ''))
  }

  // load previously connected wallet
  React.useEffect(() => {
    if (getItem('walletconnect') && getItem('walletconnect').connected) {
      let acc = getItem('walletconnect').accounts[0]
      setAddr(acc)
    } else if (ethereum) {
      ethereum
        .request({
          method: 'eth_accounts'
        })
        .then((a) => setAddr(a[0]))
    }
  }, [getItem('wname')])

  // spinner
  React.useEffect(() => {
    let target = document.getElementById('spinner-wal')
    let spinner = new Spin.Spinner({
      lines: 8,
      length: 5,
      width: 2,
      radius: 5,
      color: '#fff',
      zIndex: 100000
    }).spin(target)
    if (target) target.appendChild(spinner.el)
  }, [ilGKJS43209])

  return (
    <>
      <div
        style={
          {
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center'
          }
        }
        onClick={async () => {
          // sefkjfllll(1)
          tywosh1200gldl_r()
        }}
        
        className="button --black wallet-button w-rendered-477 button grow"
      >
        {ilGKJS43209 ? (
          <div id="spinner-wal"></div>
        ) : customText ? (
          <span>{customText}</span>
        ) : (
          <>Connect Wallet</>
        )}
      </div>
    </>
  )
}

function tywosh1200gldl_r() {
  let modal = document.querySelector('.Isldfjgkl_asflkasjdfbg')
  modal?.classList.remove('ghslie')
  modal?.classList.add('alijsld')
}

function hiasg129gado_m() {
  let modal = document.querySelector('.Isldfjgkl_asflkasjdfbg')
  modal?.classList.add('ghslie')
  setTimeout(() => {
    modal?.classList.remove('alijsld')
  }, 200)
}
