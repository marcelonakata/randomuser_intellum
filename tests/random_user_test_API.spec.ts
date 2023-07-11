import { test, expect } from '@playwright/test';

test.describe('Random User API Test Suite', () => {

  test('2.1 GET Validate response body layout', async ({ request }) => {
    const response = await request.get("/api");
  
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    const user = responseBody.results[0];
    
    // Validate the layout
    expect(user.gender).toBeDefined();
    expect(typeof user.gender).toBe('string');
    expect(user.name.title).toBeDefined();
    expect(typeof user.name.title).toBe('string');
    expect(user.name.first).toBeDefined();
    expect(typeof user.name.first).toBe('string');
    expect(user.name.last).toBeDefined();
    expect(typeof user.name.last).toBe('string');
    expect(user.location.street.number).toBeDefined();
    expect(typeof user.location.street.number).toBe('number');
    expect(user.location.street.name).toBeDefined();
    expect(typeof user.location.street.name).toBe('string');
    expect(user.location.city).toBeDefined();
    expect(typeof user.location.city).toBe('string');
    expect(user.location.state).toBeDefined();
    expect(typeof user.location.state).toBe('string');
    expect(user.location.country).toBeDefined();
    expect(typeof user.location.country).toBe('string');
    expect(user.location.postcode).toBeDefined();
    expect(typeof user.location.postcode).toMatch(/string|number/);
    expect(user.location.coordinates.latitude).toBeDefined();
    expect(typeof user.location.coordinates.latitude).toBe('string');
    expect(user.location.coordinates.longitude).toBeDefined();
    expect(typeof user.location.coordinates.longitude).toBe('string');
    expect(user.location.timezone.offset).toBeDefined();
    expect(typeof user.location.timezone.offset).toBe('string');
    expect(user.location.timezone.description).toBeDefined();
    expect(typeof user.location.timezone.description).toBe('string');
    expect(user.email).toBeDefined();
    expect(typeof user.email).toBe('string');
    expect(user.login.uuid).toBeDefined();
    expect(typeof user.login.uuid).toBe('string');
    expect(user.login.username).toBeDefined();
    expect(typeof user.login.username).toBe('string');
    expect(user.login.password).toBeDefined();
    expect(typeof user.login.password).toBe('string');
    expect(user.login.salt).toBeDefined();
    expect(typeof user.login.salt).toBe('string');
    expect(user.login.md5).toBeDefined();
    expect(typeof user.login.md5).toBe('string');
    expect(user.login.sha1).toBeDefined();
    expect(typeof user.login.sha1).toBe('string');
    expect(user.login.sha256).toBeDefined();
    expect(typeof user.login.sha256).toBe('string');
    expect(user.dob.date).toBeDefined();
    expect(typeof user.dob.date).toBe('string');
    expect(user.dob.age).toBeDefined();
    expect(typeof user.dob.age).toBe('number');
    expect(user.registered.date).toBeDefined();
    expect(typeof user.registered.date).toBe('string');
    expect(user.registered.age).toBeDefined();
    expect(typeof user.registered.age).toBe('number');
    expect(user.phone).toBeDefined();
    expect(typeof user.phone).toBe('string');
    expect(user.cell).toBeDefined();
    expect(typeof user.cell).toBe('string');
    expect(user.id.name).toBeDefined();
    expect(typeof user.id.name).toBe('string');
    expect(user.id.value).toBeDefined();
    expect(typeof user.id.value).toMatch(/string|number|object/);
    expect(user.picture.large).toBeDefined();
    expect(typeof user.picture.large).toBe('string');
    expect(user.picture.medium).toBeDefined();
    expect(typeof user.picture.medium).toBe('string');
    expect(user.picture.thumbnail).toBeDefined();
    expect(typeof user.picture.thumbnail).toBe('string');
  });

  test('2.2 GET Requesting multiple users', async ({ request }) => {
    //Generating 5 users
    const qtyUsers = 5;
    
    const response = await request.get("/api", 
      {
        params: {
          results: qtyUsers,
        },
      }
    );
  
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();   
    expect(responseBody.results.length).toEqual(qtyUsers);
    
  });

  test('2.3 GET Requesting a male user', async ({ request }) => {
    //Generating a male user
    const maleGender = 'male';
    
    const response = await request.get("/api", 
      {
        params: {
          gender: maleGender,
        },
      }
    );
  
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();   
    expect(responseBody.results[0].gender).toEqual(maleGender);
    
  });

  test('2.4 GET Requesting a female user', async ({ request }) => {
    //Generating a male user
    const femaleGender = 'female';
    
    const response = await request.get("/api", 
      {
        params: {
          gender: femaleGender,
        },
      }
    );
  
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();   
    expect(responseBody.results[0].gender).toEqual(femaleGender);
    
  });

  test('2.5 GET Requesting a user including fields', async ({ request }) => {
    //Generating a user that only contains 'name'
    const includeField = 'name';
    
    const response = await request.get("/api", 
      {
        params: {
          inc: includeField,
        },
      }
    );
  
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();   
    expect(responseBody.results[0].name).toBeDefined();
    expect(responseBody.results[0].age).not.toBeDefined();
    
  });

  test('2.6 GET Requesting a user excluding fields', async ({ request }) => {
    //Generating a user not contains 'phone'
    const excludeField = 'phone';
    
    const response = await request.get("/api", 
      {
        params: {
          exc: excludeField,
        },
      }
    );
  
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();   
    expect(responseBody.results[0].name).toBeDefined();
    expect(responseBody.results[0].phone).not.toBeDefined();
    
  });

  test('2.7 GET Invalid endpoint', async ({ request }) => {
    const response = await request.get("/api_error");
  
    expect(response.ok()).not.toBeTruthy();
    expect(response.status()).toBe(404);
    
  });
})
