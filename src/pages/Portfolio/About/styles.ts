import styled from 'styled-components';

export const Container = styled.div`
    height: calc( 100vh - 70px );
    margin-top: 70px;

    display: flex;
    align-items: center;
    .about-desktop {
        display: flex;
        justify-content: space-between;
        height: 50%;
        margin: 0 auto;
        width: 85%;
        max-width: 1640px;
        .about-midias {
            div:first-child {
                display: flex;
                align-items: center;
                font-size: 18px;
                .about-social-midias {
                    max-width: 347px;
                    width: 18vw;
                    display: flex;
                    justify-content: space-between;
                    img {
                        cursor: pointer;
                        opacity: .7;
                        width:32px;
                        transition: ease-in-out .35s;
                    }
                    img:hover {
                        opacity: 1;
                        transform: translateY(-3px);
                    }
                }
            }
        }
        .main-welcome {
            aside {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                div {
                    .font-small {
                        color: var(--text-gray-light);
                        font-size: 2.2rem;
                    }
                    p {
                        // color: var(--text-purple-gray);
                        font-size: 4.2rem;
                        // font-size: 4vw;
                        max-width: 45vw;
                        .my-name {
                            color: var(--color-tertiary);
                        }
                    }
                    .main-midias-icons {
                        max-width: 347px;
                        width: 18vw;
                        display: flex;
                        justify-content: space-between;
                        img {
                            cursor: pointer;
                            opacity: .7;
                            width:32px;
                            transition: ease-in-out .35s;
                        }
                        img:hover {
                            opacity: 1;
                            transform: translateY(-3px);
                        }
                    }
                }
            }
        }
        .main-img {
            width: auto;
            img {
                width: 25vw;
                border-radius: 50%;


                min-width: 280px;
            }
            // div {
            // }
        }

    }
    .about-mobile {
        display: none;
    }

    @media screen and (max-width: 992px) {
        /* height: auto; */
        .about-desktop {
            display: none;
        }
        .about-mobile {
            /* border: 1px solid red; */
            /* height: calc( 100vh - 70px ); */
            height: 100%;
            width: 95%;
            margin: 0 auto;
            display: block;
            padding: 2rem 20px ;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            section {
                /* border: 1px solid blue; */
            }
            .main-img {
                /* padding-top: 20px; */
                height: 45%;
                display: flex;
                .main-media {
                    /* padding-left: 10px; */
                    max-height: 200px;
                    margin: auto 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    /* border: 1px solid green; */
                    img {
                        width: 24px;
                        margin: 10px 0;
                        /* margin: 20px 0; */
                    }
                }
                .main-profile {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        border-radius: 50%;
                        height: 80%;//30vh;
                    }
                }
            }
            .main-description {
                /* border: 1px solid red; */
                height: 55%;
                max-height: 275px;
                .description-text {
                    h1, h2, p {
                        font-weight: 500;
                    }
                    h1 {
                        font-size: 24px;
                    }
                    h2, p {
                        color: #74737a;
                        font-size: 16px;
                    }
                    p {
                        max-width: 440px;
                        margin: 30px 0 20px;
                    }
                }
            }
        }
    }

`;
