import styled from 'styled-components'

const StyledMain = styled.main`
    flex: 1;
    display: flex;

    ul {
        width: 768px;
        height: 220px;
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(3, 1fr);
        margin: auto;
        list-style: none;
        
        li {
            display: flex;
            
            button {
                flex: 1;
                padding: 20px;
                color: #6b6b6b;
                background: #fff;
                box-shadow: 0 0 14px rgba(0, 0, 0, 0.02);
                text-align: center;
                text-decoration: none;
                border: none;
                border-radius: 15px;
                cursor: pointer;
                transition: background 0.3s;
                
                &:hover {
                    background: rgba(255, 255, 255, 0.8);
                }
                
                span {
                    display: block;
                    text-transform: uppercase;
                    margin-top: 20px;
                    font-size: 1.6rem;
                }
            }
        }
    }
`

export default StyledMain;