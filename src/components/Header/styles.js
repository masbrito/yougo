import styled from "styled-components";

export const HeaderD = styled.header`
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5E0066;
    padding: 0px 15px;
    font-weight: 400; 
       
    @media (max-width: 768px) {
        flex-direction: column; 
                 
    }

    img {
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;
    
        @media (max-width: 768px) {
            width: 100%;
            height: auto;
        }
    }

    .links {
        @media (max-width: 768px) {
            width: 100vw;
            display: flex;            
            flex-direction: row;
            text-align: center;
            align-items: center;
            background-color: #fff;
            font-size: 13px;
            font-weight: 600;   
            padding: 0;
            margin: 0;
                        
        }
    }

    .links a {
        color: #FFF;
        text-decoration: none;
        font-size: 14;
        position: relative;
        padding: 0 10px;
        

        @media (max-width: 768px) {
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