
import { Character } from "../models/Character";
import { fetchAPI } from "../utils/FetchAPI"
const API_URL_BASE = import.meta.env.VITE_API_URL_BASE
//const URL_BASE = 'http://localhost:3000/api/'

export class CharacterService {
    static async getAll() {
        return await fetchAPI(API_URL_BASE+'/character', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
    }
    

    static async getById(id:number) {
        return await fetchAPI(API_URL_BASE+'/character/'+id,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
    }

    static async create(character: Partial<Character>) {
        return await fetchAPI(API_URL_BASE+'/character', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character),
            credentials: 'include'
        })
    }

    static async update(id:number, character: Partial<Character>) {
        return await fetchAPI(API_URL_BASE+'/character/'+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character),
            credentials: 'include'
        })
    }
    static async delete(id: number){
        return await fetchAPI(API_URL_BASE+'/character/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
    }



}
export default CharacterService