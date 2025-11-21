<template>
    <div>
        <button class="menu-toggle" @click="toggleMenu">
            <i :class="isOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
        </button>

        <aside :class="['sidebar', { open: isOpen || isDesktop }]">
            <nav>
                <ul class="direcao">
                    <li><router-link to="/" @click="closeMenu">Sobre Mim</router-link></li>
                    <li><router-link to="/projetos" @click="closeMenu">Projetos</router-link></li>
                </ul>

                <ul class="social">
                    <li><a href="https://github.com/Gigifernandes" target="_blank"><i class="bi bi-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/giovanna-fernandes-619298370" target="_blank"><i class="bi bi-linkedin"></i></a></li>
                    <li><a href="mailto:importantegiovanna@gmail.com" target="_blank"><i class="bi bi-envelope"></i></a></li>
                </ul>
            </nav>
        </aside>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const isDesktop = ref(window.innerWidth > 768)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

const closeMenu = () => {
    if (!isDesktop.value) isOpen.value = false
}

const handleResize = () => {
    isDesktop.value = window.innerWidth > 768
    if (isDesktop.value) isOpen.value = false
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100px;
    color: aliceblue;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1000;
    transform: translateX(0);
    transition: transform 0.3s ease;
}

.sidebar nav{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
}

.sidebar ul{
    list-style: none;
    padding: 0;
}

.sidebar li{
    margin-bottom: 1.5rem;
}

.sidebar a{
    color: rgb(146, 11, 249);
    text-decoration: none;
    font-weight: bold;

}

.sidebar .social a{
    font-size: 1.2rem;
    transition: 0.3s ease, color 0.3s ease;
}

.sidebar .social a:hover{
    transform: scale(1.5);
    color: rgb(255, 255, 101)
}

.sidebar .direcao a:hover{
    color: rgb(255, 255, 101)
}

.menu-toggle{
    background: none;
    border: none;
    color: rgb(255, 255, 101);
    font-size: 1.5rem;
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 2001;
    display: none;
}

@media (max-width: 760px){
    .menu-toggle{
        display: block;
    }
    .sidebar{
        width: 150px;
        transform: translateX(-100%);
    }

    .sidebar.open{
        transform: translateX(0);
    }
}



</style>
