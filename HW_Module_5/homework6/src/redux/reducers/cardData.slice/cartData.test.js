import cardDataReducer, {addData} from './cardData.slice';

describe('cardDataSlice', () => {
  const initialState = {cardData: {}};
  const testPayload = {name: 'John Doe', email: 'johndoe@example.com'};

  test('should add data to cardData', () => {
    const action = addData(testPayload);
    const newState = cardDataReducer(initialState, action);
    expect(newState.cardData).toEqual(testPayload);
  });
});
