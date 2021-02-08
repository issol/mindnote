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
        console.log(res.data);
        
        yield put(fetchArticleDetail.success(res.data));
    }catch(e){
        
        yield put(fetchArticleDetail.failure());
    }
}

const createNoteApi = (token : any, id :any, payload :NoteInfo)=> axios.post(HOST + `/articles/${id}/`, payload,{headers:{Authorization : `token ${token}`},});

function* createNoteAsync(action:{type:string, payload: NoteInfo}){
    
    
    try{
        const token = localStorage.getItem('token');
        const id = action.payload.id;
        const res = yield call(createNoteApi, token, id, action.payload);
        
        
        yield put(createNote.success(res.data));
    }catch(e){
        
        yield put(createNote.failure());
    }
}


export function* watchArticleDetail() {
    yield takeEvery(FETCH_ARTICLE_DETAIL_REQUEST, fetchArticleDetailAsync);
    yield takeEvery(CREATE_NOTE_REQUEST, createNoteAsync);
}