import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="body">
      <div className="row1">
        <div className="box">
          <div className="title">ROOM</div>
          <div className="container">
            <div className="room">
              <svg
                width={50}
                height={30}
                viewBox="0 0 50 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 12.5V17.5H37.5V12.5C37.5 9.74219 39.7422 7.5 42.5 7.5H45C45 3.35938 41.6406 0 37.5 0H12.5C8.35938 0 5 3.35938 5 7.5H7.5C10.2578 7.5 12.5 9.74219 12.5 12.5ZM45 10H42.5C41.1172 10 40 11.1172 40 12.5V20H10V12.5C10 11.1172 8.88281 10 7.5 10H5C2.24219 10 0 12.2422 0 15C0 16.8438 1.01562 18.4375 2.5 19.3047V28.75C2.5 29.4375 3.0625 30 3.75 30H8.75C9.4375 30 10 29.4375 10 28.75V27.5H40V28.75C40 29.4375 40.5625 30 41.25 30H46.25C46.9375 30 47.5 29.4375 47.5 28.75V19.3047C48.9844 18.4375 50 16.8438 50 15C50 12.2422 47.7578 10 45 10Z"
                  fill="black"
                />
              </svg>
              <Link
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                  textTransform: "inherit",
                }}
                to="livingroom"
              >
                <p className="room-name">Living Room</p>
              </Link>
              <p className="room-device-quan">4 devices</p>
            </div>
            <div className="room">
              <svg
                width={50}
                height={30}
                viewBox="0 0 50 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.75 15C17.1961 15 20 12.1961 20 8.75C20 5.30391 17.1961 2.5 13.75 2.5C10.3039 2.5 7.5 5.30391 7.5 8.75C7.5 12.1961 10.3039 15 13.75 15ZM41.25 5H23.75C23.0594 5 22.5 5.55937 22.5 6.25V17.5H5V1.25C5 0.559375 4.44063 0 3.75 0H1.25C0.559375 0 0 0.559375 0 1.25V28.75C0 29.4406 0.559375 30 1.25 30H3.75C4.44063 30 5 29.4406 5 28.75V25H45V28.75C45 29.4406 45.5594 30 46.25 30H48.75C49.4406 30 50 29.4406 50 28.75V13.75C50 8.91719 46.0828 5 41.25 5Z"
                  fill="black"
                />
              </svg>
              <Link
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                  textTransform: "inherit",
                }}
                to="bedroom"
              >
                <p className="room-name">BedRoom</p>
              </Link>
              <p className="room-device-quan">4 devices</p>
            </div>
            <div className="room">
              <svg
                width={30}
                height={34}
                viewBox="0 0 30 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 11.9H10V0H6.66667V11.9H3.33333V0H0V11.9C0 15.504 2.76667 18.428 6.25 18.649V34H10.4167V18.649C13.9 18.428 16.6667 15.504 16.6667 11.9V0H13.3333V11.9ZM21.6667 6.8V20.4H25.8333V34H30V0C25.4 0 21.6667 3.808 21.6667 6.8Z"
                  fill="black"
                />
              </svg>
              <Link
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                  textTransform: "inherit",
                }}
                to="kitchen"
              >
                <p className="room-name">kitchen</p>
              </Link>
              <p className="room-device-quan">4 devices</p>
            </div>
            <div className="room">
              <svg
                width={43}
                height={38}
                viewBox="0 0 43 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.9844 19H6.71875V6.78571C6.71875 5.28904 7.92435 4.07143 9.40625 4.07143C10.3596 4.07143 11.1978 4.57569 11.6751 5.33357C10.29 7.47166 10.4416 10.3869 12.2494 12.3767C11.8987 12.7765 11.9117 13.3875 12.2906 13.7702L13.2408 14.7298C13.6344 15.1273 14.2725 15.1273 14.6661 14.7298L22.6471 6.66934C23.0407 6.27187 23.0407 5.62739 22.6471 5.22983L21.6969 4.27017C21.318 3.88745 20.7131 3.87439 20.3172 4.22852C18.8098 2.83159 16.7652 2.41088 14.9273 2.92524C13.7131 1.15925 11.6916 0 9.40625 0C5.70153 0 2.6875 3.04407 2.6875 6.78571V19H2.01562C0.902412 19 0 19.9114 0 21.0357V22.3929C0 23.5172 0.902412 24.4286 2.01562 24.4286H2.6875V27.1429C2.6875 29.5543 3.72571 31.7206 5.375 33.2116V35.9643C5.375 37.0886 6.27741 38 7.39062 38H8.73438C9.84759 38 10.75 37.0886 10.75 35.9643V35.2857H32.25V35.9643C32.25 37.0886 33.1524 38 34.2656 38H35.6094C36.7226 38 37.625 37.0886 37.625 35.9643V33.2116C39.2743 31.7206 40.3125 29.5543 40.3125 27.1429V24.4286H40.9844C42.0976 24.4286 43 23.5172 43 22.3929V21.0357C43 19.9114 42.0976 19 40.9844 19Z"
                  fill="black"
                />
              </svg>
              <Link
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                  textTransform: "inherit",
                }}
                to="bathroom"
              >
                <p className="room-name">bathroom</p>
              </Link>
              <p className="room-device-quan">4 devices</p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="title">DEVICE</div>
          <div className="container">
            <div className="device">
              <svg
                width={40}
                height={32}
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39 28H34V7.09058C34 5.38682 32.6544 3.99995 31 3.99995H24V7.99995H30V32H39C39.5525 32 40 31.5525 40 31V29C40 28.4475 39.5525 28 39 28ZM19.515 0.0630642L7.515 3.17182C6.62437 3.40245 6 4.2312 6 5.18245V28H1C0.4475 28 0 28.4475 0 29V31C0 31.5525 0.4475 32 1 32H22V2.07369C22 0.724941 20.7775 -0.264436 19.515 0.0630642ZM16.5 18C15.6719 18 15 17.1043 15 16C15 14.8956 15.6719 14 16.5 14C17.3281 14 18 14.8956 18 16C18 17.1043 17.3281 18 16.5 18Z"
                  fill="black"
                />
              </svg>
              <Link
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                  textTransform: "inherit",
                }}
                to="door"
              >
                <p className="device-name">Door</p>
              </Link>
            </div>
            <div className="device">
              <svg
                width={38}
                height={38}
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width={38} height={38} fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_28_108"
                      transform="scale(0.0416667)"
                    />
                  </pattern>
                  <image
                    id="image0_28_108"
                    width={24}
                    height={24}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJElEQVRIidWVP2vCUBTFf1vpomCtQ8HV6uIgVD+D7Vo/gpuUDgVRR7+VfxaDoy76ERycrA6ii7UE7oNHyHvmxQjtgQMh99xzbvLCDbhhCnjcEGfh3wy4A96BjEVzBA6Wehb4ANJhxYZMtwByBoNXoG6o5aTX92iFCTKaYGmawoC09KgBH7BMoYRVrbkHzIG9cAZ0gZRoqpr5IxdwD1TkugastMMNcqUNUpHeyHgGthZzxW/ROmMcwVxx5GpedDA/C0suAc0YAU3bflEitWc6MQI6Jj9PuzFJ4Am8EL9EzqCII4YO5gNioABsIphvRBsLL8DaYr4WzVXoWwL82tV4k/9A0Pwo6/t/4AloB5hPMsD/xk/a6/kBykkG+PiU9b0DvqJ2/QK/r7uVyh30zAAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
              <Link
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                  textTransform: "inherit",
                }}
                to="light"
              >
                <p className="device-name">light</p>
              </Link>
            </div>
            <div className="device">
              <svg
                width={35}
                height={35}
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.4375 0C24.8213 0 21.875 2.94629 21.875 6.5625C21.875 10.1787 24.8213 13.125 28.4375 13.125C32.0537 13.125 35 10.1787 35 6.5625C35 2.94629 32.0537 0 28.4375 0ZM28.4375 8.75C27.2275 8.75 26.25 7.77246 26.25 6.5625C26.25 5.35254 27.2275 4.375 28.4375 4.375C29.6475 4.375 30.625 5.35254 30.625 6.5625C30.625 7.77246 29.6475 8.75 28.4375 8.75ZM17.5 7.65625C17.5 3.4248 14.0752 0 9.84375 0C5.6123 0 2.1875 3.4248 2.1875 7.65625V19.0381C0.84082 20.7266 0 22.832 0 25.1562C0 30.5908 4.40918 35 9.84375 35C15.2783 35 19.6875 30.5908 19.6875 25.1562C19.6875 22.832 18.8467 20.7197 17.5 19.0381V7.65625ZM9.84375 30.625C6.8291 30.625 4.375 28.1709 4.375 25.1562C4.375 23.4131 5.20898 21.8135 6.5625 20.7949V7.65625C6.5625 5.84473 8.03223 4.375 9.84375 4.375C11.6553 4.375 13.125 5.84473 13.125 7.65625V20.7949C14.4785 21.8066 15.3125 23.4131 15.3125 25.1562C15.3125 28.1709 12.8584 30.625 9.84375 30.625ZM10.9375 22.0732V20.7812C10.9375 20.1797 10.4453 19.6875 9.84375 19.6875C9.24219 19.6875 8.75 20.1797 8.75 20.7812V22.0732C7.47852 22.5244 6.5625 23.7275 6.5625 25.1562C6.5625 26.9678 8.03223 28.4375 9.84375 28.4375C11.6553 28.4375 13.125 26.9678 13.125 25.1562C13.125 23.7275 12.209 22.5244 10.9375 22.0732Z"
                  fill="black"
                />
              </svg>
              <Link
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                  textTransform: "inherit",
                }}
                to="temperature"
              >
                <p className="device-name">temperature</p>
              </Link>
            </div>
            <div className="device">
              <svg
                width={30}
                height={36}
                viewBox="0 0 30 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.6125 10.5332L15 0L4.3875 10.5332C1.58781 13.3257 0.0108827 17.1047 0 21.0477C0 24.7762 1.4625 28.7098 4.3875 31.6181C5.77934 33.007 7.43326 34.109 9.2544 34.861C11.0755 35.6129 13.0281 36 15 36C16.9719 36 18.9245 35.6129 20.7456 34.861C22.5667 34.109 24.2207 33.007 25.6125 31.6181C28.5375 28.7098 30 24.7762 30 21.0477C30 17.3191 28.5375 13.4414 25.6125 10.5332ZM3.75 21.7188C3.76875 17.9903 4.9125 15.6226 7.05 13.516L15 5.44368L22.95 13.6092C25.0875 15.6972 26.2313 17.9903 26.25 21.7188H3.75Z"
                  fill="black"
                />
              </svg>
              <Link
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                  textTransform: "inherit",
                }}
                to="humidity"
              >
                <p className="device-name">humidity</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="title">OVERVIEW</div>
        <div className="container">
          <div className="box">
            <div className="title">Heating</div>
            <div className="content" />
          </div>
          <div className="box">
            <div className="title">Lighting</div>
            <div className="content" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
