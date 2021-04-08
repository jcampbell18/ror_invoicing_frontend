<template>
  <aside>
    <ol>
      <li>
        <a href="">
          <img src="../assets/icons/512x512/project_sites.png" alt="Project Sites" title="Project Sites"/>
          <h6>Project Sites</h6>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/icons/512x512/invoicing.png" alt="Invoicing" title="Invoicing"/>
          <h6>Invoicing</h6>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/icons/512x512/bids.png" alt="Bids" title="Bids"/>
          <h6>Bids</h6>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/icons/512x512/users.png" alt="Clients" title="Clients"/>
          <h6>Clients</h6>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/icons/512x512/sku.png" alt="SKU" title="SKU"/>
          <h6>SKU</h6>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/icons/512x512/mileage.png" alt="Mileage" title="Mileage"/>
          <h6>Mileage</h6>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/icons/512x512/terms.png" alt="Terms" title="Terms"/>
          <h6>Terms</h6>
        </a>
      </li>
    </ol>
  </aside>
</template>

<script>
export default {
  name: 'Aside',
  props: {}
}
</script>

<style>
aside {
  width: 100%;
  background: inherit;

  display: grid;
  justify-items: center;
  align-items: center;
  padding: 0;
}

aside ol {
  list-style: none;
  width: 96%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}

aside ol li a {
  width: 100px;
  height: 100px;
  align-self: center;
  border: 2px solid var(--secondary-color);
  border-radius: 10px;
  margin: 1em;
  padding: 0.5em;
  box-shadow: rgba(66,57,58,0.4) 4px 4px 4px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

aside ol li a p {
  text-align: center;
  padding-top: 0.4em;
}

aside ol li a img {
  width: 50%
}

</style>