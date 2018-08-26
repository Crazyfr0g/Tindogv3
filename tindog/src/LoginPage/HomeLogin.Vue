<template>
  <div id="Style">
    
    <b-navbar toggleable="md" type="dark" variant="light">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    
        <b-navbar-brand href="#" id="LogoStyle" variant="black"><p class="text-dark font" >Tindog &#128021; </p></b-navbar-brand>

      <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Types of Dogs"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
    
      <b-collapse is-nav id="nav_collapse" type="dark">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" variant="dark">
    
          <b-nav-item href="#"><p class="text-dark">Sign Up</p></b-nav-item>
          <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          <b-nav-item href="SignUp"><p class="text-dark">Sign In</p></b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-card class="text-center">
      
    <p class="text-dark style">
        Welcome to Tindog the dog selling App 
    </p>

    </b-card>

    <div class="intro">
    <p class="introduc">
        An application where you can post, you can sell and even can find a doggy mate for you pet. Come and Sign up now &#128221;.
      </p>

      <b-button variant="outline-success" class="button">More</b-button>
    </div>

  <div class="deckClass">
    <b-card-group deck class="mb-3">
      <b-card bg-variant="primary"
                text-variant="white"
                header="News feed &#9000;"
                class="Deck">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </b-card>
      <b-card bg-variant="secondary"
                text-variant="white"
                header="Selling &#128176;"
                class="Deck">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </b-card>
        <b-card bg-variant="success"
                text-variant="white"
                header="Dog Breeding &#128054;"
                class="Deck">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
    </b-card-group>
  </div><hr>

  <div class="aboutTindog">
    <p class="about">
      About Tindog
    </p>
    <p class="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti dolorem vitae, exercitationem cumque esse? Autem doloribus corrupti fuga? Explicabo repudiandae debitis nemo nisi hic molestias nulla, porro voluptatum vero facere id, accusantium odit quis consectetur pariatur, quo voluptatibus possimus voluptatem non recusandae dolores! Ratione ut illo tempora necessitatibus enim, id inventore maiores, modi quisquam a quidem dolores sed ea. Ea, ullam consectetur cumque earum repellendus officia, harum cupiditate consequuntur quia, deleniti quaerat accusamus itaque facere magni voluptatibus quo! Cupiditate provident illo praesentium neque, odio nobis, dignissimos est aut commodi dolores, incidunt repellendus! Natus doloremque, nobis asperiores cupiditate iusto esse!
    </p>
  </div>
     

  </div>
</template>

<style>

  .aboutTindog
  {
    text-align: center;
    font-size: 30px;
  }

  .aboutTindog .content
  {
    font-size: 20px;
  }

  .button
  {
    width: 100px;
  }

  .intro
  {
    margin-top: 10px;
    text-align: center;
  }

  .text-center
  {
    margin-top: 10px;
    border-radius: 5em;
    margin-left: 10px;
    margin-right: 10px;
  }
  
  .style
  {
    
    text-align: center;
    font-size: 50px;
    margin: 0 auto;

  }

  #Logostyle
  {
    font-size: 30px;
  }

  .font
  {
    font-size: 30px;
  }

.deckClass
{
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
}

.deckClass header
{
  font-size: 30px;
}

  /* .text-center
  {
    width: 1100px;
    margin: 0 auto;
    margin-top: 10px;
  } */

  /* .columnSize
  {
    width: 300px;
  } */

  /* .mb-3
  {
    margin: 5px;
  } */


</style>