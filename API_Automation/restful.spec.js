const { test, expect } = require('@playwright/test');

test('GET Booking IDs', async ({ request }) => {
    
    const response = await request.get('https://restful-booker.herokuapp.com/booking');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
});

test('GET Booking Details', async ({ request }) => {

    const response = await request.get('https://restful-booker.herokuapp.com/booking/1');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
});

test('Create Booking', async ({ request }) => {

    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            firstname: 'Arun',
            lastname: 'Kumar',
            totalprice: 5000,
            depositpaid: true,
            bookingdates: {
                checkin: '2025-07-01',
                checkout: '2025-07-05'
            },
            additionalneeds: 'Breakfast'
        }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
});

// Generate Auth Token
test('Generate Auth Token', async ({ request }) => {

    const response = await request.post('https://restful-booker.herokuapp.com/auth', {
        data: {
            username: 'admin',
            password: 'password123'
        }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    let token = responseBody.token;

    console.log('Token:', token);
});
test('Update Booking', async ({ request }) => {

    const authResponse = await request.post('https://restful-booker.herokuapp.com/auth', {
        data: {
            username: 'admin',
            password: 'password123'
        }
    });

    const authBody = await authResponse.json();
    const token = authBody.token;

    const response = await request.put('https://restful-booker.herokuapp.com/booking/1', {
        headers: {
            Cookie: `token=${token}`,
            'Content-Type': 'application/json'
        },
        data: {
            firstname: 'Arun Updated',
            lastname: 'Kumar',
            totalprice: 6000,
            depositpaid: true,
            bookingdates: {
                checkin: '2025-07-01',
                checkout: '2025-07-06'
            },
            additionalneeds: 'Lunch'
        }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log('Updated Booking:', responseBody);
});
// Delete Booking
test('Delete Booking', async ({ request }) => {

    const authResponse = await request.post('https://restful-booker.herokuapp.com/auth', {
        data: {
            username: 'admin',
            password: 'password123'
        }
    });

    const authBody = await authResponse.json();
    const token = authBody.token;

    const response = await request.delete('https://restful-booker.herokuapp.com/booking/1', {
        headers: {
            Cookie: `token=${token}`
        }
    });

    expect(response.status()).toBe(201);

    console.log('Booking deleted successfully');
});