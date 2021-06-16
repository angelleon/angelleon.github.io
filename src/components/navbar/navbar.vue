<template>
  <nav id="nav-component">
    <div class="nav-head">
      <a href="/index.html">
        <div class="nav-icon">
          <img id='home-icon' src="../../assets/logo.png">
        </div>
        <div class="nav-text"></div>
      </a>
    </div>
    <div class="nav-content">
      <a href="/projects.html">
        <div class="nav-element">Projects</div>
      </a>
      <a href="/about.html">
        <div class="nav-element">About me</div>
      </a>
      <a href="/contact.html">
        <div class="nav-element">Contact</div>
      </a>
      <div class="nav-element navbar-right">
        <session-component></session-component>
      </div>
    </div>
  </nav>
</template>

<script type="text/javascript" src='./navbar.js'></script>

<style src='./navbar.scss' lang="scss"></style>
