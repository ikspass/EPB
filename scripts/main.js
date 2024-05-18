// ОТОБРАЖЕНИЕ HEDER
document.getElementById('header').innerHTML =
`
    <div class="modal-window-container">
        <div class="header-modal-window-content" id="header-modal-window">
        </div>
        <button id="close-header-modal-window" class="close-modal-window" onclick="closeHeaderModalWindow()">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M1 1L11 11" stroke="#323232" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
    </div>

    <div class="burger-nav-menu normal-text bold" id="burger-menu">
        <div class="burger-nav">
            <div class="burger-nav-items">
                <div class="burger-nav-item ">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2759 1.21626C9.79881 0.927914 9.20119 0.927915 8.72411 1.21626L3.72411 4.23823C3.27466 4.50988 3 4.99681 3 5.52198V14.6631H6V8.16309C6 7.33466 6.67157 6.66309 7.5 6.66309H11.5C12.3284 6.66309 13 7.33466 13 8.16309V14.6631H16V5.52198C16 4.99681 15.7253 4.50988 15.2759 4.23823L10.2759 1.21626ZM12 14.6631V8.16309C12 7.88695 11.7761 7.66309 11.5 7.66309H7.5C7.22386 7.66309 7 7.88695 7 8.16309V14.6631H12ZM2 5.52198V14.6631H0.5C0.223858 14.6631 0 14.8869 0 15.1631C0 15.4392 0.223858 15.6631 0.5 15.6631H2.13635H18.5C18.7761 15.6631 19 15.4392 19 15.1631C19 14.8869 18.7761 14.6631 18.5 14.6631H17V5.52198C17 4.64669 16.5422 3.83515 15.7931 3.38241L10.7931 0.360428C9.99802 -0.120143 9.00198 -0.120142 8.20685 0.360428L3.20685 3.38241C2.45776 3.83515 2 4.6467 2 5.52198ZM7 5.16309C7 4.88694 7.22386 4.66309 7.5 4.66309H11.5C11.7761 4.66309 12 4.88694 12 5.16309C12 5.43923 11.7761 5.66309 11.5 5.66309H7.5C7.22386 5.66309 7 5.43923 7 5.16309ZM9 10.1631C9 9.88695 8.77614 9.66309 8.5 9.66309C8.22386 9.66309 8 9.88695 8 10.1631V12.1631C8 12.4392 8.22386 12.6631 8.5 12.6631C8.77614 12.6631 9 12.4392 9 12.1631V10.1631Z" fill="black"/>
                        </svg>
                    </div>
                    <a href="index.html" class="burger-link">Главная</a>
                </div>
                <div class="burger-nav-item ">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                            <path d="M1 11.7059H17V15H1V11.7059ZM1 11.7059H17V6.40673C17 6.40349 16.9974 6.40086 16.9941 6.40086H1.00587C1.00263 6.40086 1 6.40349 1 6.40673V11.7059ZM12.4676 1C13.4366 1 14.222 1.7835 14.222 2.75L14.216 2.613L14.2521 2.60333C15.7897 3.12298 16.9117 4.52702 16.995 6.20058L16.9992 6.38933L17 6.395C17 6.39824 16.9974 6.40086 16.9941 6.40086H1.03964C1.0364 6.40086 1.03378 6.39824 1.03378 6.395C1.03378 6.39241 1.03547 6.39013 1.03794 6.38938L8.57895 4.10776L10.874 3.48283C10.7708 3.25991 10.7132 3.01166 10.7132 2.75C10.7132 1.7835 11.4987 1 12.4676 1ZM12.4676 4.5C13.4366 4.5 14.222 3.7165 14.222 2.75C14.222 1.7835 13.4366 1 12.4676 1C11.4987 1 10.7132 1.7835 10.7132 2.75C10.7132 3.7165 11.4987 4.5 12.4676 4.5Z" stroke="black" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <a href="productsConfection.html" class="burger-link">Кондитерские изделия</a>
                </div>
                <div class="burger-nav-item ">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                            <path d="M5 4C5.63543 2.9188 6.59762 1.89981 7.81446 1.00147L7.94305 1.0006L9 1M6.44309 1.18855C6.54766 1.16739 6.65307 1.14819 6.75925 1.13099C9.57013 2.31706 11.7482 4.01919 12.8872 5.91474M11 1L11.4793 1.00053C11.7328 1.00052 11.9838 1.01218 12.2313 1.03496C13.4267 1.92545 14.3726 2.9324 15 4M7.46018 5.91474C8.575 4.06583 10.685 2.40155 13.4089 1.22311C13.5288 1.24836 13.6477 1.2765 13.7652 1.30714M18.4264 6.24143L18.652 7.11366C19.135 8.98196 18.0121 10.8881 16.1438 11.3712C15.8581 11.4451 15.5642 11.4825 15.2692 11.4825L4.4942 11.4827C2.56446 11.4827 1 9.91846 1 7.98871C1 7.69358 1.03738 7.39964 1.11126 7.11391L1.33675 6.24185C2.1346 3.15627 4.91824 1.0008 8.10531 1.00063H11.658C14.845 1.00063 17.6286 3.15593 18.4264 6.24143Z" stroke="black" stroke-width="1.00088" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <a href="productsBakery.html" class="burger-link">Выпечка</a>
                </div>
                <div class="burger-nav-item ">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.85355 0.146443C6.04882 0.341705 6.04882 0.658287 5.85355 0.85355L3.70711 3H12.2929L10.1464 0.85355C9.95118 0.658287 9.95118 0.341705 10.1464 0.146443C10.3417 -0.0488194 10.6583 -0.0488194 10.8536 0.146443L13.7071 3H14.5C15.3284 3 16 3.67157 16 4.5C16 5.171 15.5594 5.73909 14.9518 5.93077L14.1251 12.7988C13.9739 14.0549 12.9081 15 11.643 15H4.35703C3.09188 15 2.02614 14.0549 1.87495 12.7988L1.04824 5.93077C0.440585 5.73909 0 5.171 0 4.5C0 3.67157 0.671573 3 1.5 3H2.29289L5.14645 0.146443C5.34171 -0.0488194 5.65829 -0.0488194 5.85355 0.146443ZM13.5003 4C13.5001 4 13.4999 4 13.4997 4H2.50035H2.49965H1.5C1.22386 4 1 4.22385 1 4.5C1 4.77457 1.22133 4.99746 1.49531 4.99997L1.50768 5H14.4923L14.5047 4.99997C14.7787 4.99746 15 4.77457 15 4.5C15 4.22385 14.7761 4 14.5 4H13.5003ZM2.06379 6L2.86778 12.6793C2.9585 13.4329 3.59794 14 4.35703 14H11.643C12.4021 14 13.0415 13.4329 13.1322 12.6793L13.9362 6H2.06379ZM7 8.5C7 8.22385 6.77614 8 6.5 8C6.22386 8 6 8.22385 6 8.5V11.5C6 11.7761 6.22386 12 6.5 12C6.77614 12 7 11.7761 7 11.5V8.5ZM9.5 8C9.77614 8 10 8.22385 10 8.5V11.5C10 11.7761 9.77614 12 9.5 12C9.22386 12 9 11.7761 9 11.5V8.5C9 8.22385 9.22386 8 9.5 8Z" fill="black"/>
                        </svg>
                    </div>
                    <a href="basket.html" class="burger-link">Корзина</a>
                </div>
            </div>
            <div class="products-separator"></div>
            <div class="burger-nav-items">
                <div>
                    <a href="bakeryMenu.html" class="burger-link">Меню</a>
                </div>
                <div>
                    <a href="aboutCompany.html" class="burger-link">О компании</a>
                </div>
                <div>
                    <div class="burger-link grey">Вопросы по трудоустройству и сотрудничеству - lepetitoven@gmail.com</div>
                </div>
                <div>
                    <a target="_blank" href="#" class="instagram big-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                            <path d="M1 24.204V8.81628C1 4.95029 4.13401 1.81628 8 1.81628H24C27.866 1.81628 31 4.95029 31 8.81628V24.204C31 28.07 27.866 31.204 24 31.204H8C4.13401 31.204 1 28.07 1 24.204Z" stroke="#323232" stroke-width="2"/>
                            <path d="M16.1378 23.1224H15.8622C12.2104 23.1224 9.25 20.162 9.25 16.5102C9.25 12.8584 12.2104 9.89795 15.8622 9.89795H16.1378C19.7896 9.89795 22.75 12.8584 22.75 16.5102C22.75 20.162 19.7896 23.1224 16.1378 23.1224Z" stroke="#323232" stroke-width="2"/>
                            <path d="M25.7653 7.69388H25.7347C25.3289 7.69388 25 7.36494 25 6.95918C25 6.55342 25.3289 6.22449 25.7347 6.22449H25.7653C26.1711 6.22449 26.5 6.55342 26.5 6.95918C26.5 7.36494 26.1711 7.69388 25.7653 7.69388Z" stroke="#323232" stroke-width="2"/>
                        </svg>
                        <div class="bold">Le Petit Oven</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <a href="index.html" class="logo-container">
        <img class="logo" src="styles/images/logo.png" alt="logo">
    </a>
    <div class="navigation normal-text bold">
        <div class="tablet mobile burger-container">
            <div class="burger" id="burger-button">
            </div>
        </div>
    
        <div class="desktop navigation-row">
            <a href="bakeryMenu.html" class="nav-item">Меню</a>
            <a href="aboutCompany.html" class="nav-item">О компании</a>
            <div id="vacancies" class="nav-item">Вакансии</div>
            <div id="delivery" class="nav-item">Доставка</div>
        </div>
        <div class="desktop navigation-row">
            <div class="nav-item">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2759 1.21626C9.79881 0.927914 9.20119 0.927915 8.72411 1.21626L3.72411 4.23823C3.27466 4.50988 3 4.99681 3 5.52198V14.6631H6V8.16309C6 7.33466 6.67157 6.66309 7.5 6.66309H11.5C12.3284 6.66309 13 7.33466 13 8.16309V14.6631H16V5.52198C16 4.99681 15.7253 4.50988 15.2759 4.23823L10.2759 1.21626ZM12 14.6631V8.16309C12 7.88695 11.7761 7.66309 11.5 7.66309H7.5C7.22386 7.66309 7 7.88695 7 8.16309V14.6631H12ZM2 5.52198V14.6631H0.5C0.223858 14.6631 0 14.8869 0 15.1631C0 15.4392 0.223858 15.6631 0.5 15.6631H2.13635H18.5C18.7761 15.6631 19 15.4392 19 15.1631C19 14.8869 18.7761 14.6631 18.5 14.6631H17V5.52198C17 4.64669 16.5422 3.83515 15.7931 3.38241L10.7931 0.360428C9.99802 -0.120143 9.00198 -0.120142 8.20685 0.360428L3.20685 3.38241C2.45776 3.83515 2 4.6467 2 5.52198ZM7 5.16309C7 4.88694 7.22386 4.66309 7.5 4.66309H11.5C11.7761 4.66309 12 4.88694 12 5.16309C12 5.43923 11.7761 5.66309 11.5 5.66309H7.5C7.22386 5.66309 7 5.43923 7 5.16309ZM9 10.1631C9 9.88695 8.77614 9.66309 8.5 9.66309C8.22386 9.66309 8 9.88695 8 10.1631V12.1631C8 12.4392 8.22386 12.6631 8.5 12.6631C8.77614 12.6631 9 12.4392 9 12.1631V10.1631Z" fill="black"/>
                    </svg>
                </div>
                <a href="index.html">Главная</a>
            </div>
            <div class="separator nav-item"></div>
            <div class="nav-item">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                        <path d="M1 11.7059H17V15H1V11.7059ZM1 11.7059H17V6.40673C17 6.40349 16.9974 6.40086 16.9941 6.40086H1.00587C1.00263 6.40086 1 6.40349 1 6.40673V11.7059ZM12.4676 1C13.4366 1 14.222 1.7835 14.222 2.75L14.216 2.613L14.2521 2.60333C15.7897 3.12298 16.9117 4.52702 16.995 6.20058L16.9992 6.38933L17 6.395C17 6.39824 16.9974 6.40086 16.9941 6.40086H1.03964C1.0364 6.40086 1.03378 6.39824 1.03378 6.395C1.03378 6.39241 1.03547 6.39013 1.03794 6.38938L8.57895 4.10776L10.874 3.48283C10.7708 3.25991 10.7132 3.01166 10.7132 2.75C10.7132 1.7835 11.4987 1 12.4676 1ZM12.4676 4.5C13.4366 4.5 14.222 3.7165 14.222 2.75C14.222 1.7835 13.4366 1 12.4676 1C11.4987 1 10.7132 1.7835 10.7132 2.75C10.7132 3.7165 11.4987 4.5 12.4676 4.5Z" stroke="black" stroke-linejoin="round"/>
                    </svg>
                </div>
                <a href="productsConfection.html" id="confection-link">Кондитерские изделия</a>
            </div>
            <div class="separator nav-item"></div>
            <div class="nav-item">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                        <path d="M5 4C5.63543 2.9188 6.59762 1.89981 7.81446 1.00147L7.94305 1.0006L9 1M6.44309 1.18855C6.54766 1.16739 6.65307 1.14819 6.75925 1.13099C9.57013 2.31706 11.7482 4.01919 12.8872 5.91474M11 1L11.4793 1.00053C11.7328 1.00052 11.9838 1.01218 12.2313 1.03496C13.4267 1.92545 14.3726 2.9324 15 4M7.46018 5.91474C8.575 4.06583 10.685 2.40155 13.4089 1.22311C13.5288 1.24836 13.6477 1.2765 13.7652 1.30714M18.4264 6.24143L18.652 7.11366C19.135 8.98196 18.0121 10.8881 16.1438 11.3712C15.8581 11.4451 15.5642 11.4825 15.2692 11.4825L4.4942 11.4827C2.56446 11.4827 1 9.91846 1 7.98871C1 7.69358 1.03738 7.39964 1.11126 7.11391L1.33675 6.24185C2.1346 3.15627 4.91824 1.0008 8.10531 1.00063H11.658C14.845 1.00063 17.6286 3.15593 18.4264 6.24143Z" stroke="black" stroke-width="1.00088" stroke-linejoin="round"/>
                    </svg>
                </div>
                <a href="productsBakery.html" id="bakery-link">Выпечка</a>
            </div>
            <div class="separator nav-item"></div>
            <div class="nav-item">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.85355 0.146443C6.04882 0.341705 6.04882 0.658287 5.85355 0.85355L3.70711 3H12.2929L10.1464 0.85355C9.95118 0.658287 9.95118 0.341705 10.1464 0.146443C10.3417 -0.0488194 10.6583 -0.0488194 10.8536 0.146443L13.7071 3H14.5C15.3284 3 16 3.67157 16 4.5C16 5.171 15.5594 5.73909 14.9518 5.93077L14.1251 12.7988C13.9739 14.0549 12.9081 15 11.643 15H4.35703C3.09188 15 2.02614 14.0549 1.87495 12.7988L1.04824 5.93077C0.440585 5.73909 0 5.171 0 4.5C0 3.67157 0.671573 3 1.5 3H2.29289L5.14645 0.146443C5.34171 -0.0488194 5.65829 -0.0488194 5.85355 0.146443ZM13.5003 4C13.5001 4 13.4999 4 13.4997 4H2.50035H2.49965H1.5C1.22386 4 1 4.22385 1 4.5C1 4.77457 1.22133 4.99746 1.49531 4.99997L1.50768 5H14.4923L14.5047 4.99997C14.7787 4.99746 15 4.77457 15 4.5C15 4.22385 14.7761 4 14.5 4H13.5003ZM2.06379 6L2.86778 12.6793C2.9585 13.4329 3.59794 14 4.35703 14H11.643C12.4021 14 13.0415 13.4329 13.1322 12.6793L13.9362 6H2.06379ZM7 8.5C7 8.22385 6.77614 8 6.5 8C6.22386 8 6 8.22385 6 8.5V11.5C6 11.7761 6.22386 12 6.5 12C6.77614 12 7 11.7761 7 11.5V8.5ZM9.5 8C9.77614 8 10 8.22385 10 8.5V11.5C10 11.7761 9.77614 12 9.5 12C9.22386 12 9 11.7761 9 11.5V8.5C9 8.22385 9.22386 8 9.5 8Z" fill="black"/>
                    </svg>
                </div>
                <a href="basket.html">Корзина</a>
            </div>
        </div>
    </div>
    
`
// ОТОБРАЖЕНИЕ ФУТЕРА
document.getElementById('contacts').innerHTML =
`
    <div class="contacts">
    <a target="_blank" href="" class="instagram big-text desktop-tablet">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
            <path d="M1 24.204V8.81628C1 4.95029 4.13401 1.81628 8 1.81628H24C27.866 1.81628 31 4.95029 31 8.81628V24.204C31 28.07 27.866 31.204 24 31.204H8C4.13401 31.204 1 28.07 1 24.204Z" stroke="#323232" stroke-width="2"/>
            <path d="M16.1378 23.1224H15.8622C12.2104 23.1224 9.25 20.162 9.25 16.5102C9.25 12.8584 12.2104 9.89795 15.8622 9.89795H16.1378C19.7896 9.89795 22.75 12.8584 22.75 16.5102C22.75 20.162 19.7896 23.1224 16.1378 23.1224Z" stroke="#323232" stroke-width="2"/>
            <path d="M25.7653 7.69388H25.7347C25.3289 7.69388 25 7.36494 25 6.95918C25 6.55342 25.3289 6.22449 25.7347 6.22449H25.7653C26.1711 6.22449 26.5 6.55342 26.5 6.95918C26.5 7.36494 26.1711 7.69388 25.7653 7.69388Z" stroke="#323232" stroke-width="2"/>
        </svg>
        <div class="bold">Le Petit Oven</div>
    </a>
    <a target="_blank" href="" class="mobile">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
            <path d="M1 24.204V8.81628C1 4.95029 4.13401 1.81628 8 1.81628H24C27.866 1.81628 31 4.95029 31 8.81628V24.204C31 28.07 27.866 31.204 24 31.204H8C4.13401 31.204 1 28.07 1 24.204Z" stroke="#323232" stroke-width="2"/>
            <path d="M16.1378 23.1224H15.8622C12.2104 23.1224 9.25 20.162 9.25 16.5102C9.25 12.8584 12.2104 9.89795 15.8622 9.89795H16.1378C19.7896 9.89795 22.75 12.8584 22.75 16.5102C22.75 20.162 19.7896 23.1224 16.1378 23.1224Z" stroke="#323232" stroke-width="2"/>
            <path d="M25.7653 7.69388H25.7347C25.3289 7.69388 25 7.36494 25 6.95918C25 6.55342 25.3289 6.22449 25.7347 6.22449H25.7653C26.1711 6.22449 26.5 6.55342 26.5 6.95918C26.5 7.36494 26.1711 7.69388 25.7653 7.69388Z" stroke="#323232" stroke-width="2"/>
        </svg>
    </a>
    <div class="big-text"><span class="bold">Задать вопрос -</span> lepetitoven@gmail.com</div>
    </div>
`
// ЗАКРЫТЬ ОКНО ВАКАНСИЙ/ДОСТАВКИ
function closeHeaderModalWindow(){
    document.getElementById('backdrop').style.display = 'none';
    document.getElementById('header-modal-window').style.display = 'none';
    document.getElementById('close-header-modal-window').style.display = 'none';
    document.getElementById('body').style.overflow = 'visible';
}
// КНОПКА ВАКАНСИИ
let vacanciesLinks = document.querySelectorAll('#vacancies');
vacanciesLinks.forEach((element)=>{
    element.addEventListener('click', function(){
        console.log('Вакансии')
        document.getElementById('header-modal-window').innerHTML =
        `
            <div class="big-text">Вопросы по трудоустройству и сотрудничеству -</div>
            <div class="big-text accent">lepetitoven@gmail.com</div>
        `
    
        document.getElementById('backdrop').style.display = 'block';
        document.getElementById('header-modal-window').style.display = 'flex';
        document.getElementById('body').style.overflow = 'hidden';
        document.getElementById('close-header-modal-window').style.display = 'flex';
    });
})
// КНОПКА ДОСТАВКА
let deliveryLinks = document.querySelectorAll('#delivery');
deliveryLinks.forEach((element)=>{
    element.addEventListener('click', function(){
        console.log('Доставка')

        document.getElementById('header-modal-window').innerHTML =
        `
            <div class="big-text">Возможность доставки, а также цену услуги уточняйте у оператора при оформлении заказа</div>
        `
        
        document.getElementById('backdrop').style.display = 'block';
        document.getElementById('header-modal-window').style.display = 'flex';
        document.getElementById('body').style.overflow = 'hidden';
        document.getElementById('close-header-modal-window').style.display = 'flex';
    });
})

let burgerButton = document.getElementById('burger-button');
let burgerMenu = document.getElementById('burger-menu');
// ОТКРЫТЬ МЕНЮ ПО НАЖАТИЮ НА КНОПКУ
burgerButton.addEventListener('click', function(){
    burgerMenu.classList.toggle('active');
    burgerButton.classList.toggle('active')
});
// ЗАКРЫТЬ МЕНЮ ПРИ ПЕРЕХОДЕ ПО ССЫЛКЕ
let burgerLinks = document.querySelectorAll(".burger-nav > .burger-link");
for (let i = 0; i < burgerLinks.length; i++) {
    burgerLinks[i].onclick = function(){
        document.getElementById(burgerLinks[i].getAttribute("data-link")).scrollIntoView({behavior:"smooth"});
        burgerButton.className = 'header-button';
        burgerMenu.className = 'burger-container';
    }
}