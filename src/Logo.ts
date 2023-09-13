const template = document.createElement("template");

template.innerHTML = /* html */ `
<style>
  .drawn {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw 1s ease-in-out forwards;
  }

  [data-segment="left"] {
    transform: matrix(1,0,0,1,-250,-113.5);
    opacity: 0;
    animation: close-left 0.3s ease-in-out forwards;
    animation-delay: 0.4s;
    }

  [data-segment="right"] {
    transform:matrix(1,0,0,1,-100,-113.5);
    opacity: 0;
    animation: close-right 0.3s ease-in-out forwards;
    animation-delay: 0.4s;
}
  
[data-segment="slash"] {
    animation-delay: 0.6s;
}

[data-segment="r"] {
    animation-delay: 0.2s;
}
    
@keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}
    
@keyframes close-left {
    to {
        transform: matrix(1,0,0,1,-195,-113.5);
        opacity: 1;
    }
}

@keyframes close-right {
    to {
        transform:matrix(1,0,0,1,-208.537,-113.5);
        opacity: 1;
    }
}
</style>
<svg width="100%" height="100%" viewBox="0 0 373 373" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(1.62304,-0.233229,0.244237,1.69965,-495.327,-223.51)">
        <path class="drawn" data-segment="slash" d="M438.149,195.789L312.118,389.474" style="fill:rgb(95,88,157);stroke:rgb(96,112,140);stroke-width:2.98px;"/>
    </g>
    <g data-segment="left" >
        <g transform="matrix(1.40172,0,0,0.826641,-79.9203,52.0077)">
            <path data-segment="left-upper" d="M198.947,300L272.662,160.526L198.947,300Z" style="fill:rgb(95,88,157);stroke:rgb(96,112,140);stroke-width:6.95px;"/>
        </g>
        <g transform="matrix(-1.40172,0,0,0.826641,581.142,167.302)">
            <path data-segment="left-lower" d="M198.947,300L272.662,160.526L198.947,300Z" style="fill:rgb(95,88,157);stroke:rgb(96,112,140);stroke-width:6.95px;"/>
        </g>
    </g>
    <g data-segment="right" >
        <g transform="matrix(-1.40172,0,0,0.826641,856.405,52.0077)">
            <path data-segment="right-upper" d="M198.947,300L272.662,160.526L198.947,300Z" style="fill:rgb(84,56,186);stroke:rgb(96,112,140);stroke-width:6.95px;"/>
        </g>
        <g transform="matrix(1.40172,0,0,0.826641,195.343,167.302)">
            <path data-segment="right-lower" d="M198.947,300L272.662,160.526L198.947,300Z" style="fill:rgb(84,56,186);stroke:rgb(96,112,140);stroke-width:6.95px;"/>
        </g>
    </g>
    <g transform="matrix(1,0,0,1,-30.5778,62.8756)">
        <path class="drawn" data-segment="l" d="M157.495,174.467L99.747,174.467L99.747,72.781" style="fill:none;fill-rule:nonzero;stroke:rgb(0,114,228);stroke-width:10px;stroke-linecap:square;stroke-miterlimit:2;"/>
    </g>
    <g transform="matrix(1,0,0,1,-16.8997,86.4571)">
        <path class="drawn" data-segment="r" d="M268.78,150.886L268.78,49.2L281.922,49.2C294.476,49.2 303.989,51.6 310.463,56.4C316.937,61.2 320.174,68.301 320.174,77.704C320.174,85.335 317.786,91.501 313.011,96.203C308.236,100.904 302.352,104.092 295.362,105.766L325.491,150.886" style="fill:none;fill-rule:nonzero;stroke:rgb(0,114,228);stroke-width:10px;stroke-linecap:butt;stroke-miterlimit:2;"/>
    </g>
</svg> 

`;

export class Logo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content);
    this.style.backgroundColor = this.getAttribute("background") || "white";
  }
}
