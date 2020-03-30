import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH_START } from 'containers/PokemonCards/constants';
import { searchSuccess, searchError } from 'containers/PokemonCards/actions';
import axios from 'axios';

const getData = url =>
  axios
    .get(url)
    .then(res => res.data)
    .catch(ex => {
      throw ex;
    });

function* search() {
  const query = yield select(state => state.pokemonCards.search);
  const url = `/pokemon/card/${query}`;

  try {
    const data = yield call(getData, url);
    yield put(searchSuccess(data));
  } catch (ex) {
    yield put(searchError(ex));
  }
}

export default function* pokemonCardsSaga() {
  yield takeLatest(SEARCH_START, search);
}
