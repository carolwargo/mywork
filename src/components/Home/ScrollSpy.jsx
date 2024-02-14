import React from "react";

const ScrollSpy = () => {

    return (
        <div>
        <h1>ScrollSpy</h1>
        <h3>Brand Idenity</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam, incidunt laudantium itaque voluptatum fuga nam veritatis. Modi qui deserunt placeat fugiat accusantium ducimus? Consectetur excepturi obcaecati nostrum rerum qui!</p>
        <nav id="navbar-example3" className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <nav className="nav nav-pills flex-column">
    <a className="nav-link" href="#item-1">Item 1</a>
    <nav className="nav nav-pills flex-column">
      <a className="nav-link ml-3 my-1" href="#item-1-1">Item 1-1</a>
      <a className="nav-link ml-3 my-1" href="#item-1-2">Item 1-2</a>
    </nav>
    <a className="nav-link" href="#item-2">Item 2</a>
    <a className="nav-link" href="#item-3">Item 3</a>
    <nav className="nav nav-pills flex-column">
      <a className="nav-link ml-3 my-1" href="#item-3-1">Item 3-1</a>
      <a className="nav-link ml-3 my-1" href="#item-3-2">Item 3-2</a>
    </nav>
  </nav>
</nav>

<div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
  <h4 id="item-1">Item 1</h4>
  <p>...</p>
  <h5 id="item-1-1">Item 1-1</h5>
  <p>...</p>
  <h5 id="item-1-2">Item 2-2</h5>
  <p>...</p>
  <h4 id="item-2">Item 2</h4>
  <p>...</p>
  <h4 id="item-3">Item 3</h4>
  <p>...</p>
  <h5 id="item-3-1">Item 3-1</h5>
  <p>...</p>
  <h5 id="item-3-2">Item 3-2</h5>
  <p>...</p>
</div>
        
        </div>
    );
    };

export default ScrollSpy;