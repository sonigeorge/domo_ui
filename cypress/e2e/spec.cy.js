describe('Testing To Do App', () => {

  it('Test Adding a single Activity and initial state', () => {
    cy.visit('/index.html');
    cy.get('#todo')
    .then($els => {
      // get Window reference from element
      const win = $els[0].ownerDocument.defaultView
      // use getComputedStyle to read the pseudo selector
      const after = win.getComputedStyle($els[0], 'after')
      // read the value of the `content` CSS property
      const contentValue = after.getPropertyValue('content')
      // the returned value will have double quotes around it, but this is correct
      expect(contentValue).to.eq('"You have nothing to-do!"')
    })
    cy.get('#completed')
    .then($els => {
      // get Window reference from element
      const win = $els[0].ownerDocument.defaultView
      // use getComputedStyle to read the pseudo selector
      const after = win.getComputedStyle($els[0], 'after')
      // read the value of the `content` CSS property
      const contentValue = after.getPropertyValue('content')
      // the returned value will have double quotes around it, but this is correct
      expect(contentValue).to.eq('"You have yet to complete any tasks."')
    })
    cy.get('input').type('Test');
    cy.get('#add').click();
    cy.contains('.todo', 'Test');
  })

  it('Testing Adding multiple Activity and verifying', () => {
    cy.visit('/index.html');
    for (var i=0; i < 10; i++) {
      cy.get('input').type('Test-Multiple' + i);
      cy.get('#add').click();
    }
    var randon = Math.floor(Math.random() * 10);
    // Verify one of the entered Activity is present
    cy.contains('#todo', 'Test-Multiple' + randon);
  })



  it('Incompleted Task Deletion after initially marking it as complete', () => {
    cy.visit('/index.html');
    cy.get('input').type('Test');
    cy.get('#add').click();
    // Mark the Task as Complete
    cy.contains('#todo', 'Test').parent().get('.complete').click();
    // Verify the Task is available in completed section
    cy.contains('#completed', 'Test');

    // Mark the task as not complete.
    cy.contains('#completed', 'Test').parent().get('.complete').click();
    //Ensure Task is back available in to do section
    cy.contains('#todo', 'Test');
    // Delete the task
    cy.contains('#todo', 'Test').parent().get('.remove').click();
    // Refresh the app
    cy.reload()
    // Verify the task is not available anywehre
    cy.get('.todo').should('not.contain', 'Test');
  })

  it('Completed Task Deletion', () => {
    cy.visit('/index.html');
    cy.get('input').type('Test');
    cy.get('#add').click();
    // Mark the Task as Complete
    cy.contains('#todo', 'Test').parent().get('.complete').click();
    // Verify the Task is available in completed section
    cy.contains('#completed', 'Test');

    // Remove the Task from completed state.
    cy.contains('#completed', 'Test').parent().get('.remove').click();
    // Verify the task is not available anywehre
    cy.get('.todo').should('not.contain', 'Test');
  })
})