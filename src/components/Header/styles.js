import styled from "styled-components";

export const HeaderD = styled.header`
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5E0066;
    padding: 10px 15px;
    font-weight: 400;   
       
    

    @media (max-width: 768px) {
        flex-direction: column;
        
        
    }

    img {
        width: 8%;
        height: 8%;
        

        @media (max-width: 768px) {
            width: 20%;
            height: 20%;
            margin-bottom: 5px;
            background-color:#5E0066
            width: 100%;

        }
    }

    .links {
        @media (max-width: 768px) {
            display: flex;            
            flex-direction: row;
            text-align: center;
            /*align-items: center;*/
            background-color: #fff;
            
            
        }
    }

    .links a {
        color: #FFF;
        text-decoration: none;
        font-size: 18;
        position: relative;
        padding: 0 8px;
        

        @media (max-width: 768px) {
            margin-bottom: 0px;
            color: #5E0066
            
            
            
            
            
        }
    }
    .links a::after {
        content: "";
        position: absolute;
        background-color: #FFF;
        height: 3px;
        border-radius: 10px;
        width: 0;
        bottom: -10px;
        left: 0;
        transition: 0.3s;
    }
    .links a:hover::after {
        width: 100%;
    }
`;