<template>
  <nav>
    <ol>
      <li>
        <a href="">
          <img src="../assets/icons/512x512/dashboard.png" alt="Dashboard" title="Dashboard"/>
          <h6>Dashboard</h6>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/icons/512x512/content.png" alt="Content" title="Content"/>
          <h6>Content</h6>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/icons/512x512/user.png" alt="Users" title="Users"/>
          <h6>Users</h6>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/icons/512x512/settings.png" alt="Settings" title="Settings"/>
          <h6>Settings</h6>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/icons/512x512/logout.png" alt="Logout" title="Logout"/>
          <h6>Logout</h6>
        </a>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {},
}
</script>

<style>
nav {
  grid-row: 2;
  grid-column: 1 / span 3;
  width: 100%;
  background: linear-gradient(var(--secondary-color) 50%, var(--off-white) 50%);
  padding: 1em 0em;

  display: flex;
  flex-flow: row nowrap;
  justify-items: center;
  align-items: center;
}

nav ol {
  width: 80%;
  margin: 0 auto;
  background: linear-gradient(to top, var(--tertiary-color), white);
  border-radius: 10px;
  box-shadow: rgba(66,57,58,0.4) 4px 4px 4px;
  list-style: none;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}

nav ol li {
  padding: 0.4em 0;
}

nav ol li a {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}

nav ol li a img {
  width: 32px;
}
</style>