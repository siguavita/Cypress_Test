describe('Inicio New Site', function() {
	it('Abrir home de la nueva web',function(){
		//cy.viewport(1920, 1080)
		cy.visit('https://newsite.supermercap.com/v2/login')
		cy.get('.col > .mq-btn').as('btnentendido')
		cy.wait(5000)
		//cy.get('@btnentendido').click()
		//cy.get('.col > .mq-btn').click()
	})
})