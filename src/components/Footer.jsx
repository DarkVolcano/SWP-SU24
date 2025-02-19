import React from "react";
import "../css/Home.css";

const Footer = () => {
  return (
    <div>
      <div
        className="footer"
        style={{ padding: "40px 100px", backgroundColor: "#219A68" }}
      >
        <div
          style={{ display: "inline-flex", width: "-webkit-fill-available" }}
        >
          <div className="support col-sm-3">
            <h3>Hỗ trợ</h3>
            <div className="link">
              <a href="index.html" className="sp">
                Trung tâm hỗ trợ
              </a>
              <br></br>
              <a href="index.html" className="sp">
                Hỗ trợ đặt lịch
              </a>
              <br></br>
              <a href="index.html" className="sp">
                Hỗ trợ hủy lịch
              </a>
              <br></br>
            </div>
          </div>

          <div className="company col-sm-3">
            <h3>Công ty</h3>
            <div className="link">
              <a href="index.html" className="cp">
                Giới thiệu
              </a>
              <br></br>
              <a href="index.html" className="cp">
                Chính sách
              </a>
              <br></br>
              <a href="index.html" className="cp">
                Dịch vụ
              </a>
              <br></br>
            </div>
          </div>

          <div className="contact col-sm-3">
            <h3>Liên hệ</h3>
            <div className="link">
              <a href="index.html" className="ct">
                FAQ
              </a>
              <br></br>
              <a href="index.html" className="ct">
                Liên lạc
              </a>
              <br></br>
              <a href="index.html" className="ct">
                Đối tác
              </a>
              <br></br>
            </div>
          </div>

          <div className="social col-sm-3">
            <h3>Xã hội</h3>
            <div className="">
              <svg
                width="25"
                height="25"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 16C32 7.16337 24.8366 0 16 0C7.16337 0 0 7.16337 0 16C0 23.9864 5.85189 30.6071 13.5037 31.8101V20.6218H9.44262V16H13.5037V12.4726C13.5037 8.4658 15.8915 6.24986 19.5455 6.24986C21.3002 6.24986 23.1272 6.56642 23.1272 6.56642V10.5008H21.1102C19.1204 10.5008 18.5054 11.7309 18.5054 12.9972V16H22.9463L22.2408 20.6218H18.5144V31.801C26.1481 30.6071 32 23.9864 32 16Z"
                  fill="#3430DB"
                />
                <path
                  d="M22.2315 20.622L22.937 16.0001H18.4961V12.9973C18.4961 11.7311 19.1202 10.501 21.101 10.501H23.1179V6.56656C23.1179 6.56656 21.2909 6.25 19.5362 6.25C15.8822 6.25 13.4944 8.46594 13.4944 12.4727V16.0001H9.43335V20.622H13.4944V31.8012C14.3084 31.9278 15.1405 32.0001 15.9907 32.0001C16.8409 32.0001 17.673 31.9368 18.4871 31.8012V20.622H22.2315Z"
                  fill="#219A68"
                />
              </svg>
              <svg
                width="25"
                height="25"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16345 0 0 7.16344 0 16C0 24.8366 7.16345 32 16 32Z"
                  fill="#3430DB"
                />
                <path
                  d="M24.8459 10.5187C24.2942 10.772 23.6792 10.9257 23.0822 11.0252C23.3626 10.98 23.7787 10.4644 23.9505 10.2564C24.2038 9.93985 24.4208 9.57806 24.5384 9.18914C24.5565 9.16201 24.5655 9.11679 24.5384 9.0987C24.5022 9.08061 24.4751 9.08966 24.448 9.10774C23.7787 9.46953 23.0913 9.72278 22.3586 9.91272C22.2953 9.93081 22.2501 9.91272 22.2139 9.87654C22.1506 9.80418 22.0964 9.74087 22.033 9.6866C21.7255 9.42431 21.3909 9.21628 21.02 9.06252C20.5316 8.86354 19.998 8.78214 19.4644 8.80927C18.9488 8.84545 18.4423 8.99016 17.9901 9.22532C17.5288 9.46048 17.1218 9.79514 16.7962 10.1931C16.4615 10.6092 16.2083 11.0976 16.0817 11.6131C15.955 12.1106 15.9731 12.608 16.0455 13.1145C16.0545 13.1959 16.0455 13.214 15.9731 13.1959C13.0969 12.7708 10.7182 11.7397 8.78261 9.53284C8.70121 9.43335 8.65598 9.43335 8.58363 9.54188C7.73343 10.8081 8.14948 12.8522 9.20771 13.8471C9.35242 13.9828 9.49714 14.1185 9.6509 14.2361C9.59663 14.2451 8.89115 14.1728 8.26706 13.8471C8.18566 13.7929 8.14044 13.82 8.13139 13.9195C8.12235 14.0552 8.13139 14.1818 8.15853 14.3356C8.32133 15.6199 9.20771 16.8138 10.4287 17.2751C10.5735 17.3384 10.7363 17.3926 10.89 17.4198C10.6096 17.4831 10.3292 17.5283 9.53332 17.465C9.43383 17.4469 9.39765 17.4921 9.43383 17.5916C10.0308 19.2197 11.3242 19.7081 12.2919 19.9885C12.4186 20.0066 12.5542 20.0066 12.6809 20.0427C12.6718 20.0518 12.6628 20.0518 12.6537 20.0699C12.3281 20.5583 11.2156 20.9201 10.7001 21.101C9.75943 21.4266 8.72834 21.5803 7.73343 21.4808C7.57062 21.4537 7.54349 21.4628 7.49827 21.4808C7.45304 21.508 7.48922 21.5441 7.54349 21.5894C7.74247 21.725 7.9505 21.8426 8.15853 21.9512C8.79165 22.2858 9.45191 22.5571 10.1393 22.7471C13.7029 23.733 17.7187 23.0094 20.3869 20.3503C22.4853 18.2609 23.2269 15.3847 23.2269 12.4995C23.2269 12.391 23.3626 12.3276 23.435 12.2643C23.9776 11.8573 24.4208 11.3599 24.8278 10.8172C24.9183 10.6906 24.9183 10.582 24.9183 10.5368C24.9183 10.5278 24.9183 10.5187 24.9183 10.5187C24.9092 10.4735 24.9092 10.4916 24.8459 10.5187Z"
                  fill="#219A68"
                />
              </svg>
              <svg
                width="25"
                height="25"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                  fill="#3430DB"
                />
                <path
                  d="M24.3117 14.1548C24.1489 14.1729 23.9861 14.1819 23.8233 14.1819C22.0234 14.1819 20.3411 13.2775 19.3462 11.767V19.9976C19.3462 23.3623 16.6238 26.0847 13.2592 26.0847C9.89456 26.0847 7.17212 23.3623 7.17212 19.9976C7.17212 16.633 9.89456 13.9106 13.2592 13.9106C13.3858 13.9106 13.5124 13.9196 13.639 13.9287V16.9315C13.5124 16.9134 13.3948 16.8953 13.2592 16.8953C11.5407 16.8953 10.1569 18.2882 10.1569 19.9976C10.1569 21.7161 11.5497 23.1 13.2592 23.1C14.9777 23.1 16.4881 21.7523 16.4881 20.0338L16.5152 6.05078H19.3824C19.6537 8.61946 21.725 10.6364 24.3027 10.8173L24.3117 14.1548Z"
                  fill="#219A68"
                />
              </svg>
              <svg
                width="25"
                height="25"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                  fill="#3430DB"
                />
                <path
                  d="M24.566 13.7117C24.566 11.5862 22.8475 9.86768 20.722 9.86768H10.8995C8.77403 9.86768 7.05554 11.5862 7.05554 13.7117V18.2882C7.05554 20.4137 8.77403 22.1322 10.8995 22.1322H20.722C22.8475 22.1322 24.566 20.4137 24.566 18.2882V13.7117ZM18.7865 16.3437L14.3817 18.5234C14.2099 18.6139 13.622 18.4872 13.622 18.2973V13.8202C13.622 13.6212 14.2099 13.4946 14.3908 13.5941L18.6056 15.8914C18.7865 15.9909 18.9674 16.2442 18.7865 16.3437Z"
                  fill="#219A68"
                />
              </svg>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="hotline">Hotline : 1234 4321</div>
          <div className="card">
            <svg
              width="278"
              height="30"
              viewBox="0 0 278 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{ position: "absolute", right: "48px" }}
            >
              <rect width="278" height="30" fill="url(#pattern0_75_1796)" />
              <defs>
                <pattern
                  id="pattern0_75_1796"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_75_1796"
                    transform="scale(0.00359712 0.0333333)"
                  />
                </pattern>
                <image
                  id="image0_75_1796"
                  width="278"
                  height="30"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
