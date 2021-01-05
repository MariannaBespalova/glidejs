import React from "react";
import GlideJS from "./GlideJS";

class MySlider extends React.Component {

  render() {
    return (
      <GlideJS options={{ autoplay: 1500, type: "carousel", perView: 3, hoverpause: true, gap: 10 }}>
        <img src="https://s.zagranitsa.com/images/articles/4671/426x270/f25ac938093e37caed295d48a257e0b5.jpg?1476098035" alt="" />
        <img src="https://s.zagranitsa.com/images/articles/4671/426x270/b2b156d1384b0b66263d30abd140b013.jpg?1476098035" alt="" />
        <img src="https://s.zagranitsa.com/images/articles/4671/426x270/f6e9b81ceded8fd19bb8764f0cf4750a.jpg?1476098035" alt="" />
        <img src="https://s.zagranitsa.com/images/articles/4671/426x270/d4e1a2666699b0ecd9930cf0a0c4a5c8.jpg?1476098035" alt="" />
      </GlideJS>
    )
  }
}

export default MySlider