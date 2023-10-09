describe('Автотесты на форму логина и пароля', function () {
    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
     })
 })
        it('Востановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        
    })

    it('Не правильный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('qwerty@mai.ru');
       cy.get('#pass').type('12345678');
       cy.get('#loginButton').click();
       cy.contains('Такого логина или пароля нет').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
    it('правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('12345678');
       cy.get('#loginButton').click();
       cy.contains('Такого логина или пароля нет').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
    it('неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('blabla@mail.ru');
       cy.get('#pass').type(' iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Такого логина или пароля нет').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
    it('невалидная почта , правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('blablamail.ru');
       cy.get('#pass').type(' iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Нужно исправить проблему валидации').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
    it('невалидная почта , правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('GerMan@Dolnikov.ru');
       cy.get('#pass').type(' iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Нужно исправить проблему валидации').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
