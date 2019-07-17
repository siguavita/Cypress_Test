/// <reference types="Cypress" />

describe('Inicio New Site', function() {
	it('Abrir home de la nueva web',function(){
		//cy.viewport(1920, 1080)
		cy.visit('https://newsite.supermercap.com/v2/')
		cy.wait(8000)
		cy.get('.col > .mq-btn').clcik()
		//cy.get('@btnentendido').click()
		//cy.get('.col > .mq-btn').click()
	})
})