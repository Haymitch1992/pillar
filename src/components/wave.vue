<template>
  <div class="wave">
    <svg
      class="svg-container wave-1"
      width="200px"
      height="200px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="wave">
        <path
          id="wave-2"
          fill="rgba(118, 218, 255,1)"
          d="M 0 100 C 133.633 85.12 51.54 116.327 200 100 A 95 95 0 0 1 0 100 Z"
        >
          <animate
            dur="2s"
            repeatCount="indefinite"
            attributeName="d"
            attributeType="XML"
            values="M0 100 C90 28, 92 179, 200 100 A95 95 0 0 1 0 100 Z;
                                        M0 100 C145 100, 41 100, 200 100 A95 95 0 0 1 0 100 Z;
                                        M0 100 C90 28, 92 179, 200 100 A95 95 0 0 1 0 100 Z;
                                     "
          ></animate>
        </path>
      </g>
    </svg>
    <svg
      class="svg-container wave-2"
      width="200px"
      height="200px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="wave">
        <path
          id="wave-2"
          fill="rgba(118, 218, 255,1)"
          d="M 0 100 C 133.633 85.12 51.54 116.327 200 100 A 95 95 0 0 1 0 100 Z"
        >
          <animate
            dur="2s"
            repeatCount="indefinite"
            attributeName="d"
            attributeType="XML"
            values="M0 100 C90 28, 92 179, 200 100 A95 95 0 0 1 0 100 Z;
                                      M0 100 C145 100, 41 100, 200 100 A95 95 0 0 1 0 100 Z;
                                      M0 100 C90 28, 92 179, 200 100 A95 95 0 0 1 0 100 Z;
                                   "
          ></animate>
        </path>
      </g>
    </svg>
    <svg
      class="svg-container wave-3"
      width="200px"
      height="200px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="wave">
        <path
          id="wave-2"
          fill="rgba(118, 218, 255,1)"
          d="M 0 100 C 133.633 85.12 51.54 116.327 200 100 A 95 95 0 0 1 0 100 Z"
        >
          <animate
            dur="2s"
            repeatCount="indefinite"
            attributeName="d"
            attributeType="XML"
            values="M0 100 C90 28, 92 179, 200 100 A95 95 0 0 1 0 100 Z;
                    M0 100 C145 100, 41 100, 200 100 A95 95 0 0 1 0 100 Z;
                    M0 100 C90 28, 92 179, 200 100 A95 95 0 0 1 0 100 Z;"
          ></animate>
        </path>
      </g>
    </svg>
    <svg
      class="svg-container wave-4"
      width="200px"
      height="200px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="wave">
        <path
          id="wave-2"
          fill="rgba(118, 218, 255,1)"
          d="M 0 100 C 133.633 85.12 51.54 116.327 200 100 A 95 95 0 0 1 0 100 Z"
        >
          <animate
            dur="2s"
            repeatCount="indefinite"
            attributeName="d"
            attributeType="XML"
            values="M0 100 C90 28, 92 179, 200 100 A95 95 0 0 1 0 100 Z;
                    M0 100 C145 100, 41 100, 200 100 A95 95 0 0 1 0 100 Z;
                    M0 100 C90 28, 92 179, 200 100 A95 95 0 0 1 0 100 Z;"
          ></animate>
        </path>
      </g>
    </svg>
    <div class="wave-container"></div>
    <div class="cover-icon cover-icon-1"></div>
    <div class="cover-icon cover-icon-2"></div>
    <div class="cover-icon cover-icon-3"></div>
  </div>
</template>
<style>
.wave {
  width: 620px;
  height: 300px;
  overflow: hidden;
  position: relative;
}
.svg-container {
  display: block;
  position: absolute;
}
.cover-icon {
  width: 0;
  height: 0;
  position: absolute;
  top: 91px;
  border: 10px solid transparent;
  border-bottom: 32px solid rgba(118, 218, 255, 1);
  display: block;
  box-sizing: border-box;
}
.cover-icon-1 {
  left: 140px;
}
.cover-icon-2 {
  left: 340px;
}
.cover-icon-3 {
  left: 540px;
}
.wave-1 {
  left: -50px;
  top: 0;
}
.wave-2 {
  left: 150px;
  top: 0;
}
.wave-3 {
  left: 350px;
  top: 0;
}
.wave-4 {
  left: 550px;
  top: 0;
}
.wave-container {
  background: rgba(118, 218, 255, 1);
  width: 620px;
  height: 300px;
  display: block;
  position: relative;
  top: 130px;
}
</style>
