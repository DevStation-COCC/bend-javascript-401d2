const Teams = require('../teams-model.js');
const teams = new Teams();

describe('Teams Model', () => {

  afterEach(() => {
    teams.database = [];
  });

  it('can post() a new valid team to database', () => {
    // Arrange
    let obj = {name: 'Red Sox', division: 'AL'};

    // Act
    return teams.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          // Assert
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() all team objects from database', () => {
    // Arrange
    let obj = {name: 'Red Sox', division: 'AL'};
    
    return teams.post(obj)
      .then(record => {
        return teams.get()
          .then(records => {
            expect(records).toBeDefined();
            expect(records.length).toBe(1);
            expect(records[0].id).toBeDefined();
            expect(records[0].name).toEqual(obj.name);
            expect(records[0].division).toEqual(obj.division);
          });
      });
  });

  it('can get(id) of team object from database', () => {
    // Arrange
    let obj = {name: 'Red Sox', division: 'AL'};
    
    return teams.post(obj)
      .then(record => {
        return teams.get(record.id)
          .then(records => {
            expect(records).toBeDefined();
            expect(records.length).toBe(1);
            expect(records[0].id).toBeDefined();
            expect(records[0].name).toEqual(obj.name);
            expect(records[0].division).toEqual(obj.division);
          });
      });
  });
  
});