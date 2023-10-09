describe('Автотесты на форму логина и пароля', function () {
  it('Верный логин и верный пароль', function () {
    cy.visit('https://pokemonbattle.me/login'); 
    cy.get(':nth-child(1) > .auth__input').type('oleg.26.suksun.forev@mail.ru');
    cy.get('#password').type('199107137Suksun26');
    cy.get('.auth__button').click();
    cy.get('.header__btns > [href="/shop"]').click();
    cy.get(':nth-child(2) > .shop__button').click();
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
    cy.get(':nth-child(1) > .pay_base-input-v2').type('10/25');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Doln');
   
    cy.get('.pay-btn').click();
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__submit-button').click();
    
    cy.get('.payment__adv').click()
    cy.get('.header__btns > [href="/shop"]').click();
    cy.get(':nth-child(1) > .shop__button').click();
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
    cy.get(':nth-child(1) > .pay_base-input-v2').type('10/25');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Doln');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').click();
    cy.get('.pay-btn').click();
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__submit-button').click();
    cy.get('.payment__adv').click()




  })
})