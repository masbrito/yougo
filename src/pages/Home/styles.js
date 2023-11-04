import styled from "styled-components";

export const Container = styled.div`
    color: #606060;    
    
    
`;


export const Modal = styled.div`
    background-image: linear-gradient(to bottom, #9300A0, #CB20DA);
    margin-top: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 40px 5px;
    flex-direction: column;

    @media (max-width: 768px) {
        flex-direction: column;
        
    }
    .swiper{
        max-width: 90%;
        padding: 20px 5px;               
    }   

    img {
        border-radius: 15px;
        width: 40%;
        display: block;
        margin: 0 auto;
        vertical-align: middle;

        @media (max-width: 768px) {
            width: 80%;
        }
    }
    button {
        a {
            text-decoration: none;
            color: #FFF;
            font-size: 16px;
            font-weight: 600;            
            
        }                 
        

        margin: 10px 0px;
        background-color: #26CC4C;
        color: #FFF;
        border: none;
        border-radius: 10px;
        padding: 10px;
        outline: none;
        width: 300px;
        cursor:pointer;
        transition: background-color 0.3s;
    }

    button:hover{
        background-color: #16752C;
    }
    
    .text {
        width: 100%;
        text-align: center;  

        @media (max-width: 768px) {
            width: 80%;
            text-align: center;  
        }

        p {
            color: #FFF;
            font-size: 20px;
            
        }
        
        h1 {
            color: #FFF;
            font-size: 36px;
        }

        
    }

    
`;





export const Proposal = styled.div`
    padding: 20px;  
    display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        text-align: center;

    p {
        text-align: center;
    }
    
    
   


        
        .experiencia {
            display: flex;
            justify-content: center;
          }
          
          .icon {
            display: block;
            @media (max-width: 768px) {
              display: none;
            }
          }
          
          .icon2 {
            display: none;
          
            @media (max-width: 768px) {
              display: block;
            }
          }
          experiencia {
            width: 80%;

            @media (max-width: 768px) {
                width: 70%;
            }
        }
          
          
          
    }
`;

export const How = styled.div`
    /* background-color: #CA60C6; */
    background-image: linear-gradient(to bottom, #9300A0, #CB20DA);
    width: 70%;
    
    
    border-radius: 20px;
    margin: 0 auto;
    padding: 20px;
    color: #FFF;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.25);

    @media (max-width: 390px) {
        padding: 30px;
        
    }
    

    h1 {
        text-align: center;
    }

    .texts {
        display: flex;
        justify-content: space-around;
        text-align: left;
        padding: 15px;

        @media (max-width: 768px) {
            width: 100%;
            flex-direction: column;
            justify-content: space-around;
            padding: 0px;
            text-align: left;
            
        }
    }

    .text {        
        width: 35%;
        padding: 20px;
        
        @media (max-width: 768px) {
           padding: 0px;
           width: 100%;            
            
        } 
               
        h1,h3 {
            display: inline-block;
        }
        
        h1 {
            margin-right: 5px;
        }
        
    }
`;
export const Text = styled.div`
.swiper{
    width: 80%; /* Largura da imagem */
    
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin 0 auto;

    .item{
        width: 70%;
        height: 70%;
        object-fit: cover;
    }
}

.carrosel{
display:flex;
border-radius: 5%;
width: 100%;
max-width: 900px;
margin: 20px auto 0;
margin-bottom: 0px;
min-height: 80vh;
align-items: center;
justify-content: center;
}

.inner{
    display:flex;
    
    
}

.item{
    min-height: 200px;
    min-width: 300px;
    padding: 14px;
    
}
.item img{
    width: 100%;
    height: 90%;
    border-radius: 5%;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
    pointer-events: none;
    
    
}
.carousel{
    cursor: grab;
    overflow: hidden;
}
    
`;

export const Plans = styled.div`
    text-align: center;
    padding: 0px 10px;

    .title {
        margin-bottom: 45px;

        &::after {
            content: "";
            width: 50px;
            height: 3px;
            background-color: #CA60C6;
            display: block;
            margin: 1px auto;
        }
    }

    .container {
        
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    


        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto; 
        }
        
        .card {            
            
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: justify; 
            background-color: #9300A0;           
            box-shadow: 4px 4px 4px rgba(0,0,0,.18);
            padding: 20px;
            border-radius: 15px;
            margin: 5px;
            

            .left {
                display:flex;
                align-items: center;
                color: #fff;
                justify-content: center;
            }
            .currency{
                font-size: 24px;
                margin-reght: 4px;
                color: #fff;
            }

            h1 {
                font-size: 80px;
                margin-bottom: 10px;
                color: #fff;
            }
            h3{
                color: #fff;
            }

            .right{
                font-size: 24px;
                color: #fff;

            }
            

            p {
                margin-bottom: 15px;
                text-align: justify;
                color: #fff;
            }

            button {
                a {
                    text-decoration: none;
                    color: #FFF;
                    font-size: 16px;
                    font-weight: 600;            
                    
                }  

                margin-top: 25px;
                border: none;
                background-color: #26CC4C;
                color: #fff;
                width: 100%;
                border-radius: 10px;
                padding: 10px;
                outline: none;
                font-weight: 600;
                cursor: pointer;
                transition: background-color 0.3s;
                
            }
            button:hover{
                background-color:#16752C;
            }
        }

        .second-card {
            margin-left: 40px;

            @media (max-width: 768px) {
                margin-left: 0px;
                margin-top: 15px;
            }
        }
    }
`;

export const Doubts = styled.div`
    /* background-color: #CA60C6; */
    background-image: linear-gradient(to bottom, #9300A0, #CB20DA);
    padding: 10px 50px;
    margin-top: 20px;

    h1 {
        text-align: center;
        color: #FFF;
    }
`;

export const Avaliation = styled.div`
    padding: 30px;
    text-align: center;
    

    h1 {
        text-align: center;
        padding-bottom: 30px;
    }
    
    

    .container-card {
        display: flex;
        justify-content: space-evenly;
        

        @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
        }

        .card {
            border-radius: 20px;
            box-shadow: 4px 4px 4px rgba(0,0,0,.25);
            width: 30%;
            padding: 20px;
            p{
                text-align: left;
            }


            

            @media (max-width: 768px) {
                margin: 5px auto;
                width: 80%;

                .stars {
                    width: 45%;
                }
            }
        }

        /* .card {
            width: 40%;
            box-shadow: 4px 4px 4px rgba(0,0,0,.25);
            border-radius: 20px;
            padding: 10px 20px;

            @media (max-width: 768px) {
                margin-top: 5px;

                .stars {
                    width: 45%;
                }
            }
        } */
    }
`;