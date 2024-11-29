describe('Проверка e2e покупка аватара', function () {

    it('Ввести верный пароль и верный логин', function () {
         cy.visit('https://pokemonbattle.ru/login');                                            // переходим на сайт https://pokemonbattle.ru/
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');                    // вводим верный логин
         cy.get('#password').type('USER_PASSWORD');                                            // вводим верный пароль
         cy.get('.auth__button').click();                                                       //нажимаем кнопку "Подтвердить"
         cy.get('.header__container > .header__id').click();                                    // кликаем на аватар тренера в правом вехнем углу
         cy.get('[href="/shop"]').click();
         cy.get('.available > button').first().click({ force: true });                           // Кликаем купить первого доступного аватара                        
         cy.get('.credit').type('4111111111111111');                                            // вводим номер карты
         cy.get('.k_input_ccv').type('125');                                                    // вводим CVV карты
         cy.get('.k_input_date').type('1224');                                                  // вводим срок действия карты
         cy.get('.k_input_name').type('NMICHAIL');                                                   // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                                             // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                                                     // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                                                 // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');                                 // проверяем наличие и видимость сообщения о успешной покупке
         cy.get('.payment__adv').click();                                                            // Нажимаем на кнопку вернуться в магазин
         cy.get('.header__container > .header__id').click();                                        // кликаем на аватар тренера в правом вехнем углу
         
 })
})