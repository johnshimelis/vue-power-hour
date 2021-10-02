describe('Patient', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it('TC_07 = To verify all the required patient information entered (All fields are filled)', () => {
        cy.get('[name="email"]').type("tikur_reception@gmail.com{enter}");
        cy.get('[name="password"]').type("1234{enter}");
        cy.intercept({
            method: 'POST',
            url: 'https://glaucoma-diagnosis-aait.herokuapp.com/users/login',
        }).as('login');
        cy.get('[type="submit"]').click();
        cy.wait("@login");

        cy.get('[name="firstname"]').type("Beimnet@gmail.com{enter}");
        cy.get('[name="lastname"]').type("Zewdu{enter}");
        cy.get('[name="age"]').type("22{enter}");
        cy.get('[name="region"]').select('Addis Ababa');
        cy.get('[name="subcity"]').select('Addis Ababa');
        cy.get('[name="gender"]').select('Male');
        cy.get('[name="phoneno"]').type("1916732122{enter}");
        cy.get('[name="screentime"]').type("12{enter}");
        
        cy.get('[data-test="register-btn"]').should('not.have.attr', 'disabled');
    })

    it('TC_08 = To verify all the required patient information entered (All fields not filled)', () => {
        cy.get('[name="email"]').type("tikur_reception@gmail.com{enter}");
        cy.get('[name="password"]').type("1234{enter}");
        cy.intercept({
            method: 'POST',
            url: 'https://glaucoma-diagnosis-aait.herokuapp.com/users/login',
        }).as('login');
        cy.get('[type="submit"]').click();
        cy.wait("@login");

        cy.get('[name="firstname"]').type("Beimnet@gmail.com{enter}");
        cy.get('[name="lastname"]').type("Zewdu{enter}");
        cy.get('[name="age"]').type("22{enter}");
        cy.get('[name="region"]').select('Addis Ababa');
        cy.get('[data-test="register-btn"]').should('have.attr', 'disabled');
    })

        it('TC_09 = To verify all the required patient information entered (Patient Successfully registers)', () => {
        cy.get('[name="email"]').type("tikur_reception@gmail.com{enter}");
        cy.get('[name="password"]').type("1234{enter}");
        cy.intercept({
            method: 'POST',
            url: 'https://glaucoma-diagnosis-aait.herokuapp.com/users/login',
        }).as('login');
        cy.get('[type="submit"]').click();
        cy.wait("@login");

        cy.get('[name="firstname"]').type("Beimnet@gmail.com{enter}");
        cy.get('[name="lastname"]').type("Zewdu{enter}");
        cy.get('[name="age"]').type("22{enter}");
        cy.get('[name="region"]').select('Addis Ababa');
        cy.get('[name="subcity"]').select('Addis Ababa');
        cy.get('[name="gender"]').select('Male');
        cy.get('[name="phoneno"]').type("1910032000{enter}");
        cy.get('[name="screentime"]').type("12{enter}");
        cy.intercept({
            method: 'POST',
            url: 'https://glaucoma-diagnosis-aait.herokuapp.com/patients',
        }).as('patientRegister');
        cy.get('[data-test="register-btn"]').click();
        
        cy.wait('@patientRegister').then((interception) => {
            assert.equal(interception.response.statusCode, 201);
        });
    })

    it('TC_10 = To verify search patient using card number is working (Valid card number)', () => {
        cy.get('[name="email"]').type("tikur_reception@gmail.com{enter}");
        cy.get('[name="password"]').type("1234{enter}");

        cy.intercept({
            method: 'POST',
            url: 'https://glaucoma-diagnosis-aait.herokuapp.com/users/login',
        }).as('login');
        cy.get('[type="submit"]').click();
        cy.wait("@login");

        cy.get('[placeholder="Enter Card Number"]').type("1{enter}");

        cy.intercept({
            method: 'POST',
            url: 'https://glaucoma-diagnosis-aait.herokuapp.com/patients/search',
        }).as('search');
        cy.get('[data-test="queue-btn"]').click();
        cy.wait("@search");

        cy.get('[data-test="search-result"]').contains("Success");
    })

    it('TC_11 = To verify search patient using card number is working (Invalid card number)', () => {
        cy.get('[name="email"]').type("tikur_reception@gmail.com{enter}");
        cy.get('[name="password"]').type("1234{enter}");

        cy.intercept({
            method: 'POST',
            url: 'https://glaucoma-diagnosis-aait.herokuapp.com/users/login',
        }).as('login');
        cy.get('[type="submit"]').click();
        cy.wait("@login");

        cy.get('[placeholder="Enter Card Number"]').type("4534{enter}");

        cy.intercept({
            method: 'POST',
            url: 'https://glaucoma-diagnosis-aait.herokuapp.com/patients/search',
        }).as('search');
        cy.get('[data-test="queue-btn"]').click();
        cy.wait("@search");

        cy.get('[data-test="search-result"]').contains("Patient Not Found");
    })

    it('TC_12 = To verify search patient using card number is working (Unknown card number)', () => {
        cy.get('[name="email"]').type("tikur_reception@gmail.com{enter}");
        cy.get('[name="password"]').type("1234{enter}");

        cy.intercept({
            method: 'POST',
            url: 'https://glaucoma-diagnosis-aait.herokuapp.com/users/login',
        }).as('login');
        cy.get('[type="submit"]').click();
        cy.wait("@login");

        cy.get('[placeholder="Enter Card Number"]').type("4534{enter}");

        cy.intercept({
            method: 'POST',
            url: 'https://glaucoma-diagnosis-aait.herokuapp.com/patients/search',
        }).as('search');
        cy.get('[data-test="queue-btn"]').click();
        cy.wait("@search");

        cy.get('[data-test="search-result"]').contains("Patient Not Found");
    })

    // it('TC_11 = To verify search patient using card number is working (Invalid card number)', () => {
    //     cy.get('[name="email"]').type("tikur_reception@gmail.com{enter}");
    //     cy.get('[name="password"]').type("1234{enter}");

    //     cy.intercept({
    //         method: 'POST',
    //         url: 'https://glaucoma-diagnosis-aait.herokuapp.com/users/login',
    //     }).as('login');
    //     cy.get('[type="submit"]').click();
    //     cy.wait("@login");

    //     cy.get('[placeholder="Enter Card Number"]').type("4534{enter}");

    //     cy.intercept({
    //         method: 'POST',
    //         url: 'https://glaucoma-diagnosis-aait.herokuapp.com/patients/search',
    //     }).as('search');
    //     cy.get('[data-test="queue-btn"]').click();
    //     cy.wait("@search");

    //     cy.get('[data-test="search-result"]').contains("Patient Not Found");
    // })

    it('TC_13 = To verify that clicking the patient history display all previously stored data of the current patient (History Existed)', () => {
        cy.get('[name="email"]').type("tikur_doctor@gmail.com{enter}");
        cy.get('[name="password"]').type("1234{enter}");

        cy.intercept({
            method: 'POST',
            url: 'https://glaucoma-diagnosis-aait.herokuapp.com/users/login',
        }).as('login');
        cy.get('[type="submit"]').click();
        cy.wait("@login");

        cy.intercept({
            method: 'GET',
            url: 'https://glaucoma-diagnosis-aait.herokuapp.com/patients/*',
        }).as('patient');
        cy.visit("http://localhost:3000/diagnose/6151852194e136001647cd52");
        cy.wait("@patient");

        cy.get('[data-test="patient-history"]').contains("Doctor Decision:");
    })

    it('TC_14 = To verify that clicking the patient history display all previously stored data of the current patient (History does not exist)', () => {
        cy.get('[name="email"]').type("tikur_doctor@gmail.com{enter}");
        cy.get('[name="password"]').type("1234{enter}");

        cy.intercept({
            method: 'POST',
            url: 'https://glaucoma-diagnosis-aait.herokuapp.com/users/login',
        }).as('login');
        cy.get('[type="submit"]').click();
        cy.wait("@login");

        cy.intercept({
            method: 'GET',
            url: 'https://glaucoma-diagnosis-aait.herokuapp.com/patients/*',
        }).as('patient');
        cy.visit("http://localhost:3000/diagnose/61539f52c9125700162e67e4");
        cy.wait("@patient");

        cy.get('[data-test="patient-history"]').contains("No Previous Record Found!");
    })
})