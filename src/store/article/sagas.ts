import axios from 'axios';

import {call, put, takeEvery} from 'redux-saga/effects';

import { FETCH_ARTICLE_DETAIL_REQUEST, fetchArticleDetail, createNote, CREATE_NOTE_REQUEST} from './actions';
import {HOST} from 'constants/requests';
import { NoteInfo } from './types';


const fetchArticleDetailApi = (token, id )=>
    axios.get(HOST + `/articles/${id}/`, {
        headers:{Authorization : `token ${token}`},
    });

function* fetchArticleDetailAsync(action){
    
    try{
        const token = localStorage.getItem('token');
        const id = action.payload;
        const res = yield call(fetchArticleDetailApi, token, id);
        
        
        yield put(fetchArticleDetail.success(res.data));
    }catch(e){
        
        yield put(fetchArticleDetail.failure());
    }
}

const createNoteApi = (token : any,payload :NoteInfo)=> axios.post(HOST + '/notes/', payload,{headers:{Authorization : `token ${token}`},});

function* createNoteAsync(action:{type:string, payload: NoteInfo}){
    console.log(action.payload);
    
    try{
        const token = localStorage.getItem('token');
        const res = yield call(createNoteApi, token, action.payload);
        
        yield put(createNote.success(res.data));
    }catch(e){
        console.log(e);
        
        yield put(createNote.failure());
    }
}


export function* watchArticleDetail() {
    yield takeEvery(FETCH_ARTICLE_DETAIL_REQUEST, fetchArticleDetailAsync);
    yield takeEvery(CREATE_NOTE_REQUEST, createNoteAsync);
}