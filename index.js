const { parseHTML } = require('symbols-coding-test')


const html = `<div style="background-color: yellow; font-size: 14px" id="first-div">
    Hello, friends
    <p class="para" style="font-family: monospace; font-size: 11px">
      Lorem ipsum dolor sit
    </p>
    <footer style="width: auto; height: 100px; color: blue">
      <span>
        This is the end
      </span>
    </footer>
  </div>`;


console.log(parseHTML(html))
