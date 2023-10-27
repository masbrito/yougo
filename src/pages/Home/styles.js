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

    @media (max-width: 768px) {
        flex-direction: column;
        
    }

    .text {
        width: 40%;

        @media (max-width: 768px) {
            width: 80%;
            text-align: center;
           
            
        }

        img {
            width: 50%;
            padding: 10px 0px;
        }
        
        p {
            color: #FFF;
            font-size: 20px;
            
        }
        
        h1 {
            color: #FFF;
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
    }

    img {
        width: 30%;

        @media (max-width: 768px) {
            width: 80%;
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
    
    
    .texts {        
        
        @media (max-width: 768px) {
            width: 80%;      
              
        }    
            
        
    }

    .icons {
        padding: 40px 0px;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(2,1fr);
        justify-content: space-around;
        text-align: center;
        width: 80%;

        @media (max-width: 768px) {
            flex-direction: column;
            width: 100%;
        }
        

        .card-text {
           
            text-align: center;
            color: #fff;
            padding: 0px 0px;
            margin: 5px 5px;
            border-radius: 20px;
            background-color: #CA60C6;
            justify-content: center;     
           
            

            @media (max-width: 768px) {
                text-align: center;
            }
        }

        .icon {
            width: 30%;
            margin-bottom: 5px;

            @media (max-width: 768px) {
                width: 30%;
            }
        }
    }
`;

export const How = styled.div`
    /* background-color: #CA60C6; */
    background-image: linear-gradient(to bottom, #9300A0, #CB20DA);
    width: 75%;
    
    border-radius: 20px;
    margin: 0 auto;
    padding: 40px;
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

export const Plans = styled.div`
    text-align: center;
    padding: 50px 10px;

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
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px) {
            flex-direction: column;
        }
        
        .card {            
            
            display: flex;
            flex-direction: column;
            text-align: center;
            background-color: #9300A0;           
            box-shadow: 4px 4px 4px rgba(0,0,0,.18);
            padding: 20px;
            border-radius: 15px;
            

            .left {
                display:flex;
                align-items: center;
                color: #fff;
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
                text-align: left;
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