import styled from 'styled-components';

export const Cabecalho = styled.header`
    background: white;
    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    a {
        display: flex;
        align-items: center;
        color: #0e1e25;
        text-decoration: none;
        font-size: 1.4rem;
    }
    .header-nav-btn {
        display: flex;
        nav {
            width: 50%;
            min-width: 450px;
            margin-right: 20px;
            .header-list {
                height: 100%;
                display: flex;
                justify-content: space-between;
                list-style: none;
                li {
                    height: 100%;
                    display: inline-flex;
                    align-items: center;
                    color: var(--text-purple-gray);
                    cursor: pointer;
                    border-bottom: 2px solid transparent;
                    transition: ease 0.25s;
                    padding: 0 6px;
                }
                li:hover {
                    transform: translateY(-3px);
                    border-bottom: 2px solid var(--color-tertiary);
                }
            }
            #btn-menu {
                display: none;
            }
        }
    }

    @media screen and ( max-width: 992px ) {
        /* height: 60px; */
        .header-nav-btn {
            nav {
                min-width: auto;
                margin-right: 0;
                .header-list {
                    display: none;
                }
                .header-list.active {
                    background: white;
                    display: flex;
                    padding: 0 1rem;
                    flex-direction: column;
                    justify-content: initial;
                    position: absolute;
                    z-index: 999;
                    height: auto;// calc( 100vh - 70px );
                    overflow-y: hidden;
                    width: 100%;
                    left: 0;
                    top: 70px;
                    transition: .3s ease;
                    li {
                        height: 58px;
                        border-bottom: 2px solid #00000024;
                        transition: .2s ease;
                    }
                    li:hover {
                        transform: translateY(0);
                        border-bottom: 2px solid #00000024;
                        background: #eaeaea ;
                    }
                }
                #btn-menu {
                    cursor: pointer;
                    margin-left: auto;
                    background: none;
                    display: block;
                    width: 44px;
                    border: none;
                    border-top: 2px solid black;
                }
                #btn-menu::after, #btn-menu::before {
                    content: "";
                    display: block;
                    position: relative;
                    margin-top: 8px;
                    border-top: 2px solid black;
                    transition: .3s;
                }
                #btn-menu.active {
                    border-top: 2px solid transparent;
                }
                #btn-menu.active::after {
                    transform: rotate(135deg);
                    top: -10px;
                }
                #btn-menu.active::before {
                    transform: rotate(-135deg);
                }

            }
            button {
                display: none;
            }
        }
    }
`;
