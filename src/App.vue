<template>
	<Navbar />
  <body class="m-5">
		<router-view/>
  </body>

</template>

<script>
import Navbar from './components/Navbar.vue'


export default{
    name: "App",
    components: {
        Navbar
    },
    components: { Navbar }
}
</script>
