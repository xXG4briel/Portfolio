import styled from 'styled-components';

export const Container = styled.div`
    height: calc( 100vh - 70px );
    margin-top: 70px;

    display: flex;
    align-items: center;
    main {
        display: flex;
        justify-content: space-between;
        height: 50%;
        margin: 0 auto;
        width: 85%;
        max-width: 1640px;
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

    @media screen and (max-width: 992px) {
        height: auto;
    }

`;
