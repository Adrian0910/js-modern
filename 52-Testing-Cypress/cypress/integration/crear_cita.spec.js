/// <reference types="cypress"/>


describe('Carga la página principal', () => {
    it('Carga la página principal', () => {

        cy.visit('/index.html');

        cy.get('[data-cy=mascota-input]')
            .type('Toby');

        cy.get('[data-cy=propietario-input]')
            .type('Oxim');

        cy.get('[data-cy=telefono-input]')
            .type('56987455');

        cy.get('[data-cy=fecha-input]')
            .type('2020-02-21');

        cy.get('[data-cy=hora-input]')
            .type('13:25');

        cy.get('[data-cy=sintomas-textarea]')
            .type('Esta gordituuuu');

        cy.get('[data-cy=submit-cita]')
            .click();

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success')
    })
});
