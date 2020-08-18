import reducers from './reducers'
import { LOAD_GENRES, LOAD_SHOW_DETAIL } from './constants'
 
const genres = [{
    id: 10759,
    name: 'Action & Adventure',
}];

const showDetail = [{
    number_of_seasons: 7,
    episode_run_time: [60],
}]

const showId = 1

// Test redux reducers to detect if the genres &
// details are saved correctly
describe('Testing reducers', () => {
  describe('Reducer', () => {
    it('should set a list of genres', () => {
      const state = { genres: [], showDetails: {} };
      const newState = reducers(state, {
        type: LOAD_GENRES,
        payload: genres,
      });
 
      expect(newState).toEqual({ genres, showDetails: {} });
    });
    it('should set a list', () => {
        const state = { genres, showDetails: {} };
        const newState = reducers(state, {
          type: LOAD_SHOW_DETAIL,
          payload: {
              showDetail,
              showId,
          },
        });
   
        expect(newState).toEqual({ genres, showDetails: {
            [showId]: showDetail,
        } });
      });
  });
});