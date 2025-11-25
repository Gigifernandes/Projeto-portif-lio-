
<template>
    <div class="about-container">
        <div class="about-text">
           <h1>Olá! Meu nome é <span style="color: blueviolet;">Giovanna</span></h1>
            <p>Desenvolvedora Front-End em formação</p>

            <p>
            Estou cursando Informática para Internet na ETEC Antônio Furlan (2023–2025), onde tive uma base sólida para me tornar uma desenvolvedora full stack iniciante.  
            No entanto, descobri uma afinidade especial pelo <strong>front-end</strong> e pelo <strong>design</strong>, áreas em que consigo expressar minha criatividade e me destacar naturalmente.
            </p>

            <p>
            Sou uma pessoa <strong>criativa, detalhista e muito dedicada</strong>.  
            Gosto de unir lógica e estética, criando interfaces funcionais, intuitivas e visualmente atraentes.  
            Sou aberta para aprender novas tecnologias e adoro transformar ideias em experiências digitais.
            </p>

        <div class="icons-grid"> <!-- Icones pegos pelo site Devicon-->
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-php-plain"></i>
            <i class="devicon-css3-plain colored"></i>
            <div class="break-line"></div>
            <i class="devicon-kotlin-plain"></i>
            <i class="devicon-reactnative-original colored"></i>
            <i class="devicon-mysql-plain-wordmark"></i>
        </div>

        </div>     
        

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.about-container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 8rem 2rem;
    margin-left: 200px;
}

.about-text{
    flex: 1;
    padding: 2rem;
}


.icons-grid{
    margin-top: 32px;
    background-color: rgb(31, 30, 30);
    border-radius: 20px;
    box-shadow: 0 0 10px  rgb(255, 255, 101);
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    gap: 2rem;
    justify-content: center;
}

.break-line{
    flex-basis: 100%;
    height: 0;
}

.icons-grid i{
    font-size: 70px;
    transition: transform 0.3s ease;
}
.icons-grid i:hover{
    transform:scale(1.2);
}

@media(max-width: 768px){
    .about-container{
        flex-direction: column;
        margin-left: 0;
        text-align: center;

    }

    .about-photo img{
        margin: 0 auto;
        width: 250px;
    }

    .about-text{
        padding: 1rem;
    }

    .icons-grid{
        padding: 1rem;
        gap: 1.5rem;
    }

    .icons-grid i {
        font-size: 36px;
    }
}

</style>