import { createRouter, createWebHistory } from "vue-router";
import Projetos from "./pages/Projetos.vue";
import Sobre from "./pages/Sobre.vue";

const routes = [
    {path: '/', component:Sobre},
    {path: '/projetos', component:Projetos}
]

export const router = createRouter({ 
    history: createWebHistory(), 
    routes
})