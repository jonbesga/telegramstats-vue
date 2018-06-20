<template>

    <div class="container">
        <div class="left-column">
            <div class="header">
                <a href="#">
                    <img id="logo" src="logo.png" alt="telegram stats logo">
                </a>
                <h1 class="title">Telegram Stats</h1>
            </div>
            <div class="landing">
                <p>
                Lorem ipsum dolor sit amet, lobortis purus in diam. Felis sit, rhoncus elit dui viverra amet vehicula lobortis, curabitur mauris etiam lacus, massa quisque wisi, sed habitant nisl bibendum amet eu varius.
                </p>
            </div>
        </div>
        <div class="right-column">
                <h2>Log in</h2>
                <p>Please enter your full phone number.</p>
                
                <form action="login">
                    <div class="form-fields">
                        <div class="form-item">
                            <label for="input-code">Code</label>
                            <input class="input-code" type="text" name="code" placeholder="+44" required>
                        </div>
                        <div class="form-item">
                            <label for="input-phone">Phone number</label>
                            <input class="input-phone" type="text" name="phone-number" required>
                        </div>
                    </div>
                    <p class="next-btn">
                        <a href="#">Next <i class="fa fa-angle-right"></i></a>
                    </p>
                    
                </form>
        </div>
        <Footer/>
    </div>
    
</template>

<script>

import Footer from '../assets/footer.svg'

export default {
    components: {
        Footer,
    },
}

</script>

<style scoped>

svg {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}
.container{
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 5%;
}
.container-fluid {
    display: flex;
    flex-direction: row;
    margin: 5% 9% 0 9%;
    
}

.left-column{
    /* outline: blue dotted; */
    flex: 2;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 5% 10%;
}

.left-column .header{
    /* outline: cyan dotted; */
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    margin-bottom: 20px;
}

.left-column .landing{
    /* outline: red dotted; */
    padding: 0 30px;
    text-align: justify;
}

h1.title{
    margin-left: 30px;
}
img#logo{
    width: 100px;
    text-align: left;
}


.right-column{
    /* outline: red dotted; */
    flex: 1;
    padding: 20px 0 20px 20px;
    text-align: left;
}


@media (min-width: 320px) and (max-width: 895px){
    .right-column{
        border-top: 7px blue solid;
        margin: 0 50px;
    }
}

@media  (min-width: 895px) and (max-width: 1600px) { 
    .right-column{
        border-left: 7px blue solid;
        margin: 0 50px;
    }
}

.right-column h2{
    color: cyan;
}

form .form-fields{
    display: flex;
    flex-direction: row;
}

form .form-item{
    display: flex;
    flex-direction: column;
}

</style>
