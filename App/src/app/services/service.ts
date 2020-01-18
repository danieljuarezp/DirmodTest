import axios from 'axios';

const client = axios.create({
    baseURL: 'https://localhost:44373/Cotizacion/'
});

export function getRate(source: string){
    return client.get(source);
}

export function getCurrency(source: string, target: string, quality: number){
    return client.get(`${source}/${target}/${quality}`);
}