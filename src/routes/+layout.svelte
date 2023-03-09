<header>
  <a href="/">
    <h1>OptoCloud</h1>
  </a>
  <div style="flex: 1;"/>
  <a href="/login">
    <h3>Login</h3>
  </a>
</header>
<main>
  <slot/>
  <footer>
    <div style="flex: 1;"/>
    <a href="/privacy"><h3>Privacy</h3></a>
    <a href="/terms"><h3>Terms</h3></a>
    <a href="/contact"><h3>Contact</h3></a>
  </footer>
  <div class="scroll-cover"/>
</main>

<style>
  header {
    height: 64;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px;
  }
  a {
    color: #D9D9D9;
    text-decoration: none;
  }
  main {
    height: 100%;
    width: auto;
    overflow-y: scroll;
    padding-left: 12px;
    display: grid;
    grid-template-rows: 1fr auto;
    align-items: center;
  }
  footer {
    height: 64;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px;
  }
  footer a {
    text-decoration: none;
    padding: 8px;
  }
  .scroll-cover {
    position: absolute;
    background: #121212;
    height: 100%;  
    top: 0;
    right: 0;
    width: 12px;
    pointer-events: none;
    opacity: 1;
    transition: opacity .5s;
    transition-delay: 1s;
    -webkit-transition: opacity .5s;
    -webkit-transition-delay: 1s;
  }
  main:hover .scroll-cover {
    opacity: 0;
    transition: opacity .5s;
    -webkit-transition: opacity .5s;
  }
</style>