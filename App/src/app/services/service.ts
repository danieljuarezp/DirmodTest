import axios from 'axios';
import { baseURL } from '../consts/const';

const client = axios.create({
    baseURL: baseURL
});

export function getRate(source: string){
    return client.get(source);
}

export function getCurrency(source: string, target: string, quality: number){
    return client.get(`${source}/${target}/${quality}`);
}