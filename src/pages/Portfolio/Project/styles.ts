import styled from 'styled-components';

export const Container = styled.div`
    background: #f1f5f6;
    height: calc( 100vh - 70px );
    h1 {
        text-align: center;
    }
    /*.project-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: calc(100vh - 70px - 38px ) ;// 100%; // calc
        max-width: 1640px;
        margin: 0 auto;
        .project-card{
            margin: 10px auto 0;// 10px 10px 0;
            max-width: 420px;
            cursor: pointer;
            padding: 20px 30px;
            width: 30vw;
            min-width: 265px;
            height: 34vh;
            max-height: 430px;
            border-radius: 1rem;
            background: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            transition: ease  .4s;
            img {
                height: 40%;
            }
            .project-text-project{
                text-overflow: ellipsis;
                overflow: hidden;
                p {
                }
                
            }
        }
        .project-card:hover {
            transform: scale(1.05);
            box-shadow: 3px 4px 14px 4px #0000001c;
        }
    }*/
    
    .project-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: calc( 100% - 38px );
        max-width: 1640px;
        margin: 0 auto;
        .project-card {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            border-radius: 8px;
            background: white;
            margin: auto;
            width: 80%;
            max-width: 420px;
            transition: .45s ease;
            img {
                width: 50%;
            }
        }
        .project-card:hover {
            transform: scale(1.05);
            box-shadow: 3px 4px 14px 4px #0000001c;
        }
    }
    .project-swiper-container {
        display: none;
    }
    @media screen and (max-width: 992px) {
        height: auto !important;

        /*.project-container {
            display: none;
            justify-content: space-evenly;// space-around; 

            .project-card{
                max-width: 300px;
                min-width: auto;
                width: 80vw;
                margin: 10px;
                height: auto;
            }

        }*/
        .project-container {
            display: none;
        }
        .project-swiper-container {
            display: block;
            margin: 0 1rem;
            .project-card-swiper {
                border-radius: 8px;
                background: white;
                padding: 1rem;
                text-align: center;
                /* min-width: 120px; */
                height: fit-content;
                max-height: 100vh;
                img {
                    width: 100%;
                }
                img::selection, span::selection {
                    background: transparent;
                }
                .project-card-description {
                    max-height: 100px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    /* white-space: nowrap; */
                    span {
                    }
                }
            }
        }
    }

    .swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}


    /* @media screen and (max-width: 840px) and (max-height: 1000px) {
            .project-container {
                justify-content: center;
                flex-direction: column;

                .project-card{
                    max-width: 300px;
                    min-width: auto;
                    width: 80vw;
                    margin: 10px;
                    height: auto;
                }
            }       
        } */
`;
